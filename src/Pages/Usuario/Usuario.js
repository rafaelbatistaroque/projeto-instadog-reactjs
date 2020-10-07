import React from "react";
import { Outlet } from "react-router-dom";
import UsuarioHeader from "./Components/UsuarioHeader/UsuarioHeader";
import styles from "./Usuario.module.css";

const Usuario = () => {
  return (
    <section className={`${styles.usuario} container`}>
      <UsuarioHeader />
      <Outlet />
    </section>
  );
};

export default Usuario;
