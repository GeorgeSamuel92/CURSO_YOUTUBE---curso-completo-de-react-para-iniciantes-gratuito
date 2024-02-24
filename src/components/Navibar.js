import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>SiGeStock</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create">Novo producto</Link>
      </div>
    </nav>
  );
}