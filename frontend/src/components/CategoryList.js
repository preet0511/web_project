import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css'; 

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://localhost:5000/api/categories');
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="container">
      {categories.map(category => (
        <div key={category._id} className="product-card">
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
