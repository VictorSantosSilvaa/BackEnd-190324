const { Router } = require("express")

const productController = require('../controllers/productController')
const userController = require('../controllers/userController')

const router = Router()

//Produtos
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deletProduct);

//Usuario
router.get('/users',userController.listAllUser );
router.get('/users/:id', userController.listUserID);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router