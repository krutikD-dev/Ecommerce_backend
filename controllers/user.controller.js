import { createUser, deleteUser, getUser } from "../services/user.service.js"


//public API
export const create_user = async (req, res, next) => {
    // console.log("Post API got hit")
    try {
        await createUser(req.body)
        console.log("User Created Successfully!")
        res.status(201).send({
            'status': '201',
            'success': true,
            'message': "User Successfully Created!!"
        })

    } catch (err) {
        res.status(500).send({
            'status': '500',
            'success': false,
            'message': "Something Went Wrong!!"
        })
        console.error(err)
    }
    finally {
        next()
    }

}


export const delete_user = async (req, res, next) => {
    const { id } = req.params
    try {
        if (req.user.role === 'Seller') {
            if (req.user.id !== Number(req.params.id)) {
                return res.status(403).send({
                    "status": '403',
                    'success': false,
                    'message': 'Forbidden Action'
                })
            }
        }
        await deleteUser(id)
        console.log("User deleted Successfully!")
        res.status(200).send({
            'status': '200',
            'success': true,
            'message': "User Successfully deleted!!"
        })

    } catch (err) {
        res.status(404).send({
            'status': '404',
            'success': false,
            'message': err.message
        })
        console.error(err)
    }
    finally {
        next()
    }
}

export const get_users = async (req, res, next) => {
    try {
        const users = await getUser()
        res.status(200).send({
            'status': '200',
            'success': true,
            'data': users
        })


    } catch (err) {
        res.status(404).send({
            'status': '404',
            'success': false,
            'message': err.message
        })
        console.error(err)
    }
}