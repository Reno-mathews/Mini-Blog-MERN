import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Home({ posts }) {
    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Mini blog</h1>

            <Link to="/create" className="text-blue-600 underline">
                Create Post
            </Link>

            <div className="mt-6 space-y-4">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}