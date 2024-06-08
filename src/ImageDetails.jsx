// src/ImageDetails.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ImageDetails.css';

const ImageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    { src: '/bowls.jpg', name: 'Set de bowls de cerámica', summary: 'Hermoso set de bowls chicos ideal para postres.', price: '  $15.000' },
    { src: '/cafetera.jpg', name: 'Cafetera PEABODY', summary: 'Cafetera moderna, perfecta para preparar tu café favorito cada mañana.', price: '$130.000' },
    { src: '/canasto.jpg', name: 'Canasto de ropa plegable', summary: 'Canasto plegable para ropa, práctico y funcional.', price: '$25.000' },
    { src: '/fuente.jpg', name: 'Bowl de vidrio', summary: 'Bowl de vidrio, ideal para servir ensaladas o como pieza central en tu mesa.', price: '$12.000' },
    { src: '/fuente2.jpg', name: 'Bowl de vidrio grande', summary: 'Bowl de vidrio, ideal para servir ensaladas, frutas o como pieza decorativa en tu mesa.', price: '$8.000' },
    { src: '/fuente3.jpg', name: 'Bowl de vidrio grande', summary: 'Bowl de vidrio grande, perfecta para servir platos principales o como pieza central en tu mesa.', price: '$8.000' },
    { src: '/fuenton.jpg', name: 'Fuentón grande', summary: 'Fuentón grande de, ideal para tareas domésticas y almacenamiento.', price: '$8.000' },
    { src: '/heladeraBambi.jpg', name: 'Heladera Bambi', summary: 'Heladera Bambi en perfecto estado, ideal para mantener tus bebidas y alimentos frescos.', price: '$350.000' },
    { src: '/juegoExterior.jpg', name: 'Juego de exterior', summary: 'Conjunto de muebles de jardín, incluye sillas y mesa. Ideal para disfrutar del aire libre con comodidad y estilo.', price: '$220.000' },
    { src: '/led.jpg', name: 'Led Samsung 32 pulgadas', summary: 'Disfruta de tus programas y películas favoritas con esta pantalla LED Samsung de 32 pulgadas, que ofrece una calidad de imagen excepcional y un diseño elegante.', price: '$70.000' },
    { src: '/tv.jpg', name: 'Smart tv LG 43 pulgadas', summary: 'Disfruta de tus programas y películas favoritas con una calidad de imagen excepcional gracias al Smart TV LG de 43 pulgadas. Este televisor ofrece una resolución Full HD que garantiza colores vibrantes y detalles nítidos.', price: '$290.000' },
    { src: '/llavero.jpg', name: 'Llavero de madera', summary: 'Llavero artesanal hecho de madera, resistente y con un diseño único. Ideal para mantener tus llaves organizadas con estilo.', price: '$6.000' },
    { src: '/mesa.jpg', name: 'Mesa de cocina', summary: 'Mesa de cocina, perfecta para organizar todos tipo de utensilios. Con un diseño sencillo y funcional, ideal para cualquier estilo de decoración.', price: '$40.000' },
    { src: '/mesaRatona.jpg', name: 'Mesa ratona moderna', summary: 'Mesa ratona de madera, perfecta para el salón. Con un diseño sencillo y funcional, ideal para cualquier estilo de decoración.', price: '$40.000' },
    { src: '/mesaRatona2.jpg', name: 'Mesa ratona', summary: 'Mesa ratona con superficie de vidrio y estructura de madera. Elegante y moderna, perfecta para el salón.', price: '$40.000' },
    { src: '/palo.jpg', name: 'Palo de Hockey', summary: 'Palo de Hockey en excelente estado - Mercian - 90% carbono.', price: '$190.000' },
    { src: '/perchero.jpg', name: 'Perchero de madera', summary: 'Perchero de madera elegante, ideal para mantener tu ropa organizada. Perfecto para entradas o habitaciones.', price: '$12.000' },
    { src: '/platos.jpg', name: 'Set de fuentes', summary: 'Set de fuentes elegantes, perfectos para servir comidas. Diseño clásico y duradero, ideal para el uso diario.', price: '$9.000' },
    { src: '/setCafe.jpg', name: 'Set de café completo', summary: 'Completo set de café, incluye 4 tazas y 4 platitos. Ideal para servir café a tus invitados.', price: '$8.000' },
    { src: '/vajilla.jpg', name: 'Tazas y platitos', summary: 'Set de tazas y platitos, perfecta para ocasiones especiales. Diseño elegante y duradero.', price: '$2.000 c/u' },
    { src: '/velas.jpg', name: 'Velas decorativas', summary: 'Set de velas, perfectas para crear un ambiente cálido y acogedor en tu hogar.', price: '$2.300 c/u' },
    { src: '/velas2.jpg', name: 'Velas decorativas', summary: 'Set de velas decorativas, ideales para embellecer cualquier espacio.', price: '$1500 c/u' },
    { src: '/fondue.jpg', name: 'Juego de Fondue', summary: 'Disfruta de una experiencia gastronómica única con este completo juego de fondue. Perfecto para compartir momentos especiales con amigos y familiares.', price: '$45.000' }
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
