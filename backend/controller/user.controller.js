let db = require("../config/db.config")
let collections = require("../config/collections.config")
let bcrypt = require("bcrypt")
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
    }
}