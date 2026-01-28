import { DataTypes } from 'sequelize'
import sequelize from './db.js'
import { User } from './user.model.js'

export const Seller = sequelize.define(
  'Seller',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique:true
    },

    shop_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Seller',
    timestamps: true
  }
)
