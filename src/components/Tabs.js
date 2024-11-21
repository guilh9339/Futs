import React from "react";
import "./Tabs.css"; // Aqui podemos adicionar um CSS para as abas

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <div
        className={`tab ${activeTab === "home" ? "active" : ""}`}
        onClick={() => setActiveTab("home")}
      >
        Início
      </div>
      <div
        className={`tab ${activeTab === "profile" ? "active" : ""}`}
        onClick={() => setActiveTab("profile")}
      >
        Perfil
      </div>
      <div
        className={`tab ${activeTab === "bets" ? "active" : ""}`}
        onClick={() => setActiveTab("bets")}
      >
        Apostas
      </div>
      <div
        className={`tab ${activeTab === "feed" ? "active" : ""}`}
        onClick={() => setActiveTab("feed")}
      >
        Feed
      </div>
    </div>
  );
};

export default Tabs;
