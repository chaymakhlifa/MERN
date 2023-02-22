const productController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api', productController.getAllProduct);
    app.post('/api/Product', productController.createproduct); 
    
}

