import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css'; 
import ProductListAdmin from './ProductListAdmin';
import CreateProduct from './CreateProduct';
import CategoryListAdmin from './CategoryListAdmin';
import CreateCategory from './CreateCategory'; 
import './adminDashboard.css';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsResponse = await axios.get('http://localhost:5000/api/products');
      const categoriesResponse = await axios.get('http://localhost:5000/api/categories');
      setProducts(productsResponse.data);
      setCategories(categoriesResponse.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
    <h2>Admin Dashboard</h2>
    
    <h3>Create New Product</h3>
    <CreateProduct />
    
    <h3>Product List</h3>
    <ProductListAdmin />
    
    <h3>Create New Category</h3>
    <CreateCategory />
    
    <h3>Category List</h3>
    <CategoryListAdmin />
  </div>
  );
};

export default AdminDashboard;
