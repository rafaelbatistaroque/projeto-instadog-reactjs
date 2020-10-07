import React from "react";
import { useLocation } from "react-router-dom";
import UsuarioNavegacao from "../UsuarioNavegacao/UsuarioNavegacao";
import styles from "./UsuarioHeader.module.css";

const UsuarioHeader = () => {
  const [titulo, setTitulo] = React.useState("");
  const local = useLocation();

  React.useEffect(() => {
    let tituloDescricao = {
      "/conta/postar": () => setTitulo("Poste sua Foto"),
      "/conta/estatisticas": () => setTitulo("Estatísticas"),
    };

    setTitulo("Minha Conta");

    tituloDescricao.hasOwnProperty(local.pathname) &&
      tituloDescricao[local.pathname]();
  }, [local]);

  return (
    <header className={styles.usuarioheader}>
      <h1 className={`titulo`}>{titulo}</h1>
      <UsuarioNavegacao />
    </header>
  );
};

export default UsuarioHeader;
