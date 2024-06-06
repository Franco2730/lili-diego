// src/ContactUs.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="contact-us-container">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <h1>Contáctanos</h1>
        <br/>
      <div className="contact-cards">
        <div className="contact-card">
          <h2>Emilia</h2>
          <p>Puedes contactarme en WhatsApp:</p>
          <a href="https://wa.me/5492613617523" target="_blank" rel="noopener noreferrer">
            Enviar mensaje
          </a>
        </div>
        <div className="contact-card">
          <h2>Diego</h2>
          <p>Puedes contactarme en WhatsApp:</p>
          <a href="https://wa.me/5492634558619" target="_blank" rel="noopener noreferrer">
            Enviar mensaje
          </a>
        </div>
      </div>
      <div className="back-circle" onClick={handleBackClick}>Volver</div>
    </div>
  );
};

export default ContactUs;





