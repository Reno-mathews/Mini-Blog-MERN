import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost({ posts, setPosts }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const navigate = useNavigate();


function handleSubmit(e) {
    e.preventDefault();

    if(!title || !content) return;

    fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
}

return (
    <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Create Post</h1>

        <form onSubmit={handleSubmit}>
            <input
                className="w-full border p-2 mb-3"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea 
                className="w-full border p-2 mb-3"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Save
            </button>
        </form>
    </div>
);
}
