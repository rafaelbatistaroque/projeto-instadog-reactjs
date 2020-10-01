import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../App/Home/Home";
import Login from "../../App/Login/Login";
import LoginForm from "../../App/Login/Componentes/LoginForm/LoginForm";
import PerdeuSenha from "../../App/Login/Componentes/PerdeuSenha/PerdeuSenha";
import CriarLogin from "../../App/Login/Componentes/CriarLogin/CriarLogin";
import ResetarSenha from "../../App/Login/Componentes/ResetarSenha/ResetarSenha";
import PaginaNaoEncontrada from "../../App/PaginaNaoEncontrada/PaginaNaoEncontrada";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar-senha" element={<CriarLogin />} />
        <Route path="/perdeu-senha" element={<PerdeuSenha  />} />
        <Route path="/resetar-senha" element={<ResetarSenha />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  );
};

export default Rotas;
