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

app.post('/movies', function (request, response) {
  return movies.create({
      name: request.body.name,
      synopsis: request.body.synopsis,
      rating: request.body.rating
  }).then(function (users) {
      if (movies) {
          response.send(users);
      } else {
          response.status(400).send('Error in insert new record');
      }
  });
});

app.listen(3000, () => {
  console.log("Servidor executando na porta 3000!");
});
