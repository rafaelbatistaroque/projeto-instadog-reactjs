import React from "react";
import styles from "./Erro.module.css";

const Erro = ({ erro }) => {
  if (!erro) return null;
  return <small className={`${styles.erro} animarDaEsquerda`}>{erro}</small>;
};

export default Erro;
