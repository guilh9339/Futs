import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/create-match" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>
        Criar Partida
      </Link>
      <Link to="/matches" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>
        Partidas
      </Link>
      <Link to="/player-stats" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>
        Estatísticas
      </Link>
    </nav>
  );
}

export default Navbar;
