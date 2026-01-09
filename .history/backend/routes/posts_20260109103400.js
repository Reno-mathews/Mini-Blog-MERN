const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// GET all posts
router.get("/", async (req,res) => {
    try {
        const posts = (await Post.find()).toSorted({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch posts "});
    }
});

// CREATE a post
router.post("/", async (req, res) => {
    try {
        const { title, content } = req.body
    }
})