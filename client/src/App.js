import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Upload from "./pages/upload";
import Files from "./pages/Files";

function App() {
  return (
    <Router>   {/* ✅ Router must wrap EVERYTHING */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/files" element={<Files />} />
      </Routes>
    </Router>
  );
}

export default App;