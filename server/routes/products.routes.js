const prodController = require('../controllers/products.controller');

module.exports = (app) => {
    app.get("/api/products", prodController.allProducts);
    app.post("/api/products", prodController.addProduct);
    app.get("/api/products/:id", prodController.oneProduct);
    app.put("/api/products/:id", prodController.updateProduct);
    app.delete("/api/products/:id", prodController.deleteProduct);
};