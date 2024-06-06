import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GalleryPage.css';

const GalleryPage = () => {
  const navigate = useNavigate();

  const products = [
    { src: '../public/bowls.jpg', name: 'Set 4 bowls chicos.' },
    { src: '../public/cafetera.jpg', name: 'Cafetera PEABODY.' },
    { src: '../public/canasto.jpg', name: 'Canasto de ropa plegable.' },
    { src: '../public/fuente.jpg', name: 'Fuente de vidrio.' },
    { src: '../public/fuente2.jpg', name: 'Bowl vidrio grande.' },
    { src: '../public/fuente3.jpg', name: 'Fuente vidrio grande. ' },
    { src: '../public/fuenton.jpg', name: 'Fuentón grande.' },
    { src: '../public/heladeraBambi.jpg', name: 'Heladera Bambi.' },
    { src: '../public/juegoExterior.jpg', name: 'Juego de exterior.' },
    { src: '../public/led.jpg', name: 'Led Samsung 32 pulgadas.' },
    { src: '../public/llavero.jpg', name: 'Llavero de madera' },
    { src: '../public/mesa.jpg', name: 'Mueble para cocina.' },
    { src: '../public/mesaRatona.jpg', name: 'Mesa ratona de madera.' },
    { src: '../public/mesaRatona2.jpg', name: 'Mesa ratona, madera y vidrio.' },
    { src: '../public/palo.jpg', name: 'Palo de Hockey Mercian - 90% carbono.' },
    { src: '../public/perchero.jpg', name: 'Perchero de madera.' },
    { src: '../public/platos.jpg', name: 'Fuentes.' },
    { src: '../public/setCafe.jpg', name: 'Set de café completo.' },
    { src: '../public/vajilla.jpg', name: 'Set de tazas y platitos.' },
    { src: '../public/velas.jpg', name: 'Velas decorativas.' },
    { src: '../public/velas2.jpg', name: 'Velas decorativas.' },
    { src: '../public/fondue.jpg', name: 'Juego de Fondue.' },
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
        <br/>
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
