import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UsuarioPerfilContext } from "../../Hooks/UsuarioContext";

const Header = () => {
  const { data, realizarLogout } = React.useContext(UsuarioPerfilContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <Dogs />
        </Link>

        {data ? (
          <>
            <Link to="/conta" className={styles.login}>
              {data.nome}
            </Link>
            <button onClick={realizarLogout}>Sair</button>
          </>
        ) : (
          <Link to="/login" className={styles.login}>
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
