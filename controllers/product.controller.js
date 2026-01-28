import { addProduct, getProductById } from '../services/product.service.js'


export const addProductController = async (req, res) => {
    // console.log("add product api hit!!")
    // console.log(req.body)
  try {
    await addProduct(req.body)

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


export const getProductByIdController = async (req, res) => {
  try {
    const elem = await getProductById(req.params.id)

    res.status(200).json({
      success: true,
      data: elem
    })
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message
    })
  }
}
