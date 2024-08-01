import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartProvider from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
