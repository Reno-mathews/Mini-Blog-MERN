export default function CreatePost() {
    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Create Post</h1>

            <input 
                className="w-full border p-2 mb-3"
                placeholder="Title"
            />

            <textarea 
                className="w-full border p-2 mb-3"
                placeholder="Content"
            />

            <button className="bg-black text-white px-4 py-2">
                Save
            </button>
        </div>
    );
}