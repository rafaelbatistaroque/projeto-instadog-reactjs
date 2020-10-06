import React from "react";
import styles from "./CriarLogin.module.css";
import Erro from "../../../../Components/Erro/Erro";
import Input from "../../../../Components/Form/Input/Input";
import useForm from "../../../../Hooks/useForm";
import Button from "../../../../Components/Form/Button/Button";
import Validacao from "../../../../Services/validacao";
import { CRIAR_USUARIO_POST } from "../../../../API/api-instadog";
import { UsuarioPerfilContext } from "../../../../Hooks/UsuarioContext";
import useRequisicao from "../../../../Hooks/useRequisicao";

const CriarLogin = () => {
  const { realizarLogin } = React.useContext(UsuarioPerfilContext);
  const { requisicao, carregando, erroRequisicao } = useRequisicao();
  const [erros, setErros] = React.useState([]);
  const nome = useForm();
  const email = useForm();
  const senha = useForm();

  React.useEffect(() => {
    setErros(erroRequisicao);
  }, [erroRequisicao]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErros([]);

    let respostaValidacao = validarFormulario();
    if (respostaValidacao.ehInvalido()) {
      return setErros(respostaValidacao.erros);
    }

    await criarUsuario();
  };

  async function criarUsuario() {
    const { url, options } = CRIAR_USUARIO_POST({
      nomeusuario: nome.value,
      email: email.value,
      senha: senha.value,
    });

    await requisicao(url, options);

    if (erros.length) {
      return;
    }

    await realizarLogin(nome, senha);
  }

  function validarFormulario() {
    return new Validacao()
      .ehRequerido(nome.value, "O campo Nome deve ser preenchido")
      .ehMenorQue(nome.value, 2, "O campo Nome deve ter no mínimo 2 caracteres")
      .ehRequerido(email.value, "O campo E-mail deve ser preenchido")
      .ehEmail(email.value, "O campo E-mail é inválido")
      .ehRequerido(senha.value, "O campo Senha deve ser preenchido")
      .ehMenorQue(
        senha.value,
        4,
        "O campo Senha deve ter no mínimo 4 caracteres"
      );
  }

  return (
    <section className={`${styles.criarlogin} animarDaEsquerda`}>
      <h1 className={`titulo`}>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" name="nomeusuario" {...nome} />
        <Input label="E-mail" name="email" {...email} />
        <Input label="Senha" name="senha" tipo="password" {...senha} />

        {carregando ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {erros.map(({ id, mensagemErro }) => (
          <Erro key={id} erro={mensagemErro} />
        ))}
      </form>
    </section>
  );
};

export default CriarLogin;
