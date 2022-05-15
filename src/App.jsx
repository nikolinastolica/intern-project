import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SinglePage from "./components/SinglePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile/:id" element={<SinglePage />} />
      </Routes>
    </Router>
  );
}

export default App;
