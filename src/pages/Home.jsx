import { Link } from "react-router-dom";

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
        </div>
    )
}