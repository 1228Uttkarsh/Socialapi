const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

mongoose.connect('mongodb+srv://admin:agqLs2ad9Dyyqlqk@cluster0.vc7ygqp.mongodb.net/social?retryWrites=true&w=majority'
).then(()=>app.listen(8000)
).then(()=>
console.log("COnnected to database and Listening to 8000")
).catch((err)=>console.log(err));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
//agqLs2ad9Dyyqlqk