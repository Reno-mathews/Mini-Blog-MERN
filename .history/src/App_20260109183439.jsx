import { useState, useEffect } from "react"
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route
          path="/create"
          element={<CreatePost posts={posts} setPosts={setPosts} />}
        />
        <Route path ="/post/:id" element={<PostDetail posts={posts} />} />
      </Routes>
  );
}

export default App;