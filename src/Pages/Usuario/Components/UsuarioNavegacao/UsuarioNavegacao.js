import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UsuarioPerfilContext } from "../../../../Hooks/UsuarioContext";
import { ReactComponent as MinhasFotos } from "../../../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../../Assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../../Assets/sair.svg";
import styles from "./UsuarioNavegacao.module.css";
import useMedia from "../../../../Hooks/useMedia";

const UsuarioNavegacao = () => {
  const { realizarLogout } = React.useContext(UsuarioPerfilContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia("(max-width: 40rem)");

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (<button
                  aria-label="menu"
                  className={`${styles.botaoMobile}
                  ${mobileMenu && styles.botaoMobileAtivo}`}
                  onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav className={`${mobile ? styles.usuarionavegacaoMobile : styles.usuarionavegacao} ${mobileMenu && styles.navegacaoMobileAtiva}`}>
        <NavLink to="/conta" end activeClassName={styles.active}>
          <MinhasFotos />
          {mobile && "Minha Fotos"}
        </NavLink>
        <NavLink to="estatisticas" activeClassName={styles.active}>
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="postar" activeClassName={styles.active}>
          <Adicionar />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={realizarLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UsuarioNavegacao;
