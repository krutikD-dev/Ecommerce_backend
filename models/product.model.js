import { DataTypes } from 'sequelize'
import sequelize from './db.js'

export const product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    category_id: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'products',
    paranoid: true
  }
)
