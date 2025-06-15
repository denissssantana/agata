import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png'; // Ajuste o caminho da sua logo

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Helo e Félix Logo" className={styles.logo} />
        <h1 className={styles.title}>Helo e Félix</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#inicio">Início</a></li>
          <li className={styles.navItem}><a href="#felinos">Felinos</a></li>
          <li className={styles.navItem}><a href="#gatos">Gatos</a></li>
          <li className={styles.navItem}><a href="#helotv">Helo TV</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;