const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://gurpreetkaur6925:RmtLOgC5Uk3IFj2W@cluster0.bkcbahj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// Route Imports
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Route Middleware
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Root Route
app.get('/', (req, res) => res.send('API is running'));

// Start Server
app.listen(port, () => console.log(`Server running on port ${port}`));
