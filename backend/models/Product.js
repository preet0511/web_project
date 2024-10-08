const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  imageUrl: String
});

module.exports = mongoose.model('Product', ProductSchema);
