// src/ImageDetails.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ImageDetails.css';

const ImageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    { src: '../public/bowls.jpg', name: 'Set de bowls de cerámica', summary: 'Hermoso set de bowls chicos ideal para postres.', price: '  $15.000' },
    { src: '../public/cafetera.jpg', name: 'Cafetera PEABODY', summary: 'Cafetera moderna, perfecta para preparar tu café favorito cada mañana.', price: '$130.000' },
    { src: '../public/canasto.jpg', name: 'Canasto de ropa plegable', summary: 'Canasto plegable para ropa, práctico y funcional.', price: '$25.000' },
    { src: '../public/fuente.jpg', name: 'Fuente de vidrio', summary: 'Fuente decorativa de vidrio, ideal para servir ensaladas o como pieza central en tu mesa.', price: '$12.000' },
    { src: '../public/fuente2.jpg', name: 'Fuente de vidrio grande', summary: 'Fuente de vidrio, ideal para servir ensaladas, frutas o como pieza decorativa en tu mesa.', price: '$8.000' },
    { src: '../public/fuente3.jpg', name: 'Fuente de vidrio grande', summary: 'Fuente de vidrio grande, perfecta para servir platos principales o como pieza central en tu mesa.', price: '$8.000' },
    { src: '../public/fuenton.jpg', name: 'Fuentón grande', summary: 'Fuentón grande de, ideal para tareas domésticas y almacenamiento.', price: '$8.000' },
    { src: '../public/heladeraBambi.jpg', name: 'Heladera Bambi', summary: 'Heladera Bambi en perfecto estado, ideal para mantener tus bebidas y alimentos frescos.', price: '$350.000' },
    { src: '../public/juegoExterior.jpg', name: 'Juego de exterior', summary: 'Conjunto de muebles de jardín, incluye sillas y mesa. Ideal para disfrutar del aire libre con comodidad y estilo.', price: '$220.000' },
    { src: '../public/led.jpg', name: 'Led Samsung 32 pulgadas', summary: 'Disfruta de tus programas y películas favoritas con esta pantalla LED Samsung de 32 pulgadas, que ofrece una calidad de imagen excepcional y un diseño elegante.', price: '$70.000' },
    { src: '../public/llavero.jpg', name: 'Llavero de madera', summary: 'Llavero artesanal hecho de madera, resistente y con un diseño único. Ideal para mantener tus llaves organizadas con estilo.', price: '$6.000' },
    { src: '../public/mesa.jpg', name: 'Mesa de cocina', summary: 'Mesa de cocina, perfecta para organizar todos los utensilios de la mujer . Con un diseño sencillo y funcional, ideal para cualquier estilo de decoración.', price: '$40.000' },
    { src: '../public/mesaRatona.jpg', name: 'Mesa ratona moderna', summary: 'Mesa ratona de madera, perfecta para el salón. Con un diseño sencillo y funcional, ideal para cualquier estilo de decoración.', price: '$40.000' },
    { src: '../public/mesaRatona2.jpg', name: 'Mesa ratona', summary: 'Mesa ratona con superficie de vidrio y estructura de madera. Elegante y moderna, perfecta para el salón.', price: '$40.000' },
    { src: '../public/palo.jpg', name: 'Palo de Hockey', summary: 'Palo de Hockey en excelente estado - Mercian - 90% carbono.', price: '$190.000' },
    { src: '../public/perchero.jpg', name: 'Perchero de madera', summary: 'Perchero de madera elegante, ideal para mantener tu ropa organizada. Perfecto para entradas o habitaciones.', price: '$12.000' },
    { src: '../public/platos.jpg', name: 'Set de fuentes', summary: 'Set de fuentes elegantes, perfectos para servir comidas. Diseño clásico y duradero, ideal para el uso diario.', price: '$9.000' },
    { src: '../public/setCafe.jpg', name: 'Set de café completo', summary: 'Completo set de café, incluye 4 tazas y 4 platitos. Ideal para servir café a tus invitados.', price: '$8.000' },
    { src: '../public/vajilla.jpg', name: 'Tazas y platitos', summary: 'Set de tazas y platitos, perfecta para ocasiones especiales. Diseño elegante y duradero.', price: '$2.000 c/u' },
    { src: '../public/velas.jpg', name: 'Velas decorativas', summary: 'Set de velas, perfectas para crear un ambiente cálido y acogedor en tu hogar.', price: '$2.300 c/u' },
    { src: '../public/velas2.jpg', name: 'Velas decorativas', summary: 'Set de velas decorativas, ideales para embellecer cualquier espacio.', price: '$1500 c/u' },
    { src: '../public/fondue.jpg', name: 'Juego de Fondue', summary: 'Disfruta de una experiencia gastronómica única con este completo juego de fondue. Perfecto para compartir momentos especiales con amigos y familiares.', price: '$45.000' }
  ];

  const product = products[id];

  const handleBackClick = () => {
    navigate('/gallery');
  };

  return (
    <div className="image-details-container">
      <div className="card">
        <img src={product.src} alt={`Producto ${id}`} className="large-image" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.summary}</p>
          <p className="price">{product.price}</p>
        </div>
      </div>
      <div className="back-circle" onClick={handleBackClick}>Volver</div>
    </div>
  );
};

export default ImageDetails;
