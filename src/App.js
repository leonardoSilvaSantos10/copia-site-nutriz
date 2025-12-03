import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header/header";
import Footer from "./componentes/footer/footer"; 

import Home from "./pages/home/home";
import QuemSomos from "./pages/quemSomos/quemSomos";
import Produtos from "./pages/produtos/produtos";
import TrabalheConosco from "./pages/trabalheconosco/trabalheConosco";
import Contato from "./pages/contato/contato";
import Certificacoes from "./pages/certificacoes/certificacoes";

import ProdutoDetalhe from "./componentes/ProdutoDetalhe.js/ProdutoDetalhe";


import "./styles/colors.css";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade/PoliticaDePrivacidade";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/certificacoes" element={<Certificacoes/>} />
        <Route path="/produtos" element={<Produtos/>} />
        <Route path="/trabalheConosco" element={<TrabalheConosco/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/produto/:id" element={<ProdutoDetalhe/>} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
