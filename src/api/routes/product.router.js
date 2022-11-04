const { Router } = require('../../config/app');

const ProductRouter = Router();

const {
    getProductBySellerIdController,
    createProductController,
    getProductByNameController,
    getProductByTagController,
} = require('../composer/product.compose');

ProductRouter.get('/products?', async (req, res) => {
    getProductByTagController.execute(req, res);
});
ProductRouter.get('/product/:id_seller', async (req, res) => {
    getProductBySellerIdController.execute(req, res);
});
ProductRouter.get('/product/name/:name', async (req, res) => {
    getProductByNameController.execute(req, res);
});
ProductRouter.post('/product/:id_seller', async (req, res) => {
    createProductController.execute(req, res);
});

module.exports = ProductRouter;
