import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import CardsSection from './components/CardsSection/CardsSection'; // Importe CardsSection
import VideoSection from './components/VideoSection/VideoSection';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <HeroSection />
        <CardsSection
          id="felinos" // Apenas passe o ID e o título
          title="Raças dos Grandes Felinos"
        />
        <CardsSection
          id="gatos" // Apenas passe o ID e o título
          title="Tipos de Gatos Domésticos"
        />
        <VideoSection />
      </main>
      <Footer />
    </>
  );
}

export default App;