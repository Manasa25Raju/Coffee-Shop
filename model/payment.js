const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.Sequelize.define(
"payments",
{
    id:{
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    email:{
        type:Sequelize.STRING 
    },
    password:{
        type:Sequelize.STRING
    },
    card_no:{
        type:Sequelize.STRING
    },
    cvv:{
        type:Sequelize.STRING
    }

},{
    timestamps:false
}

)