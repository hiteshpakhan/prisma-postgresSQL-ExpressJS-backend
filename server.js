import "dotenv/config";

import express from "express";

import routes from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res)=>{
    return res.send("hi everyone");
})

//routes file
app.use(routes);

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));