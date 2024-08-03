import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'; 

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    stock: 0,
    imageUrl: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/products', product);
      alert('Product created');
      setProduct({
        name: '',
        description: '',
        price: 0,
        category: '',
        stock: 0,
        imageUrl: ''
      });
    } catch (error) {
      alert('Error creating product');
    }
  };

  return (
    <div className="container">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
        <label>Description:</label>
        <input type="text" name="description" value={product.description} onChange={handleChange} required />
        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required />
        <label>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} required />
        <label>Stock:</label>
        <input type="number" name="stock" value={product.stock} onChange={handleChange} required />
        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} required />
        <button type="submit" className="button">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
