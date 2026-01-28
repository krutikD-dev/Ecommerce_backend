import { becomeSeller } from "../services/seller.service.js"


export const become_seller = async(req,res,next)=>{

try {
  if(req.user.id !== Number(req.params.id)){
    console.log(req.user.id !== Number(req.params.id))
    return res.status(403).send(
      {'status':'403',
      'success':false,
      'message': 'Forbidden'}
    )
  }
  if (req.user.role === 'Seller') {
      throw new Error('User is already a Seller')
    }
    await becomeSeller(req.params.id, req.body.shop_name)

    res.status(201).json({
      'status':'201',
    'success': true,
    'message':"Seller added successfully!!"
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }


}