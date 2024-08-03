import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css'; 

const ProductListAdmin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/api/admin/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      alert('Error deleting product');
    }
  };

  return (
    <div className="container">
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product._id} className="product-card">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button className="button" onClick={() => handleDelete(product._id)}>Delete</button>
          {/* Add edit functionality */}
        </div>
      ))}
    </div>
  );
};

export default ProductListAdmin;
