import React from 'react';
import './Home.css';

const Home = () => {
  // Lista de partidas fictícias
  const games = [
    {
      id: 1,
      owner: 'João',
      positionsLeft: 'Goleiro / Atacante / Zagueiro',
      location: 'Estádio ABC',
      contact: 'joao@gmail.com'
    },
    {
      id: 2,
      owner: 'Ana',
      positionsLeft: 'Zagueiro / Meio-Campo',
      location: 'Campo Municipal',
      contact: 'ana@gmail.com'
    },
    {
      id: 3,
      owner: 'Carlos',
      positionsLeft: 'Atacante / Meio-Campo',
      location: 'Arena Sport',
      contact: 'carlos@gmail.com'
    },
    {
      id: 4,
      owner: 'Maria',
      positionsLeft: 'Goleiro / Zagueiro',
      location: 'Campo Central',
      contact: 'maria@gmail.com'
    }
  ];

  return (
    <div className="home">
      <h1>Partidas Disponíveis</h1>

      {/* Lista de partidas */}
      <div className="game-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <h3>Partida de {game.owner}</h3>
            <p>Posições restantes: {game.positionsLeft}</p>
            <button
              className="details-button"
              onClick={() => alert(`Detalhes: ${game.location} \nContato: ${game.contact}`)}
            >
              Detalhes
            </button>
            <button className="join-button" onClick={() => alert('Você entrou na partida')}>
              +
            </button>
          </div>
        ))}
      </div>

      {/* Botão de criação de partida */}
      <div className="create-game-button">
        <button onClick={() => alert('Criar partida')}>
          <span className="plus-icon">+</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
