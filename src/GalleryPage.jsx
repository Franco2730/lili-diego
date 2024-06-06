// src/GalleryPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GalleryPage.css';

const GalleryPage = () => {
  const navigate = useNavigate();

  const products = [
    { src: '/bowls.jpg', name: 'Set 4 bowls chicos.' },
    { src: '/cafetera.jpg', name: 'Cafetera PEABODY.' },
    { src: '/canasto.jpg', name: 'Canasto de ropa plegable.' },
    { src: '/fuente.jpg', name: 'Fuente de vidrio.' },
    { src: '/fuente2.jpg', name: 'Bowl vidrio grande.' },
    { src: '/fuente3.jpg', name: 'Fuente vidrio grande.' },
    { src: '/fuenton.jpg', name: 'Fuentón grande.' },
    { src: '/heladeraBambi.jpg', name: 'Heladera Bambi.' },
    { src: '/juegoExterior.jpg', name: 'Juego de exterior.' },
    { src: '/led.jpg', name: 'Led Samsung 32 pulgadas.' },
    { src: '/llavero.jpg', name: 'Llavero de madera' },
    { src: '/mesa.jpg', name: 'Mueble para cocina.' },
    { src: '/mesaRatona.jpg', name: 'Mesa ratona de madera.' },
    { src: '/mesaRatona2.jpg', name: 'Mesa ratona, madera y vidrio.' },
    { src: '/palo.jpg', name: 'Palo de Hockey Mercian - 90% carbono.' },
    { src: '/perchero.jpg', name: 'Perchero de madera.' },
    { src: '/platos.jpg', name: 'Fuentes.' },
    { src: '/setCafe.jpg', name: 'Set de café completo.' },
    { src: '/vajilla.jpg', name: 'Set de tazas y platitos.' },
    { src: '/velas.jpg', name: 'Velas decorativas.' },
    { src: '/velas2.jpg', name: 'Velas decorativas.' },
    { src: '/fondue.jpg', name: 'Juego de Fondue.' },
  ];

  const handleMoreInfoClick = (index) => {
    navigate(`/image/${index}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="gallery-container">
      <h1>Nuestras cositas...</h1>
      <div className="images-grid">
        {products.map((product, index) => (
          <div key={index} className="image-wrapper">
            <img src={product.src} alt={product.name} className="gallery-image" />
            <div className="card-content">
              <h3>{product.name}</h3>
              <button className="info-button" onClick={() => handleMoreInfoClick(index)}>Más Info</button>
            </div>
          </div>
        ))}
      </div>
      <div className="back-circle" onClick={handleBackClick}>Volver</div>
    </div>
  );
};

export default GalleryPage;
