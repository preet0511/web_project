import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'; 

const CreateCategory = () => {
  const [category, setCategory] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/categories', category);
      alert('Category created');
      setCategory({ name: '', description: '' });
    } catch (error) {
      alert('Error creating category');
    }
  };

  return (
    <div className="container">
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={category.name} onChange={handleChange} required />
        <label>Description:</label>
        <input type="text" name="description" value={category.description} onChange={handleChange} required />
        <button type="submit" className="button">Create Category</button>
      </form>
    </div>
  );
};

export default CreateCategory;
