const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.Sequelize.define(
"feedbacks",
{
    email:{
        type : Sequelize.STRING,
        primaryKey: true,
    },
    feedback1:{
        type:Sequelize.STRING
    },
    feedback2:{
        type:Sequelize.STRING  
    },
    feedback3:{
        type:Sequelize.STRING 
    },
    feedback4:{
        type:Sequelize.STRING
    },
    feedback5:{
        type:Sequelize.STRING
    }

},{
    timestamps:false
}

)