import React from 'react';
import styles from './AudioButton.module.css';

function AudioButton({ imageSrc, soundSrc, altText }) {
  const playSound = () => {
    const audio = new Audio(soundSrc);
    audio.play();
  };

  return (
    <button onClick={playSound} className={styles.audioButton}>
      <img src={imageSrc} alt={altText} className={styles.buttonImage} />
    </button>
  );
}

export default AudioButton;
