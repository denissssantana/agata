// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';
import menina from '../../assets/images/helo.png'; // Ajuste o caminho da imagem da menina

// Receba a prop 'id'
function HeroSection({ id }) {
  return (
    // Aplique o id à tag <section>
    <section id={id} className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        <img src={menina} alt="Menina Heloísa" className={styles.heroImage} />
        <div className={styles.heroText}>
          <p>Um site bem legal para minha querida sobrinha Heloísa curtir de montão!</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;