import dotenv from 'dotenv'
dotenv.config()
import express, { Router } from 'express'
import userRoute from './routes/Users.routes.js'
import {connectDB} from './models/db.js'
import {User} from './models/user.model.js'
const app = express()
app.use(express.json())

const startServer = async () => {
  await connectDB();
}

User.sync()

app.use('/api',userRoute)

// app.get('/',(req,res,next)=>{
//     res.send("Hello Ipro")
// })
app.listen(3000, ()=>{
    console.log("Server Running....")
})
startServer()