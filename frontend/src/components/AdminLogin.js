import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; 

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded admin password for simplicity
    if (password === 'adminpassword') {
      navigate('/admin-dashboard');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter admin password"
      />
      <button onClick={handleLogin} className="button">Login</button>
    </div>
  );
};

export default AdminLogin;
