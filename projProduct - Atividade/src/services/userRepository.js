const { rejects } = require('assert')
const fs = require('fs')
const path = require('path')
const { deleteUser } = require('../controllers/userController')

fileName = 'users.json'
filePath = path.join(__dirname, '..', 'database', fileName)

class UserRepository {
    static async listAllUser() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    if (err.code === "ENOENT") {
                        this.writeUserToFile([])
                        return []
                    } else {
                        reject(err)
                    }
                } else {
                    resolve(JSON.parse(data))
                }
            })
        })
    }
    static async writeUserToFile(user) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(user), (err) => {
                if (err) reject(err);
                console.log(`Data written to file: ${filePath}`);
                resolve(this.getAllProducts());
            });
        });
    }

    static async listUserID() {
        const products = await this.listAllUser();
        return products;
    }

    static async createUser(user) {
        const users = await this.listAllUser();
        user.id = users.length + 1
        users.push(user)
        const insertDB = await this.writeUserToFile(users)
        return insertDB
    }

    static async listUserID(id) {
        const user = await this.listAllUser();
        return user.find(user => user.id === path.parseInt(id))
    }

    static async updateUser(id, user) {
        const users = await this.listAllUser();
        const index = user.findIndex(p => p.id === parseInt(id))
        if (index === -1) {
            return null
        }
        users[index] = user
        const updateDB = await this.writeUserToFile(users)
        return updateDB
    }

    static async deleteUser(id) {
        const user = await this.listAllUser()
        const index = user.findIndex(p => p.id === parseInt(id))
        if (index === -1) {
            return null
        } else {
            user.splice(index, 1)
        }
        await this.writeUserToFile(user)
        return index
    }
}
module.exports = UserRepository
