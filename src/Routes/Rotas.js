import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import LoginForm from "../Pages/Login/Components/LoginForm/LoginForm";
import PerdeuSenha from "../Pages/Login/Components/PerdeuSenha/PerdeuSenha";
import CriarLogin from "../Pages/Login/Components/CriarLogin/CriarLogin";
import ResetarSenha from "../Pages/Login/Components/ResetarSenha/ResetarSenha";
import PaginaNaoEncontrada from "../Pages/PaginaNaoEncontrada/PaginaNaoEncontrada";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar-senha" element={<CriarLogin />} />
        <Route path="/perdeu-senha" element={<PerdeuSenha />} />
        <Route path="/resetar-senha" element={<ResetarSenha />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  );
};

export default Rotas;
