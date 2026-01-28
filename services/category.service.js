import { Category } from '../models/category.model.js'

export const createCategory = async (data) => {
  const { category_name, parent_id } = data

  if (!category_name) {
    throw new Error('category_name is required')
  }

  if (parent_id) {
    const parentCategory = await Category.findByPk(parent_id)
    if (!parentCategory) {
      throw new Error('Parent category not found')
    }
  }

    await Category.create({
    category_name,
    parent_id: parent_id || null
  })

}
