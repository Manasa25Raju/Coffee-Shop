const Sequelize = require("sequelize");
const db = require("../database/db.js")

module.exports = db.Sequelize.define(
    "order_tabs",
    {
        orderId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        registration_id: {
            type: Sequelize.STRING,
            primaryKey: true

        },
        beverage_type: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.STRING
        },
        cream: {
            type: Sequelize.STRING
        },
        sugar: {
            type: Sequelize.STRING
        },
        extra_shots: {
            type: Sequelize.INTEGER
        },
        milk_type: {
            type: Sequelize.STRING
        },
        flavour: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)