require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Mini Blog API running");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

mongoose 
    .connect("mongodb+srv://renomathews10pro:Miniblog456@cluster0.gfn7pmq.mongodb.net/mini-blog?appName=Cluster0")