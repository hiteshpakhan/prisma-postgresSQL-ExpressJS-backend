import { Router } from "express";
import { featchComments, createComment, updateComment,  featchComment, deleteComment, featchCommentsWithUserandPost } from "../Controller/CommentController.js";

const router = Router();

//for getting all comments
router.get("/", featchComments);

//for getting all comments with info about user and comment
router.get("/with/userandpost", featchCommentsWithUserandPost);

//for getting specific comment
router.get("/:id", featchComment);

// creating comment
router.post("/", createComment);

// update comment
router.put("/:id", updateComment);

//deleting commnent
router.delete("/:id", deleteComment);


export default router;