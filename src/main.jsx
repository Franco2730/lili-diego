import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Importar la fuente directamente en JavaScript
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Poppins:400,600', 'sans-serif']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
