import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product._id !== productId));
  };

  const adjustQuantity = (productId, quantity) => {
    setCart(cart.map(product => product._id === productId ? { ...product, quantity } : product));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, adjustQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
