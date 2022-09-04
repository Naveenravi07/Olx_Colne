const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
let db = require("../config/db.config")

router.get('/test', (req, res) => {
    console.log("got req from frontend");
    res.json("hiii")
})

router.post('/signup', (req, res) => {
    let data = req.body
    userController.addUser(data).then((status) => {
        status.displayName = data.name
        res.send({ status })
    }).catch((err) => {
        res.status(400)
    })
})
module.exports = router;