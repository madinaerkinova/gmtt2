import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Katalog from "./pages/Katalog";
import DostavkaPage from "./pages/DostavkaPage";
import ProductDetailsPage from "./components/ProductDetailsPage";
import UslugiPage from "./pages/UslugiPage";
import StatyaPage from "./pages/StatyaPage";
import OplataPage from "./pages/OplataPage";
import Prozivoditel from "./pages/Prozivoditel";
import KabinetPodKlyuch from "./pages/KabinetPodKlyuch";
import Garantii from "./pages/Garantii";




const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/proizvoditel" element={<Prozivoditel />} />
            <Route path="/kabinet-pod-klyuch" element={<KabinetPodKlyuch />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/garantii" element={<Garantii />} />
            <Route path="/dostavka" element={<DostavkaPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductDetailsPage />} />
            <Route path="/uslugi" element={<UslugiPage />} />
            <Route path="/statya" element={<StatyaPage />} />
            <Route path="/oplata" element={<OplataPage />} />
          </Routes>
         
        </main>
        <Footer />
      </BrowserRouter>
      <style jsx>{`
        .app {
          font-family: "Arial, sans-serif";
        }
        .app__content {
          padding: 20px;
          background-color: #f9f9f9;
          min-height: calc(100vh - 200px); /* Adjust based on header/footer height */
        }
        .app__footer {
          padding: 20px;
          background-color: #333;
          color: #fff;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default App;
