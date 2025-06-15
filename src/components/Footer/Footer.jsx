import React from 'react';
import styles from './Footer.module.css';
import AudioButton from '../AudioButton/AudioButton';

// Importe suas imagens de gatinhos
import cat1 from '../../assets/images/gatinho2.png';
import cat2 from '../../assets/images/gatinho2.png';
import cat3 from '../../assets/images/gatinho2.png';
import meowSound from '../../assets/sounds/gatinhomiando01.mp3'; // O som de miado

function Footer() {
  return (
    <footer className={styles.footer}>
      <AudioButton imageSrc={cat1} soundSrc={meowSound} altText="Gato 1" />
      <AudioButton imageSrc={cat2} soundSrc={meowSound} altText="Gato 2" />
      <AudioButton imageSrc={cat3} soundSrc={meowSound} altText="Gato 3" />
    </footer>
  );
}

export default Footer;