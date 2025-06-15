import React from 'react';
import styles from './VideoCard.module.css';

function VideoCard({ imageSrc, videoUrl, title }) {
  const handleClick = () => {
    // Abre o URL do vídeo em uma nova aba
    // noopener e noreferrer são importantes para segurança
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.videoCard} onClick={handleClick}>
      <img src={imageSrc} alt={title} className={styles.videoImage} />
      {/* Opcional: Adicionar um ícone de play sobre a imagem */}
      <div className={styles.playOverlay}>
        ▶️
      </div>
      {/* Opcional: Título do vídeo abaixo da imagem */}
      {title && <p className={styles.videoTitle}>{title}</p>}
    </div>
  );
}

export default VideoCard;
