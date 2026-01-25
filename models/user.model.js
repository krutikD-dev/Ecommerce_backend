import { DataTypes } from "sequelize";
import sequelize from "./db.js";

export const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        role: {
            type: DataTypes.ENUM('Customer', 'Seller'),
            defaultValue: 'Customer',
            allowNull: false
        }
    },
    {
        tableName: 'User',
        paranoid: true
    },
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true