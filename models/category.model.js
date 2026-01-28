import { DataTypes } from "sequelize";
import sequelize from "./db.js";

export const Category = sequelize.define(
    'Category',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        parent_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        tableName: 'Category'
    }
);
