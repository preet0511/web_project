import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles.css'; 

const OrderSummary = () => {
  const { state } = useLocation();
  const { cart } = state || { cart: [] };

  const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <div className="container">
      <h2>Order Summary</h2>
      <ul>
        {cart.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price} x {product.quantity}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default OrderSummary;
