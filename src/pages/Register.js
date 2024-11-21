/*
import React, { useState } from "react";

const Register = () => {
  // Definindo os estados para armazenar os valores do formulário
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Função para enviar os dados do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar os campos
    if (!username || !email || !password) {
      setError("Todos os campos são obrigatórios");
      return;
    }

    try {
      // Enviar a requisição para o backend
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      // Verificar se a resposta foi bem-sucedida
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Erro ao cadastrar usuário");
        return;
      }

      const data = await response.json();
      setSuccessMessage("Usuário criado com sucesso!");
      setUsername("");
      setEmail("");
      setPassword("");
      setError(null);
    } catch (err) {
      setError("Erro ao conectar ao servidor");
    }
  };

  return (
    <div>
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default Register;
*/