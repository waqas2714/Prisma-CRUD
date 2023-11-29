const prisma = require("../DB/db.config");

const createUser = async (req, res)=>{
    const {name, email, password} = req.body;

    try {
        const newUser = await prisma.user.create({data:{
            name,
            email,
            password
        }})

        res.json(newUser)
    } catch (error) {
        res.send({
            error : error.message
        })
    }
    
}

const updateUser = async (req, res)=>{
    const {name, email} = req.body;
    const {id} = req.params;
    try {
        const updatedUser = await prisma.user.update({
            where : {
                id : Number(id)
            },
            data: {
                name,
                email
            }
        })

        res.json(updatedUser);
    } catch (error) {
        res.json({
            error : error.message
        })
    }
    
}

const getUsers = async (req, res)=>{
    try {
        const users = await prisma.user.findMany({});

        res.json(users);
    } catch (error) {
        res.json({
            error : error.message
        })
    }
}


module.exports = {
    createUser,
    updateUser,
    getUsers
}