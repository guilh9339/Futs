import React from 'react';
import './Bets.css';

const Bets = () => {
  return (
    <div className="bets">
      <h1>Apostas</h1>

      {/* Aposta para a partida */}
      <div className="match-bet">
        <h2>Partida 1: Time X vs Time Y</h2>
        <div className="bet-options">
          <div className="bet-option">
            <p><strong>Vitória Time X</strong> - Odd: 1.80</p>
          </div>
          <div className="bet-option">
            <p><strong>Vitória Time Y</strong> - Odd: 2.20</p>
          </div>
          <div className="bet-option">
            <p><strong>Empate</strong> - Odd: 3.40</p>
          </div>
        </div>
      </div>

      {/* Aposta para gols de jogadores */}
      <div className="player-goals-bet">
        <h3>Jogador para marcar:</h3>
        <div className="player-bet">
          <div className="player">
            <p><strong>Lucas Silva (Time X)</strong> - Odd: 2.00</p>
            <span>Jogos: 15 | Gols: 10</span>
          </div>
          <div className="player">
            <p><strong>João Costa (Time X)</strong> - Odd: 3.00</p>
            <span>Jogos: 12 | Gols: 7</span>
          </div>
          <div className="player">
            <p><strong>Pedro Almeida (Time Y)</strong> - Odd: 2.50</p>
            <span>Jogos: 14 | Gols: 8</span>
          </div>
        </div>

        <div className="player-bet">
          <div className="player">
            <p><strong>Gustavo Pereira (Time Y)</strong> - Odd: 2.30</p>
            <span>Jogos: 16 | Gols: 9</span>
          </div>
          <div className="player">
            <p><strong>Thiago Rocha (Time X)</strong> - Odd: 4.00</p>
            <span>Jogos: 18 | Gols: 5</span>
          </div>
          <div className="player">
            <p><strong>André Santos (Time Y)</strong> - Odd: 3.50</p>
            <span>Jogos: 14 | Gols: 6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bets;
