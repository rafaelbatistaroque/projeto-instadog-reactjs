import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Home/Home";
import Login from "../../Login/Login";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Rotas;
