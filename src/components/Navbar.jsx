import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites();

  const favCount = Array.isArray(favorites) ? favorites.length : 0;

  return (
    <nav
      style={{
        background: "#1e40af",
        color: "white",
        padding: "1rem",
        borderRadius: "12px",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>DevBoard</h1>
      </Link>

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          หน้าหลัก
        </Link>

        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          สมาชิก
        </Link>

        <Link
          to="/favorites"
          style={{
            color: "white",
            textDecoration: "none",
            background: favCount > 0 ? "#e53e3e" : "transparent",
            padding: "0.3rem 0.8rem",
            borderRadius: "20px",
          }}
        >
          ❤️ ถูกใจ {favCount > 0 && `(${favCount})`}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
