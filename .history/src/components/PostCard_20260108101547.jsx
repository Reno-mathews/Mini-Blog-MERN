import { Link } from "react-router-dom";

export default function PostCard({ post }) {
    return (
        <Link 
            to={`/post/${post.id}`}
            className="block p-4 border rounded hover:bg-gray=800 transition"
            >
                <h2 className="text-xl font-semibold text-blue-500">
                    {post.title}
                </h2>
                <p className="text-gray-600">{post.content}</p>
            </Link>
    );
}