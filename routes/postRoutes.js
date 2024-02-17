import { Router } from "express";
import { createPost, deletePost, featchPosts, featchPost, updatePost, featchPostsWithComments, featchPostWithCommentWithUser, postsCommentsUserName } from "../Controller/PostController.js";

const router = Router();

//get all posts
router.get("/", featchPosts);
//get specific post
router.get("/:id", featchPost);
//get post with comment
router.get("/with/comment", featchPostsWithComments);
//get post with comment with user
router.get("/with/comment/ofuser", featchPostWithCommentWithUser);
// get post with comment with username
router.get("/with/username", postsCommentsUserName);
// create post
router.post("/", createPost);
//update
router.put("/:id", updatePost);
//delete
router.delete("/:id", deletePost);


export default router;