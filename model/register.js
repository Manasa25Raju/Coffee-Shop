const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.Sequelize.define(
"registrations",
{
    id:{
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    first_name:{
        type:Sequelize.STRING
    },
    last_name:{
        type:Sequelize.STRING  
    },
    email:{
        type:Sequelize.STRING 
    },
    phone_no:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    }

},{
    timestamps:false
}

)