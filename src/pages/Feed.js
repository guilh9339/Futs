import React from 'react';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <h1>Feed de Postagens</h1>

      {/* Postagem 1 */}
      <div className="post">
        <div className="post-header">
          <div className="user-info">
            <img className="user-avatar" src="https://www.w3schools.com/w3images/avatar2.png" alt="User" />
            <p className="user-name">João Silva</p>
          </div>
        </div>
        <div className="post-content">
          <img className="post-image" src="https://www.w3schools.com/w3images/fjords.jpg" alt="Post" />
          <p className="post-caption">Partida incrível com a galera! #Futebol</p>
        </div>
      </div>

      {/* Postagem 2 */}
      <div className="post">
        <div className="post-header">
          <div className="user-info">
            <img className="user-avatar" src="https://www.w3schools.com/w3images/avatar3.png" alt="User" />
            <p className="user-name">Maria Souza</p>
          </div>
        </div>
        <div className="post-content">
          <img className="post-image" src="https://www.w3schools.com/w3images/rocks.jpg" alt="Post" />
          <p className="post-caption">Treino de hoje, vamos melhorar! 💪 #FutebolAmador</p>
        </div>
      </div>

      {/* Postagem 3 */}
      <div className="post">
        <div className="post-header">
          <div className="user-info">
            <img className="user-avatar" src="https://www.w3schools.com/w3images/avatar1.png" alt="User" />
            <p className="user-name">Carlos Oliveira</p>
          </div>
        </div>
        <div className="post-content">
          <img className="post-image" src="https://www.w3schools.com/w3images/mountains.jpg" alt="Post" />
          <p className="post-caption">Aquele gol de placa! 🔥 #Craque #Futebol</p>
        </div>
      </div>

      {/* Postagem 4 */}
      <div className="post">
        <div className="post-header">
          <div className="user-info">
            <img className="user-avatar" src="https://www.w3schools.com/w3images/avatar2.png" alt="User" />
            <p className="user-name">Lucas Pereira</p>
          </div>
        </div>
        <div className="post-content">
          <img className="post-image" src="https://www.w3schools.com/w3images/snow.jpg" alt="Post" />
          <p className="post-caption">Vai ser um grande jogo amanhã! #FutebolDeRua</p>
        </div>
      </div>

      {/* Botão de "+" para adicionar nova publicação */}
      <div className="add-post-button">
        <button className="add-post-btn">+</button>
      </div>
    </div>
  );
};

export default Feed;
