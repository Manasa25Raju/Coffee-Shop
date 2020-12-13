var  express = require("express")
var router = express.Router()
const Order = require("../model/orderedList")
const Task = require("../model/register")
const OrderMenu = require("../model/orderMenu")
const feed = require("../model/feed")
const Payment = require("../model/payment")
router.get("/orders",(req,res)=>{
    if(req.session.checkUser){
    Order.findAll()
    .then(orders=> {
        res.json(orders)
    })
    .catch(err=>{
        res.send("error:" +err)
    })
    } else{
        return  res.redirect('/')
    }
})
router.get(`/orderId/:email`,(req,res)=>{
    if(req.session.checkUser){
    Order.findOne({
        where:{
            Registration_id : req.params.email
        }
    })
    .then(orders=> {
        res.json(orders)
    })
    .catch(err=>{
        res.send("error:" +err)
    })
    } else{
        return  res.redirect('/')
    }
})
router.post("/register",(req,res)=>{
    if(req.session.checkUser){
        Task.create(req.body)
        .then(()=>{
        })
        .catch(err=>{
            res.send("Error:"+err)
        })
    }else{
        return  res.redirect('/')
    }
})
router.post("/orderMenu",(req,res)=>{
    if(req.session.checkUser){
        OrderMenu.create(req.body)
        .then(()=>{
            res.send("Oder Placed Successfully")
        })
        .catch(err=>{
            res.send("Error:"+err)
        })

    } else {
        return  res.redirect('/')
    }   
    
})
router.delete("/deleteOrder/:orderId",(req,res)=>{
    if(req.session.checkUser){
        Order.destroy({
            where:{
                orderId:req.params.orderId
            }
        })
        .then(()=>{
            res.send("Task Deleted")
        })
        .catch(err=>{
            res.send("error:"+err)
    })
    } else {
        return  res.redirect('/')
    }
       
})

router.post("/sign_task",(req,res)=>{ 
    // req.session.email = req.body.email
    req.session.save()
    Task.findOne({
        where: {
            password: req.body.password,
            email: req.body.email  
        }      
    })
    .then(task=> {
         req.session.userEmail = req.body.email
        if(!task){
            return res.status(404).send("Invalid Email or Password");
        }
        if(task.email != "" && task.password != "") {
            if ((task.password==req.body.password)&&(task.email==req.body.email)) {
                if ((req.body.password=='barista')&&(req.body.email=='barista@gmail.com')) {
                    req.session.checkUser = true
                    return res.status(201).send('Barista')
                }
                req.session.checkUser = true
                return res.status(200).send("Login Successful");
            }
            else{
                return res.send('User does not exists')
            }
        }
        else{
            return res.send('User Cannot be empty')
        }
    })          
    .catch(err=>{
        res.send("error:" +err)
    })
})
router.get("/signOut", function (req,res) {
    req.session.destroy();
    return res.send('You logged out')
})
router.post("/feedback",(req,res)=>{
    if(req.session.checkUser){
        feed.create(req.body)
        .then(()=>{
        })
        .catch(err=>{
            res.send("Error:"+err)
        })

    } else{
        return  res.redirect('/')
    }
})

router.get("/review",(req,res)=>{
    if(req.session.checkUser){
        feed.findAll()
    .then(reviews=> {
        res.json(reviews)
    })
    .catch(err=>{
        res.send("error:" +err)
    })
    } else {
        return  res.redirect('/')
        // res.status(500).send("login Pls") 
    }
    
})
router.post("/payment",(req,res)=>{ 
    if(req.session.checkUser){
        Payment.create(req.body)
    .then(task=> {
        res.status(200).send("Payment Successful")        
    })          
    .catch(err=>{
        res.send("error:" +err)
    })
    } else {
        return  res.redirect('/')
    }
    
})
module.exports= router