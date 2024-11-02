const express = require("express");
const app = express();

const db = require("mysql2");
const connection = db.createConnection({
  host: "db",
  user: "root",
  password: "",  // Insira sua senha, se houver
  database: "rededor",
  port: 3310,  // Verifique se a porta é correta
  connectionLimit: 10,
});

// Conectar ao banco de dados com tratamento de erro
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.stack);
    return;
  }
  console.log("Conexão ao banco de dados estabelecida.");
});

app.get("/", (req, res) => {
  res.send("Seja bem vindo ao meu.");
});

app.get("/sobre", (req, res) => {
  res.send("Minha página sobre.");
});

app.listen(3000, () => {
  console.log("Servidor executando na porta 3000!");
});
