import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Levi from "./pages/Levi";
import JoaoPedro from "./pages/JoaoPedro";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levi" element={<Levi />} />
        <Route path="/joaopedro" element={<JoaoPedro />} />
      </Routes>
    </Router>
  );
}
