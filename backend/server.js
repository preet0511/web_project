const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://gurpreetkaur6925:RmtLOgC5Uk3IFj2W@cluster0.bkcbahj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req, res) => res.send('API is running'));

app.listen(port, () => console.log(`Server running on port ${port}`));
