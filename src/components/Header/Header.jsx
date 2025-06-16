import React, { useState } from 'react'; // Apenas useState é necessário
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png'; // Ajuste o caminho da sua logo

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Helo e Félix Logo" className={styles.logo} />
        <h1 className={styles.title}>Helo e Félix</h1>
      </div>

      {/* Botão Hambúrguer - Visível apenas em mobile */}
      <button className={styles.hamburgerButton} onClick={toggleMenu} aria-label="Abrir menu">
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </button>

      {/* Navegação - Usa a classe dinâmica para o estado aberto/fechado */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#inicio" onClick={toggleMenu}>Início</a></li>
          <li className={styles.navItem}><a href="#felinos" onClick={toggleMenu}>Felinos</a></li>
          <li className={styles.navItem}><a href="#gatos" onClick={toggleMenu}>Gatos</a></li>
          <li className={styles.navItem}><a href="#helotv" onClick={toggleMenu}>Helo TV</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;