import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles.css'; 

const Cart = () => {
  const { cart, removeFromCart, adjustQuantity } = useContext(CartContext);

  return (
    <div className="container">
      {cart.map(product => (
        <div key={product._id} className="product-card">
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button className="button" onClick={() => removeFromCart(product._id)}>Remove from Cart</button>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) => adjustQuantity(product._id, e.target.value)}
            className="input-quantity"
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
