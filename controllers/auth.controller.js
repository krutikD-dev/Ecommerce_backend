import {loginUser} from '../services/auth.service.js'

export const authenticate_user_controller= async(req,res,next)=>{
    try {
    const { email, password } = req.body;
    // console.log(email+' - '+ password)

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }
    const token = await loginUser(email, password);

    res.status(200).json({
      success: true,
      token
    });
}catch(err){
     res.status(401).json({
      success: false,
      message: err.message
    });
  }
}