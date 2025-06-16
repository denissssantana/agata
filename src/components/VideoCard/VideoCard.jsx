// src/components/VideoSection/VideoSection.jsx
import React from 'react';
import styles from './VideoSection.module.css';
import VideoCard from '../VideoCard/VideoCard';

// Importe suas imagens de capa de vídeo aqui.
import reiLeaoCover from '../../assets/images/rei1.webp'; // Substitua pelo caminho real da sua imagem!

const videoData = [
  // ... seus dados de vídeo ...
];

// Receba a prop 'id'
function VideoSection({ id }) {
  return (
    // Aplique o id à tag <section>
    <section id={id} className={styles.videoSection}>
      <h2 className={styles.sectionTitle}>Helo TV</h2>
      <div className={styles.videoCardsContainer}>
        {videoData.map((video, index) => (
          <VideoCard
            key={index}
            imageSrc={video.imageSrc}
            videoUrl={video.videoUrl}
            title={video.title}
          />
        ))}
      </div>
    </section>
  );
}

export default VideoSection;