import React from 'react';
import styles from './Card.module.css';

function Card({ imageSrc, title, scientificName, femaleName, maleWeight, femaleWeight, description }) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
      {scientificName && <p className={styles.cardDetail}>Nome científico: {scientificName}</p>}
      {femaleName && <p className={styles.cardDetail}>Fêmea: {femaleName}</p>}
      {maleWeight && <p className={styles.cardDetail}>Macho: {maleWeight}</p>}
      {femaleWeight && <p className={styles.cardDetail}>Fêmea: {femaleWeight}</p>}
      {description && <p className={styles.cardDescription}>{description}</p>}
    </div>
  );
}

export default Card;