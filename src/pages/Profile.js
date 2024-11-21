import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <div className="card">
        {/* Imagem do jogador */}
        <div className="player-card">
          <img src="https://via.placeholder.com/150" alt="Cartinha do jogador" className="player-image" />
        </div>

        {/* Informações do jogador */}
        <div className="player-info">
          <p><strong>Posição:</strong> Atacante</p>
          <p><strong>Nota:</strong> 8.5</p>
          <p><strong>Gols:</strong> 12</p>
          <p><strong>Assistências:</strong> 5</p>
          <p><strong>Desarmes:</strong> 3</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
