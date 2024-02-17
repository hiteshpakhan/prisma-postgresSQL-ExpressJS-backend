import { Router } from "express";
import { createUser, deleteUser, featchUsers, featchUsersWithPosts, featchUsersWithPostsCount, showUserData, updateUser } from "../Controller/UserController.js";

const router = Router();

//get all user data
router.get("/", featchUsers);

//get single user data
router.get("/:id", showUserData);

//get the all user data with posts of that user
router.get("/with/post", featchUsersWithPosts);

// get all user with post count
router.get("/with/pcount", featchUsersWithPostsCount);

//create user
router.post("/", createUser);

// update the user 
router.put("/:id", updateUser);

// delete the user
router.delete("/:id", deleteUser);

export default router;