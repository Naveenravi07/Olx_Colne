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

router.post('/login', (req, res) => {
    let data = req.body
    userController.LoginUser(data).then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
        if (err == "noacc") {
            res.status(200).send("noacc")
        } else if (err == "wrongpass") {
            res.send("wrongpass")
        }
    })
})


router.post('/addproduct', (req, res) => {
    let data = req.body
    userController.addProduct(data).then((resp) => {
        res.send(resp)
    }).catch((err) => {
        res.send(err)
    })
})

router.post('/products', (req, res) => {

    userController.getAllProducts().then((products) => {
        res.send(products)
    })
})

router.post('/userdetails', (req, res) => {
    console.log(req.body.userid);
    userController.getUserDetails(req.body.userid).then((resp) => {
        res.send(resp)
    }).catch((err) => {
        res.status(400).send("Nouser")
    })
})
module.exports = router;