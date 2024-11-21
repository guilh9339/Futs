import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate

function Login({ setIsAuthenticated, toggleRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Inicializando o hook useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Login bem-sucedido!");
        setIsAuthenticated(true); // Atualiza o estado de autenticação
        navigate("/home"); // Redireciona para a página "Home" após o login bem-sucedido
      } else {
        setError("Credenciais inválidas!");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Erro no servidor.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Entrar</button>
      </form>
      <button onClick={toggleRegister} className="register-link">
        Não tem uma conta? Cadastre-se
      </button>
    </div>
  );
}

export default Login;
