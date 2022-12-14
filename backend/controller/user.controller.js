let db = require("../config/db.config")
let collections = require("../config/collections.config")
let bcrypt = require("bcrypt")
const mongoose = require('mongoose');

module.exports = {
    addUser: (data) => {
        return new Promise(async (resolve, reject) => {
            data.password = await bcrypt.hash(data.password, 10)
            await db.get().collection(collections.USER_COLLECTION).insertOne(data).then((result) => {
                resolve(result)
            })
                .catch((err) => {
                    reject(err)
                })
        })
    },

    LoginUser: (data) => {
        return new Promise(async (resolve, reject) => {
            let doccheck = await db.get().collection(collections.USER_COLLECTION).findOne({ email: data.email })
            console.log(doccheck);
            if (!doccheck) {
                reject("noacc")
            }
            console.log(doccheck);
            let passcheck = await bcrypt.compare(data.password, doccheck.password)
            if (passcheck) {
                resolve(doccheck)
            } else {
                reject("wrongpass")
            }
        })
    },

    addProduct: (data) => {
        return new Promise(async (resolve, reject) => {
            await db.get().collection(collections.PRODUCTS_COLLECTION).insertOne(data).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    },

    getAllProducts: () => {
        return new Promise(async (resolve, reject) => {
            let products = await db.get().collection(collections.PRODUCTS_COLLECTION).find().toArray()
            resolve(products)
        })
    },
    getUserDetails: (uid) => {
        return new Promise(async (resolve, reject) => {
            await db.get().collection(collections.USER_COLLECTION).findOne({ _id: mongoose.Types.ObjectId(uid) }).then((user => {
                resolve(user)
            })).catch((err) => {
                reject(err)
            })
        })
    }
}