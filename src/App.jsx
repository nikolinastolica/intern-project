import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostCard from "./components/Card";
import SinglePage from "./components/SinglePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PostCard />} />
        <Route path="/profile/:id" element={<SinglePage />} />
      </Routes>
    </Router>
  );
}

export default App;
