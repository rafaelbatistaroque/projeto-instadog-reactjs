let erros = [];

function Validacao() {
  erros = [];
}

const gerarId = () => Math.floor(Math.random() * 1000) + 1;

Validacao.prototype.ehRequerido = function (value, mensagemErro) {
  if (!value || value.length <= 0) erros.push({ id: gerarId(), mensagemErro });

  return this;
};
Validacao.prototype.ehMenorQue = function (value, min, mensagemErro) {
  if (!value || value.length < min) erros.push({ id: gerarId(), mensagemErro });

  return this;
};
Validacao.prototype.ehMaiorQue = function (value, max, mensagemErro) {
  if (!value || value.length > max) erros.push({ id: gerarId(), mensagemErro });

  return this;
};
Validacao.prototype.deveSerIgual = function (value, len, mensagemErro) {
  if (value.length !== len) erros.push({ id: gerarId(), mensagemErro });

  return this;
};
Validacao.prototype.ehEmail = function (value, mensagemErro) {
  let reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  if (!reg.test(value)) erros.push({ id: gerarId(), mensagemErro });

  return this;
};
Validacao.prototype.ehBadRequest = function (statusCode, mensagemErro) {
  if (statusCode >= 400 && statusCode < 500)
    erros.push({ id: gerarId(), mensagemErro });

  return this;
};

Validacao.prototype.adicionarErro = function (mensagemErro) {
  erros.push({ id: gerarId(), mensagemErro });

  return this;
};

Validacao.prototype.naoEhNumero = function (value, mensagemErro) {
  if (!Number.isInteger(value)) erros.push({ id: gerarId(), mensagemErro });

  return this;
};

Validacao.prototype.erros = function () {
  return erros;
};

Validacao.prototype.LimparErros = function () {
  erros = [];

  return this;
};

Validacao.prototype.ehValido = function () {
  return erros.length === 0;
};

Validacao.prototype.ehInvalido = function () {
  return erros.length > 0;
};

export default Validacao;
