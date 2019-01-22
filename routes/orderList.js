var  express = require("express")
var router = express.Router()
const Order = require("../model/orderedList")

router.get("/orders",(req,res)=>{
    Order.findAll()
    .then(orders=> {
        res.json(orders)
    })
    .catch(err=>{
        res.send("error:" +err)
    })
})

module.exports= router