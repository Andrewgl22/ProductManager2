const Product = require('../models/products.models');

module.exports.allProducts = (req,res) => {
        Product.find()
        .then(req => res.json(req))
        .catch(err=>console.log(res.json(err)))
    },

module.exports.addProduct = (req,res) => {
        Product.create(req.body)
        .then(newProdObj => res.json(newProdObj))
        .catch(err => console.log(res.json(err)))
    }

module.exports.oneProduct = (req,res) => {
    // console.log(req)
    console.log(req.params)
    Product.findById(req.params.id)
    .then((oneProd)=>res.json(oneProd))
    .catch(err=>console.log(err))
}