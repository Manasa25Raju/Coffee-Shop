var express = require("express")
var bodyParser =require("body-parser")
var tasks = require("./routes/routes.js")
var cors = require("cors")
var app = express()

var session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
app.use(bodyParser.urlencoded({ extended: true }));
var options = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'Abhi08338@',
    database:'coffee_shop'
};
app.use(session({
    secret: '1234DSFs@adf1234!@#$asd',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    store: new MySQLStore(options)
  }));
var port = 3000

app.set('components', __dirname + '/client/src/components');
app.engine('vue', require('ejs').renderFile);
// register the session with it's secret ID
// app.use(session({secret: 'bhbhkgfkhffdgdsr', resave: false, saveUninitialized: true}));

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api",tasks)

app.listen(port,function(){
   console.log("server started on port "+port) 
})