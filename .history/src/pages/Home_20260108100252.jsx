import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

const posts = [
    { id: 1, title: "First Post", content: "Hello World" },
    { id: 2, title: "Second Post", content: "Mini blog works!" },
];

export default function Home() {
    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Mini blog</h1>

            <Link to="/create" className="text-blue-600 underline">
                Create Post
            </Link>

            <div className="mt-6 space-y-4">
                {posts.map(post => (
                    <Link  
                        key={post.id}
                        to={`/post/${post.id}`}
                        className="block p-4 border rounded hover:bg-gray-50"
                    >
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-600">{post.content}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}