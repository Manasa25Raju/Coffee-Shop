var  express = require("express")
var router = express.Router()
const Order = require("../model/orderedList")
const Task = require("../model/register")
const OrderMenu = require("../model/orderMenu")

router.get("/orders",(req,res)=>{
    Order.findAll()
    .then(orders=> {
        res.json(orders)
    })
    .catch(err=>{
        res.send("error:" +err)
    })
})
router.post("/register",(req,res)=>{
    if(!req.body.last_name){
        res.status(400)
        res.json({
            error:"Invalid Input..."
        })
    }else{
        Task.create(req.body)
        .then(()=>{
            res.send("Registartion Successfull...")
        })
        .catch(err=>{
            res.send("Error:"+err)
        })
    }
})
router.post("/orderMenu",(req,res)=>{
    if(!req.body.beverage_type){
        res.status(400)
        res.json({
            error:"Bad Data"
        })
    }else{
        OrderMenu.create(req.body)
        .then(()=>{
            res.send("Oder Placed Successfully")
        })
        .catch(err=>{
            res.send("Error:"+err)
        })
    }
})
module.exports= router