import express from 'express'
import { create_user, delete_user, get_users } from '../controllers/user.controller.js'
import { become_seller } from '../controllers/seller.controller.js'
import { createCategoryController } from '../controllers/category.controller.js'
import { addProductController, getProductByIdController } from '../controllers/product.controller.js'
import { authenticate_user_controller } from '../controllers/auth.controller.js'
import { authenticate } from '../middleware/auth.middleware.js'
import { authorize } from '../middleware/authorize.middleware.js'


const Router = express.Router()

Router.post('/login_user', authenticate_user_controller)

Router.post('/create_user', create_user)

Router.delete('/delete_user/:id',authenticate, authorize('Admin','Seller') ,delete_user)

Router.get('/get_users',authenticate, authorize('Admin'),get_users)

Router.post('/users/:id/become-seller',authenticate, authorize('Admin','Customer'), become_seller)

Router.post('/add_category',authenticate, authorize('Admin', 'Seller'), createCategoryController)

Router.post('/add_product',authenticate, authorize('Admin','Seller'), addProductController)

Router.get('/product/:id',authenticate, authorize('Admin','Seller'), getProductByIdController)

export default Router