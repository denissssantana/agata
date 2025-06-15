import React from 'react';
import styles from './VideoSection.module.css';
import VideoCard from '../VideoCard/VideoCard';

// Importe suas imagens de capa de vídeo aqui.
// Certifique-se de que o caminho está correto para onde suas imagens estão.
// Exemplo:
import reiLeaoCover from '../../assets/images/rei1.webp'; // Substitua pelo caminho real da sua imagem!

const videoData = [
  {
    imageSrc: reiLeaoCover, // Use a imagem que você importou
    videoUrl: 'https://www.youtube.com/watch?v=R0iI8K8tF0E', // Exemplo: Link real do YouTube
    title: 'Rei Leão - Hakuna Matata',
  },
  {
    imageSrc: reiLeaoCover,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Outro exemplo
    title: 'Video 2 Título',
  },
  {
    imageSrc: reiLeaoCover,
    videoUrl: 'https://www.youtube.com/watch?v=another-video-id',
    title: 'Video 3 Título',
  },
  {
    imageSrc: reiLeaoCover,
    videoUrl: 'https://www.youtube.com/watch?v=yet-another-id',
    title: 'Video 4 Título',
  },
  // Adicione mais vídeos aqui, se quiser
];

function VideoSection() {
  return (
    <section id="helotv" className={styles.videoSection}>
      <h2 className={styles.sectionTitle}>Helo TV</h2>
      <div className={styles.videoCardsContainer}>
        {videoData.map((video, index) => (
          <VideoCard
            key={index} // Idealmente, use um ID único do vídeo se tiver
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
