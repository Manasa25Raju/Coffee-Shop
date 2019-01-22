const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.Sequelize.define(
"order_tab",
{
    order_id:{
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    Registration_id:{
        type : Sequelize.INTEGER
    },
    beverage_type:{
        type:Sequelize.STRING
    },
    size:{
        type:Sequelize.STRING
    },
    cream:{
        type : Sequelize.BOOLEAN
    },
    sugar:{
        type : Sequelize.BOOLEAN
    },
    extra_shots:{
        type : Sequelize.INTEGER
    },
    milk_type:{
        type:Sequelize.STRING
    },
    flavour:{
        type:Sequelize.STRING
    },
    quantity:{
        type : Sequelize.INTEGER
    }
},{
    timestamps:false
}

)