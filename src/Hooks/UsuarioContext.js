import React from "react";
import { TOKEN_POST, TOKEN_VALIDAR_POST, USER_GET } from "../API/api-instadog";
import Validacao from "../Services/validacao";
import { useNavigate } from "react-router-dom";

export const UsuarioPerfilContext = React.createContext();

export const UsuarioPerfil = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [carregando, setCarregando] = React.useState(false);
  const [erros, setErros] = React.useState([]);
  const navegar = useNavigate();

  React.useEffect(() => {
    async function loginSessaoAberta() {
      if (login) return;

      setCarregando(true);
      let token = obterToken();

      if (token === null) {
        setLogin(false);
        setCarregando(false);
        return;
      }

      await validarToken(token);
      await obterUsuario(token);
    }

    loginSessaoAberta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function obterUsuario(token) {
    const { url, options } = USER_GET(token);
    
    const resposta = await realizarRequisicao(url, options);
    setData(resposta);
    setCarregando(false);
    setLogin(true);
    navegar("/conta");
  }

  async function realizarLogin(username, password) {
    setErros([]);
    setCarregando(true);

    let respostaValidacao = validarFormulario(username, password);
    if (respostaValidacao.ehInvalido()) {
      setCarregando(false);
      setLogin(false);
      return setErros(respostaValidacao.erros);
    }

    let { token } = await obterNovoToken(username, password);

    return token && obterUsuario(token);
  }

  async function obterNovoToken(username, password) {
    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });

    let novoToken = await realizarRequisicao(url, options);

    let respostaRequisicaoTratada = handleRespostaRequisicaoLogin(novoToken);
    if (respostaRequisicaoTratada.ehInvalido()) {
      setCarregando(false);
      setLogin(false);
      setErros(respostaRequisicaoTratada.erros);
      return {};
    }

    salvarToken(novoToken);
    return novoToken;
  }

  async function validarToken(token) {
    const { url, options } = TOKEN_VALIDAR_POST(token);

    let respostaTokenValido = await realizarRequisicao(url, options);

    if (respostaTokenValido.data.status !== 200) {
      setCarregando(false);
      setLogin(false);
      return realizarLogout();
    }

    return;
  }

  async function realizarRequisicao(url, options) {
    const promise = await fetch(url, options);
    const resposta = await promise.json();
    return resposta;
  }

  const realizarLogout = () => {
    removerToken("token");
    setCarregando(false);
    setErros([]);
    setData(null);
    setLogin(false);
    navegar("/login");
  };

  function validarFormulario(username, password) {
    return new Validacao()
      .ehRequerido(password.value, "O campo Senha é inválido")
      .ehRequerido(username.value, "O campo Usuário é inválido");
  }

  function handleRespostaRequisicaoLogin(resposta) {
    return new Validacao().ehBadRequest(
      resposta.data.status,
      "Erro no login. Verifique seu dados e tente novamente."
    );
  }

  function obterToken() {
    return window.localStorage.getItem("token");
  }

  function removerToken() {
    return window.localStorage.removeItem("token");
  }

  function salvarToken({ token }) {
    window.localStorage.setItem("token", token);
  }

  return (
    <UsuarioPerfilContext.Provider
      value={{ realizarLogin, realizarLogout, erros, data, carregando, login }}
    >
      {children}
    </UsuarioPerfilContext.Provider>
  );
};
