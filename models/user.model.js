import { DataTypes } from "sequelize";
import sequelize from "./db.js";
import bcrypt from 'bcrypt';


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
        password:{
            type: DataTypes.STRING,
            allowNull:false
        },
        role: {
            type: DataTypes.ENUM('Customer', 'Seller','Admin'),
            defaultValue: 'Customer',
            allowNull: false
        }
    },
    {
        tableName: 'User',
        paranoid: true
    },
)
User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

User.beforeUpdate(async (user) => {
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});
