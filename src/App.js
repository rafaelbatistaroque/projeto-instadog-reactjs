import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Rotas from "./Routes/Rotas";
import { BrowserRouter } from "react-router-dom";
import { UsuarioPerfil } from "./Hooks/UsuarioContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UsuarioPerfil>
          <Header />
          <Rotas />
          <Footer />
        </UsuarioPerfil>
      </BrowserRouter>
    </div>
  );
}

export default App;
