const productRepository = require('../services/productRepository')

//ele pega todos os produto
exports.getAllProducts = async (req, res) => {
    try {
        //Está pegando o produto e instanciando 
        const products = await productRepository.getAllProducts();
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
}

//ele pega um produto com id
exports.getProductById = async (req, res) => {
    try {
        //(req.params.id) => ele está mandando o numero do id
        const product = await productRepository.getProductById(req.params.id)
        if (!product) {
            res.status(404).json({ error: "Produto não encontrado." })
        } else {
            res.status(200).json(product)
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
}

//Cria um produto
exports.createProduct = async (req, res) => {
    try {
        const product = await productRepository.createProduct(req.body)
        res.status(201).json(product)
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
}

//Atualiza produto
exports.updateProduct = async (req, res) => {
    try {
        const product = await productRepository.updateProduct(req.params.id, req.body)
        if (!product) {
            res.status(404).json({ error: "Produto não encontrado" })
        } else {
            res.status(200).json(product)
        }
    } catch (err) {
        res.status(500).json({ error: err.toString })
    }
}

//Deleta produto
exports.deletProduct = async (req, res) => {
    try {
        const product = await productRepository.deleteProduct(req.params.id)
        if (!product) {
            res.status(404).json({ error: 'Poduto não encontrado.' })
        } else {
            res.status(200).json({ msg: 'Produto deletado com sucesso.' })
        }
    } catch (err) {
        res.status(500).json({ error: err.toString })
    }
}


