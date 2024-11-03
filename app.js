const express = require("express");
const Sequelize = require("sequelize");
const { stringify } = require('flatted');


const app = express();

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
);

const movies = sequelize.define('movies', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  synopsis: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.STRING
  }
});

const redeservedMovies = sequelize.define('reservedMovies', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  movieId: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    type: Sequelize.DATE
  },
  reservedAt: {
    type: Sequelize.DATE
  }
});

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

sequelize.sync({
  force: true
});

app.get("/", (req, res) => {
  res.send("Seja bem vindo ao meu.");
});

app.post('/movies', (req, res) => {
  res.send(stringify(req));
/*
  const movie = movies.create({
      name: req.body.name,
      synopsis: req.body.synopsis,
      rating: req.body.rating
  }).then(function (movie) {
      if (movie) {
          response.send(movie);
      } else {
          response.status(400).send('Error in insert new record');
      }
  });
  */
});

app.listen(3000, () => {
  console.log("Servidor executando na porta 3000!");
});
