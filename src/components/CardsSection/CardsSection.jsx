import React from 'react';
import styles from './CardsSection.module.css';
import Card from '../Card/Card';

// Importe todas as imagens que você usará para os cards
import leaoImg from '../../assets/images/leao.jpg';
import tigreImg from '../../assets/images/leao.jpg';
import oncaImg from '../../assets/images/leao.jpg';
import leopardoImg from '../../assets/images/leao.jpg';

// Importe as imagens para os "gatos domésticos" quando as tiver
// Por enquanto, vou usar as mesmas imagens dos felinos como placeholder
import gatoDomesticoImg from '../../assets/images/leao.jpg'; // Substitua pelo caminho real
import gatoPersaImg from '../../assets/images/leao.jpg';       // Substitua pelo caminho real
import gatoSiamesImg from '../../assets/images/leao.jpg';     // Substitua pelo caminho real
import gatoMaineCoonImg from '../../assets/images/leao.jpg'; // Substitua pelo caminho real


function CardsSection({ title, id }) { // Removemos 'cardsData' dos props

  let currentCardsData = []; // Variável para armazenar os dados da seção atual

  // Define os dados com base no ID da seção
  if (id === 'felinos') {
    currentCardsData = [
      {
        imageSrc: leaoImg,
        title: 'LEÃO',
        scientificName: 'Panthera leo.',
        femaleName: 'Leoa.',
        maleWeight: 'Cerca de 250Kg.',
        description: null,
      },
      {
        imageSrc: tigreImg,
        title: 'TIGRE',
        scientificName: 'Panthera tigris.',
        femaleName: 'Tigresa.',
        maleWeight: 'Cerca de 310Kg.',
        description: null,
      },
      {
        imageSrc: oncaImg,
        title: 'ONÇA PINTADA',
        scientificName: 'Panthera onca.',
        maleWeight: 'Cerca de 96Kg.',
        description: 'É um grande felino que gosta muito...',
        femaleName: null,
        femaleWeight: null,
      },
      {
        imageSrc: leopardoImg,
        title: 'LEOPARDO',
        scientificName: 'Panthera pardus.',
        femaleName: 'Leoparda.',
        femaleWeight: 'Cerca de 90Kg.',
        description: 'Um leopardo tem a força para...',
        maleWeight: null,
      },
    ];
  } else if (id === 'gatos') {
    currentCardsData = [
      {
        imageSrc: gatoDomesticoImg || tigreImg, // Use gatoDomesticoImg se existir, senão tigreImg como placeholder
        title: 'GATO DOMÉSTICO',
        scientificName: 'Felis catus',
        description: 'Um companheiro leal e brincalhão.',
      },
      {
        imageSrc: gatoPersaImg || leaoImg,
        title: 'GATO PERSA',
        scientificName: 'Felis catus',
        description: 'Conhecido por sua pelagem longa e temperamento calmo.',
      },
      {
        imageSrc: gatoSiamesImg || oncaImg,
        title: 'GATO SIAMÊS',
        scientificName: 'Felis catus',
        description: 'Comunicação vocal e olhos azuis marcantes.',
      },
      {
        imageSrc: gatoMaineCoonImg || leopardoImg,
        title: 'GATO MAINE COON',
        scientificName: 'Felis catus',
        description: 'Um gigante gentil com pelo abundante.',
      },
    ];
  }

  return (
    <section id={id} className={styles.cardsSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.cardsContainer}>
        {currentCardsData.map((data, index) => (
          <Card
            key={index} // Use um ID único se tiver (ex: data.id), senão index é ok para listas estáticas
            imageSrc={data.imageSrc}
            title={data.title}
            scientificName={data.scientificName}
            femaleName={data.femaleName}
            maleWeight={data.maleWeight}
            femaleWeight={data.femaleWeight}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
}

export default CardsSection;