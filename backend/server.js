const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const app = express();
const PORT = 5000;

// Middleware para parsing de JSON
app.use(express.json());
app.use(cors()); // Habilitando o CORS para aceitar requisições do frontend

// Conectando ao MongoDB
mongoose.connect("mongodb://localhost:27017/chuts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch((err) => console.log("Erro ao conectar ao MongoDB: ", err));

// Rota para adicionar um novo usuário (Cadastro)
app.post("/api/users", async (req, res) => {
  const { username, email, password } = req.body;

  console.log("Tentativa de cadastro:", req.body);

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Preencha todos os campos obrigatórios" });
    }

    // Criptografando a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criando um novo usuário
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Usuário criado com sucesso!",
      user: newUser,
    });
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
    res.status(500).json({ message: "Erro ao criar usuário", error: err.message });
  }
});

// **Nova Rota para Login**
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("Tentativa de login:", { email }); // Log para verificar o email recebido

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Preencha todos os campos obrigatórios" });
    }

    // Procurar o usuário no banco de dados
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Comparar a senha fornecida com a armazenada no banco
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    res.status(200).json({
      success: true,
      message: "Login bem-sucedido",
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error("Erro no login:", err);
    res.status(500).json({ message: "Erro no servidor", error: err.message });
  }
});

// Rota para testar se o servidor está rodando
app.get("/", (req, res) => {
  res.send("Servidor rodando na porta 5000");
});

// Iniciando o servidor na porta 5000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
