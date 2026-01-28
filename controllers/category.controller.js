import { createCategory } from '../services/category.service.js'

export const createCategoryController = async (req, res) => {
    // console.log("category api hit!!")
  try {
    await createCategory(req.body)

    res.status(201).json({
      success: true
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}
