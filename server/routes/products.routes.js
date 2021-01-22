const prodController = require('../controllers/products.controller');

module.exports = (app) => {
    app.get("/api/products", prodController.allProducts);
    app.post("/api/products", prodController.addProduct);
    app.get("/api/products/:id", prodController.oneProduct);
};