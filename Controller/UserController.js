import prisma from "../DB/db.config.js";

//now we will see how to get all users data 
export const featchUsers = async (req, res) => {
    const users = await prisma.user.findMany({});

    return res.json({status: 200, data: users});
}

//now we will see how to get all users data but with the posts inside it
export const featchUsersWithPosts = async (req, res) => {
    const users = await prisma.user.findMany({
        include: {
            // post: true,
            post: {
                select:{
                    title: true,
                    comment_count: true,
                }
            }
        }
    });

    return res.json({status: 200, data: users});
}

//now we will see how to get all users with the a number only of how many post there are with each user
export const featchUsersWithPostsCount = async (req, res) => {
    const users = await prisma.user.findMany({
        select:{
            _count:{
                select:{
                    post: true,
                    comment: true,
                }
            }
        }
    });

    return res.json({status: 200, data: users});
}

//this was for creating the user
export const createUser = async (req, res) => {
    const {name, email, password} = req.body;

    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (findUser) {
        return res.json({status: 400, message: "email already taken, please give another"});
    }

    const newUser = await prisma.user.create({
        data:{
            name: name,
            email: email,
            password: password,
        }
    });

    return res.json({status: 200, data: newUser, message: "user created"});
}

//this is for update the user 
export const updateUser = async (req, res) => {
    const userId = req.params.id;

    const {name, email, password} = req.body;

    await prisma.user.update({
        where: {
            id: Number(userId)  //converted to number
        },
        data: {
            name,
            email,
            password
        }
    });

    return res.json({status: 200, message: "User updated success"});
}

//now we will see how we can get the perticular data of the single user
export const showUserData = async (req, res) => {
    const userId = req.params.id;

    const user = await prisma.user.findFirst({
        where:{     
            id:Number(userId)
        }
    })

    return res.json({status: 200, data: user});
}

//now we will see how to delete the specific user
export const deleteUser = async (req, res) => {
    const userId = req.params.id;

    await prisma.user.delete({
        where:{
            id: Number(userId)
        }
    })

    return res.json({status: 200, message: "user deleted"});
}