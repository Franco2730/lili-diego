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
      <h1>Te cuento un poquito...</h1>
      <br/>
      <p>
      Soy Franco Rosales, un programador de 30 años de la provincia de Mendoza, Argentina. Creé esta página con mucho cariño para mi mejor amiga y su esposo, con el propósito de que pudieran vender todas sus pertenencias y migrar a otro país. Espero que te haya gustado. 😊
      </p>
      <div className="back-circle" onClick={handleBackClick}>Volver</div>
    </div>
  );
};

export default AboutUs;
