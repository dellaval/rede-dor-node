const express = require("express");
const Sequelize = require("sequelize");

const app = express();

// const env = process.env.NODE_ENV || 'production';
// const config = require(__dirname + '/config/config.json')[env];
// console.log(config)
//const sequelize = new Sequelize(config.database, config.username, config.password, config);

const DB = 'rededor';
const USER = 'root';
const PASSWORD = '';
const HOST = 'db';
const DIALECT = 'mysql';
const PORT = 3306;

const sequelize = new Sequelize(
    DB,
    USER, 
    PASSWORD, 
    {
        host: HOST,
        dialect: DIALECT,
        port: PORT,
    }
)

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

sequelize.sync();

app.get("/", (req, res) => {
  res.send("Seja bem vindo ao meu.");
});

app.get("/sobre", (req, res) => {
  res.send("Minha página sobre.");
});

app.listen(3000, () => {
  console.log("Servidor executando na porta 3000!");
});
