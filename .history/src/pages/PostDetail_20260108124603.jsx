import { useParams } from "react-router-dom";

export default function PostDetail({ posts }) {
    const { id } = useParams();
    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return <p className="p-6">Post not found</p>;
    }

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="mt-4 text-gray-700">{post.content}</p>
        </div>
    );
}  