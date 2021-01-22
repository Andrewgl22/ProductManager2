const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:String,
    price: Number, 
    description: String
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;