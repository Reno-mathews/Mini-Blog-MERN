import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost({ posts, setPosts }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const navigate = useNavigate();
}

function handleSubmit(e) {
    e.preventdefault();

    if (!title || !content) return;

    const newPost = {
        id:Date.now(),
        title,
        content,
    };

    setPosts([...posts, newPost]);
    navigate("/");
}
