// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import CardsSection from './components/CardsSection/CardsSection';
import VideoSection from './components/VideoSection/VideoSection';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        {/* Adicione a prop id="inicio" */}
        <HeroSection id="inicio" />
        <CardsSection
          id="felinos"
          title="Raças dos Grandes Felinos"
        />
        <CardsSection
          id="gatos"
          title="Tipos de Gatos Domésticos"
        />
        {/* Adicione a prop id="helotv" */}
        <VideoSection id="helotv" />
      </main>
      <Footer />
    </>
  );
}

export default App;