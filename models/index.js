import { User } from './user.model.js'
import { Seller } from './seller.model.js'
import sequelize from './db.js'
import  {Category}  from './category.model.js'
import { product } from './product.model.js'

User.hasOne(Seller, {
  foreignKey: 'user_id'
})

Seller.belongsTo(User, {
  foreignKey: 'user_id'
})


Category.hasMany(Category, {
  foreignKey: 'parent_id',
  as: 'subcategories'
})

Category.belongsTo(Category, {
  foreignKey: 'parent_id',
  as: 'parent'
})



Category.hasMany(product, {
  foreignKey: 'category_id'
})

product.belongsTo(Category, {
  foreignKey: 'category_id'
})


Seller.hasMany(product, {
  foreignKey: 'seller_id',
  onDelete: 'CASCADE'
})

product.belongsTo(Seller, {
  foreignKey: 'seller_id'
})

Category.hasMany(product, {
  foreignKey: 'category_id',
  onDelete: 'RESTRICT'
})

product.belongsTo(Category, {
  foreignKey: 'category_id'
})



export{sequelize,User,Seller,product,Category}
