import { useParams } from "react-router-dom";

export default function PostDetail() {
    const { id } = useParams();

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold">Post {id}</h1>
            <p className="mt-3 text-gray-700">
                This will come from backend later
            </p>
        </div>
    );
}