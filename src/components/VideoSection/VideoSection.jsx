// src/components/VideoSection/VideoSection.jsx
import React from 'react';
import styles from './VideoSection.module.css';
import VideoCard from '../VideoCard/VideoCard';

// Importe suas imagens de capa de vídeo aqui.
// ATENÇÃO: Certifique-se de que o nome e o caminho do arquivo estão CORRETOS no seu sistema de arquivos.
import reiLeaoCover from '../../assets/images/rei1.webp'; 

const videoData = [
  {
    imageSrc: reiLeaoCover,
    videoUrl: 'https://www.youtube.com/watch?v=M9-M-Wq98kY', // Exemplo de link do YouTube
    title: 'Rei Leão - Hakuna Matata',
  },
  {
    imageSrc: reiLeaoCover,
    videoUrl: 'https://www.youtube.com/watch?v=YourVideoId2',
    title: 'Outro Filme Legal',
  },
  {
    imageSrc: reiLeaoCover,
    videoUrl: 'https://www.youtube.com/watch?v=YourVideoId3',
    title: 'Aventura na Selva',
  },
  {
    imageSrc: reiLeaoCover,
    videoUrl: 'https://www.youtube.com/watch?v=YourVideoId4',
    title: 'Documentário de Felinos',
  },
];

// O componente VideoSection recebe a prop 'id' do App.jsx
function VideoSection({ id }) { 
  return (
    // A tag <section> deve ter o id correspondente para a navegação por âncora
    <section id={id} className={styles.videoSection}>
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