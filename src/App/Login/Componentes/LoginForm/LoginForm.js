import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <section className={styles.loginform}>
      <h1>Login</h1>
      <Link to="/login/criar-senha">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
