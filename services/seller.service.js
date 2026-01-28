import {User} from '../models/user.model.js'
import { Seller } from '../models/seller.model.js'


export const becomeSeller = async(id,shop_name)=>{
    const user = await User.findByPk(id)
    if (!user) {
      throw new Error('User not found')
    }

    
    user.role='Seller'
    await user.save()

    const seller = await Seller.create(
      { user_id: user.id, shop_name: shop_name }
    )
}