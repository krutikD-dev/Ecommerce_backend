import jwt from 'jsonwebtoken'

export const authenticate = async(req,res,next)=>{

    const auth_header = req.headers.authorization

    if(!auth_header){
        return res.status(401).json({
        success: false,
        message: 'Authorization header missing'
      })
    }
    // console.log(auth_header)

    const token = auth_header.split(' ')[1]
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Token missing'
      });
    }

    const verified = jwt.verify(token,process.env.JWT_SECRET)
    req.user = verified
    // console.log(verified)

    next()
}