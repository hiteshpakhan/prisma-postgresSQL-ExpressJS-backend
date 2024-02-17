import { Router } from "express";
import { featchComments, createComment, updateComment,  featchComment, deleteComment, featchCommentsWithUserandPost } from "../Controller/CommentController.js";

const router = Router();

router.get("/", featchComments);
router.get("/with/userandpost", featchCommentsWithUserandPost);
router.get("/:id", featchComment);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);


export default router;