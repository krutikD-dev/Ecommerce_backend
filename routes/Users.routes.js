import express from 'express'
import { createUser, deleteUser, getUser } from '../services/user.service.js'

const Router = express.Router()

Router.post('/create_user', async(req,res,next)=>{
console.log("Post API got hit")
try{
    await createUser(req.body)
    console.log("User Created Successfully!")
    res.status(200).send({
    'status':'200',
    'success': true,
    'message':"User Successfully Created!!"
})

}catch(err){
    res.status(500).send({
    'status':'500',
    'success': false,
    'message':"Something Went Wrong!!"
})
    console.error(err)
}
finally{
    next()
}

})

Router.delete('/delete_user/:id',async(req,res,next)=>{
    const {id}= req.params

    try{
    await deleteUser(id)
    console.log("User deleted Successfully!")
    res.status(200).send({
    'status':'200',
    'success': true,
    'message':"User Successfully deleted!!"
})

}catch(err){
    res.status(404).send({
    'status':'404',
    'success': false,
    'message':err.message
})
    console.error(err)
}
finally{
    next()
}
})

Router.get('/get_users',async(req,res,next)=>{
    try{
    const users = await getUser()
    res.status(200).send({
    'status':'200',
    'success': true,
    'data':users
})


}catch(err){
    res.status(404).send({
    'status':'404',
    'success': false,
    'message':err.message
})
    console.error(err)
}
})
export default Router