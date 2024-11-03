const express = require("express");
const Sequelize = require("sequelize");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

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
    type: Sequelize.INTEGER,
    unique: true,
    references: {
      model: "movies",
      key: "id",
    },
  },
  createdAt: {
    type: Sequelize.DATE
  },
  reservedAt: {
    type: Sequelize.DATE
  }
});

const scheduleMovies = sequelize.define('scheduleMovies', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  reserveId: {
    type: Sequelize.INTEGER,
    unique: true,
    onDelete: 'CASCADE',
    references: {
      model: "reservedMovies",
      key: "id",
    },
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING
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
  return movies.create({
      name: req.body.name,
      synopsis: req.body.synopsis,
      rating: req.body.rating
  }).then(function (movie) {
      if (movie) {
          res.send(movie);
      } else {
          res.status(400).send('Error in insert new record');
      }
  });
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await movies.update({
        name: req.body.name,
        synopsis: req.body.synopsis,
        rating: req.body.rating
    },{ where: { id }});

    if (updated) {
      const updatedMovie = await movies.findOne({ where: { id } });
      return res.status(200).json({ movie: updatedMovie });
    }

    throw new Error('Filme não encontrado');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await movies.destroy({ where: { id }});

    if (deleted) {
      return res.status(200).json({ message: 'fILME excluído com sucesso' });
    }

    return res.status(404).json({ message: 'fILME não encontrado' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post('/reserve/:id', (req, res) => {
  const id = req.params.id;
  const now = new Date();
  return redeservedMovies.create({
      movieId: id,
      reservetAt: now.setHours(now.getHours() + 3)
  }).then(function (reserved) {
      if (reserved) {
          res.send(reserved);
      } else {
          res.status(400).send('Não foi possivel fazer a reserva.');
      }
  });
});

app.put('/reserved/:id', async (req, res) => {
  const { id } = req.params.id;
  try {
    const [updated] = await scheduleMovies.update({
      reserveId: id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    },{ where: { id }});

    if (updated) {
      const updatedMovie = await redeservedMovies.findOne({ where: { id } });
      return res.status(200).json({ movie: updatedMovie });
    }

    throw new Error('Não foi possível confirmar a reserva.');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.delete('/reserved/:id', async (req, res) => {
  const { id } = req.params.id;

  try {
    const deleted = await reservedAt.destroy({ where: { id }});

    if (deleted) {
      return res.status(200).json({ message: 'Devolução confirmada.' });
    }

    return res.status(404).json({ message: 'Não foi possível realizar a devolução do filme.' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor executando na porta 3000!");
});
