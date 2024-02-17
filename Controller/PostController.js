import prisma from "../DB/db.config.js";

// orderBy: {
//     id: "desc",
// }
// where: {
//     comment_count: {
//         gt: 1,       
//     }
// }
// where: {
//     title: {
//         startsWith: "next js"
//     }
// }
// where: {
//     title: {
//         equals: "next js another project",
//     }
// }
// where: {
//     OR:[
//         {
//             title: {
//                 startsWith: "next"
//             }
//         },
//         {
//             title: {
//                 endsWith: "r"
//             }
//         }
//     ]
// }
// where: {
//     NOT: {
//         title: {
//             endsWith: "blog",
//         }
//     }
// }
//now we will see how to get all posts data 
export const featchPosts = async (req, res) => {
    const posts = await prisma.post.findMany({
        
    });

    return res.json({status: 200, data: posts});
}

//now we will see how to get all posts data with there comments
export const featchPostsWithComments = async (req, res) => {
    const posts = await prisma.post.findMany({
        include: {
            comment: true,
        }
    });

    return res.json({status: 200, data: posts});
}

//now we will see how to get all posts data with there comments and with the comments user
export const featchPostWithCommentWithUser = async (req, res) => {
    const posts = await prisma.post.findMany({
        include: {
            comment: {
                include: {
                    user: true,
                }
            }
        }
    });

    return res.json({status: 200, data: posts});
}

//now we will see how to get all posts data with there comments and with the comments user but only user name
export const postsCommentsUserName = async (req, res) => {
    const posts = await prisma.post.findMany({
        // include: {
        //     comment: {
        //         include: {
        //             user: {
        //                 select: {
        //                     name: true,
        //                 }
        //             }
        //         }
        //     }
        // }
        select: {
            title: true,
            description: true,
            comment: {
                select: {
                    comment: true,
                    user: {
                        select: {
                            name: true,
                        }
                    }
                }
            }
        }
    });

    return res.json({status: 200, data: posts});
}

//this was for creating the new post
export const createPost = async (req, res) => {
    const { user_id, title, description } = req.body;

    const newPost = await prisma.post.create({
        data:{
            user_id:Number(user_id),
            title,
            description
        }
    });

    return res.json({status: 200, data: newPost, message: "Post created"});
}

//this is for update the post   -homework
export const updatePost = async (req, res) => {
    const postId = req.params.id;

    const { title, description } = req.body;

    await prisma.post.update({
        where: {
            id: Number(postId)  //converted to number
        },
        data: {
            title,
            description
        }
    });

    return res.json({status: 200, message: "Post updated successfully"});
}

//now we will see how we can get the perticular data of the single post
export const featchPost = async (req, res) => {
    const postId = req.params.id;

    const post = await prisma.post.findFirst({
        where:{
            id:Number(postId)
        }
    })

    return res.json({status: 200, data: post});
}

//now we will see how to delete the specific post
export const deletePost = async (req, res) => {
    const postId = req.params.id;

    await prisma.post.delete({
        where:{
            id: Number(postId)
        }
    })

    return res.json({status: 200, message: "Post Deleted"});
}