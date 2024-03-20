const UserRepository = require('../services/userRepository');

//ele pega todos os produto
exports.listAllUser = async (req, res) => {
    try {
        //Está pegando o produto e instanciando 
        const user = await UserRepository.getListAllUsers();
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
}

//ele pega um produto com id
exports.listUserID = async (req, res) => {
    try {
        //(req.params.id) => ele está mandando o numero do id
        const user = await UserRepository.getListUserID(req.params.id)
        if (!user) {
            res.status(404).json({ error: "Produto não encontrado." })
        } else {
            res.status(200).json(user)
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
}

//Cria um produto
exports.createUser = async (req, res) => {
    try {
        const user = await UserRepository.createUser(req.body)
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
}

//Atualiza produto
exports.updateUser = async (req, res) => {
    try {
        const user = await UserRepository.updateUser(req.params.id, req.body)
        if (!user) {
            res.status(404).json({ error: "Produto não encontrado" })
        } else {
            res.status(200).json(user)
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
}

//Deleta produto
exports.deleteUser = async (req, res) => {
    try {
        const user = await UserRepository.deleteUser(req.params.id)
        if (!user) {
            res.status(404).json({ error: 'Poduto não encontrado.' })
        } else {
            res.status(200).json({ msg: 'Produto deletado com sucesso.' })
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
}


