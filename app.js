const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv/config');
const PORT = process.env.PORT || 8800;
app.use(bodyParser.json());

const postsRoute= require("./routes/posts");

app.use("/posts",postsRoute);

app.get("/", (req, res) => {
    res.send("home");
});

app.get("/posts", (req, res) => {
    res.send("posts");
});


mongoose.connect(process.env.MONGO_URL,()=> 
console.log("connected MonGoDB")
);
app.listen(PORT);
