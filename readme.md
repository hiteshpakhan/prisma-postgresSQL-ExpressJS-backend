in this project we have build the backend for the user posts and comment

in this we can Create, Update, delete, get all the Users, Posts, Comments

also we have added feature of how to use search, pagination by prisma

in this project we have use the Prisma ORM, Postgres SQL, Express JS, Node JS 


# All Apis 

* user

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


* post

        //get all posts
        router.get("/", featchPosts);

        // searching the post
        router.get("/search/posts", searchPost);
        
        // geting post by using pagination
        router.get("/use/pagination", gettingPostsUsingPagination);
        
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

* comment

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