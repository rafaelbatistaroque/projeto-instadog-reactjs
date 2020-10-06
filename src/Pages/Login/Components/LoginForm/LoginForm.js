import React from "react";
import styles from "./LoginForm.module.css";
import stylesBtn from "../../../../Components/Form/Button/Button.module.css";
import { Link } from "react-router-dom";
import Input from "../../../../Components/Form/Input/Input";
import Button from "../../../../Components/Form/Button/Button";
import useForm from "../../../../Hooks/useForm";
import { UsuarioPerfilContext } from "../../../../Hooks/UsuarioContext";
import Erro from "../../../../Components/Erro/Erro";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { realizarLogin, erros, carregando } = React.useContext(
    UsuarioPerfilContext
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await realizarLogin(username, password);
  };

  return (
    <section className={`${styles.loginform} animarDaEsquerda container`}>
      <h1 className={`titulo`}>Login</h1>
      <form action="" onSubmit={handleSubmit} className={styles.form}>
        <Input label="Username" name="username" {...username} />
        <Input label="Senha" tipo="password" name="password" {...password} />

        {carregando ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {erros.map(({ id, mensagemErro }) => (
          <Erro key={id} erro={mensagemErro} />
        ))}
      </form>
      <Link className={styles.perdeuSenha} to="/login/perdeu-senha">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitulo}>Cadastre-se</h2>
        <p>Ainda não possui cadastro? Crie sua conta no site.</p>
        <Link to="/login/criar-senha" className={stylesBtn.botao}>
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
