

import { product } from '../models/product.model.js'
import { Seller } from '../models/seller.model.js'
import { Category } from '../models/category.model.js'


export const addProduct = async (data) => {
  const { product_name, seller_id, category_id } = data

  if (!product_name || !seller_id || !category_id) {
    throw new Error('product_name, seller_id and category_id are required')
  }

 
  const seller = await Seller.findByPk(seller_id)
  if (!seller) {
    throw new Error('Seller not found')
  }


  const category = await Category.findByPk(category_id)
  if (!category) {
    throw new Error('Category not found')
  }

  await product.create({
    product_name,
    seller_id,
    category_id
  })


}


export const getProductById = async (id) => {
  const item = await product.findByPk(id, {
    include: [
      {
        model: Seller,
        attributes: ['id', 'shop_name']
      },
      {
        model: Category,
        attributes: ['id', 'category_name']
      }
    ]
  })

return item

}
