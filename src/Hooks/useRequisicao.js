import React from "react";
import Erro from "../Components/Erro/Erro";
import Validacao from "../Services/validacao";

const useRequisicao = () => {
  const [data, setdata] = React.useState(null);
  const [erroRequisicao, setErroRequisicao] = React.useState([]);
  const [carregando, setCarregando] = React.useState(false);

  const requisicao = React.useCallback(async (url, options) => {
    let respostaTratada;
    let promise;
    let validar = new Validacao();

    try {
      setCarregando(true);
      promise = await fetch(url, options);
      respostaTratada = await promise.json();

      if (!promise.ok) validar.adicionarErro(respostaTratada.message);
    } catch (erro) {
      validar.adicionarErro(erro.message);
      setCarregando(false);
      respostaTratada = null;
    } finally {
      setErroRequisicao(validar.erros);
      setCarregando(false);
      setdata(respostaTratada);
      return { respostaTratada, promise };
    }
  }, []);

  return {
    data,
    carregando,
    erroRequisicao,
    requisicao,
  };
};

export default useRequisicao;
