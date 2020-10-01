import React from "react";
import "./Global/App.css";
import Header from "./Global/Header/Header";
import Footer from "./Global/Footer/Footer";
import Rotas from "./Global/Rotas/Rotas";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
