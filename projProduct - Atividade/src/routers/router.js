const { Router } = require("express")

const productController = require('../controllers/productController')

const router = Router()

//Produtos
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deletProduct);

//Usuario
router.get('/user',userController.getAllUser);
router.get('/user/:id', userController.getUserByID);
router.post('/user ', userController.createUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router