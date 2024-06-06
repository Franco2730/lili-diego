// src/AboutUs.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="about-us-container">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <h1>Te contamos un poquito acerca de nosotros...</h1>
      <br/>
      <p>
        Somos Diego y Emilia, una pareja de recién casados que ha decidido migrar a otro país en busca de nuevos horizontes. 
        Todas nuestras pertenencias han sido adquiridas con esfuerzo y dedicación, y les hemos dado el cariño y cuidado que se merecen. 
        Hoy, todas esas cositas están a la venta. No dudes en ponerte en contacto con nosotros.
      </p>
      <div className="back-circle" onClick={handleBackClick}>Volver</div>
    </div>
  );
};

export default AboutUs;
