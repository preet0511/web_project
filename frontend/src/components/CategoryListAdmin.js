import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css'; 

const CategoryListAdmin = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://localhost:5000/api/admin/categories');
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/categories/${id}`);
      setCategories(categories.filter(category => category._id !== id));
    } catch (error) {
      alert('Error deleting category');
    }
  };

  return (
    <div className="container">
      <h2>Category List</h2>
      {categories.map(category => (
        <div key={category._id} className="product-card">
          <h2>{category.name}</h2>
          <p>{category.description}</p>
          <button className="button" onClick={() => handleDelete(category._id)}>Delete</button>
          {/* Add edit functionality */}
        </div>
      ))}
    </div>
  );
};

export default CategoryListAdmin;
