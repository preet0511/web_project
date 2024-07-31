const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
mongoose.connect('mongodb+srv://preet:preet123@cluster0.fggfliv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  app.use(express.json());

  app.get('/', (req, res) => res.send('API is running'));
  
  app.listen(port, () => console.log(`Server running on port ${port}`));
