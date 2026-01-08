import { Routes, Route} from "react-router-dom";
import { useState } from "react"
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "Hello World"},
    { id: 2, title: "Second Post", content: "Mini blog works!"},
  ]);
  return (
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>
  );
}

export default App;