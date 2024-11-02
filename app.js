const express = require("express");
const app = express();

var db = require('mysql2')
var connection = db.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rededor',
  port:'3310',
  connectionLimit: 10
})

connection.connect();

app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu.")
});

app.get("/sobre", function(req, res){
    res.send("Minha página sobre.");
});

app.listen(3000, function(){
    console.log("Servidor Executando!");
});