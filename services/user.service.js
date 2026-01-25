import {User} from '../models/user.model.js'

export const createUser = async(data)=>{
return await User.create(data)
}

export const deleteUser= async(id)=>{
    const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User not found')
  }

    return await User.destroy({
  where: { id: id }
})
}

export const getUser = async()=>{
    return await User.findAll()
}