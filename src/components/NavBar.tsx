import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); 

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: "12px",
      background: "#eee"
    }}>
      <Link to="/" style={{ fontWeight: isActive("/") ? "bold" : "normal" }}>Home/Casa/Inicio/Cê que decide</Link>
      <Link to="/user1" style={{ fontWeight: isActive("/user1") ? "bold" : "normal" }}>trodat3 😎</Link>
      <Link to="/user2" style={{ fontWeight: isActive("/user2") ? "bold" : "normal" }}>livaibrr 🤫</Link>
      <Link to="/user3" style={{ fontWeight: isActive("/user3") ? "bold" : "normal" }}>Yarafr 😺</Link>
    </nav>
  );
}