import React from "react";
import { Navigate, Route } from "react-router-dom";
import { UsuarioPerfilContext } from "../../Hooks/UsuarioContext";

const RotaProtegida = (props) => {
  const { login } = React.useContext(UsuarioPerfilContext);

  if (login) return <Route {...props} />;
  else if (!login) return <Navigate to="/login" />;
  else return null;
};

export default RotaProtegida;
