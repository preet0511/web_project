import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className='container'>
      {products.map(product => (
        <div key={product._id} className="product-card">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button className='button'>view detail</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
