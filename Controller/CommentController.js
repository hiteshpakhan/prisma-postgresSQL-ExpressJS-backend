import prisma from "../DB/db.config.js";

//now we will see how to get all comments data 
export const featchComments = async (req, res) => {
    const comments = await prisma.comment.findMany({});

    return res.json({status: 200, data: comments});
}

//now we will see how to get all comments data 
export const featchCommentsWithUserandPost = async (req, res) => {
    const comments = await prisma.comment.findMany({
        // include:{
        //     user: true,
        //     post: {
        //         include: {
        //             user: true,
        //         }
        //     }
        // }
        select: {
            comment: true,
            user: {
                select:{
                    name: true,
                }
            },
            post: {
                select:{
                    title: true,
                    description: true,
                }
            },
        }
    });

    return res.json({status: 200, data: comments});
}

//this was for creating the new comment
export const createComment = async (req, res) => {
    const { user_id, post_id, comment } = req.body;

    // increase the comment count inside post model by 1
    await prisma.post.update({
        where:{
            id: post_id
        },
        data:{
            comment_count:{
                increment: 1
            }
        }
    })

    const newComment = await prisma.comment.create({
        data:{
            user_id:Number(user_id),
            post_id:Number(post_id),
            comment,
        }
    });

    return res.json({status: 200, data: newComment, message: "Comment Created"});
}

//this is for update the comment   -homework
export const updateComment = async (req, res) => {
    const commentId = req.params.id;

    const { comment } = req.body;

    await prisma.comment.update({
        where: {
            id: Number(commentId)  //converted to number
        },
        data: {
            comment,
        }
    });

    return res.json({status: 200, message: "Comment updated successfully"});
}

//now we will see how we can get the perticular data of the single comment
export const featchComment = async (req, res) => {
    const commentId = req.params.id;

    const comment = await prisma.comment.findFirst({
        where:{
            id:Number(commentId)
        }
    })

    return res.json({status: 200, data: comment});
}

//now we will see how to delete the specific comment
export const deleteComment = async (req, res) => {
    const commentId = req.params.id;
    
    // decrease the comment count inside post model by 1
    await prisma.post.update({
        where:{
            id: post_id
        },
        data:{
            comment_count:{
                decrement: 1
            }
        }
    })

    await prisma.comment.delete({
        where:{
            id: Number(commentId)
        }
    })

    return res.json({status: 200, message: "Comment Deleted"});
}