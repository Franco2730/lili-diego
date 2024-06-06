// src/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/gallery');
  };

  return (
    <div className="landing-container">
      <nav className="navbar">
        <button className="nav-button" onClick={() => navigate('/about')}>Sobre Nosotros</button>
        <button className="nav-button" onClick={() => navigate('/contact')}>Contáctanos</button>
      </nav>
      <div className="image-container">
        <img src="/Landing.png" alt="Garage Sale" className="landing-image" />
        <button className="landing-button" onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default LandingPage;
