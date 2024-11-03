const express = require("express");
const Sequelize = require("sequelize");

const app = express();

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);


sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
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
