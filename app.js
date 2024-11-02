const express = require("express");
const app = express();

const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost:3315',
    user: 'root',
    password: ''
});

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