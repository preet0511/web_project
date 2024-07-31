import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, adjustQuantity } = useContext(CartContext);

  return (
    <div>
      {cart.map(product => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => removeFromCart(product._id)}>Remove from Cart</button>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) => adjustQuantity(product._id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
