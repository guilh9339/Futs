import React, { useState } from "react";
import Tabs from "./components/Tabs";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Bets from "./pages/Bets";
import Feed from "./pages/Feed";
import Login from "./pages/Login"; // Importando a tela de login
import Register from "./pages/Register"; // Importando a tela de cadastro
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home"); // Estado para controlar a aba ativa
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Começar já autenticado para exibir a Home
  const [isRegistering, setIsRegistering] = useState(false); // Controle para alternar entre login e cadastro

  // Função que alterna entre Login e Cadastro
  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const renderTabContent = () => {
    if (!isAuthenticated) {
      // Se o usuário não estiver autenticado, exibe a tela de login ou cadastro
      if (isRegistering) {
        return <Register />;
      }
      return <Login setIsAuthenticated={setIsAuthenticated} toggleRegister={toggleRegister} />;
    }

    // Caso o usuário esteja autenticado, exibe as abas normais
    switch (activeTab) {
      case "home":
        return <Home />;
      case "profile":
        return <Profile />;
      case "bets":
        return <Bets />;
      case "feed":
        return <Feed />;
      default:
        return <div>Conteúdo não encontrado</div>;
    }
  };

  return (
    <div className="app-container">
      {isAuthenticated && (
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      <div className="content">{renderTabContent()}</div>
    </div>
  );
}

export default App;
