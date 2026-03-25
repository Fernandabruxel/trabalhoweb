const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

// config do motor de templates
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); //caminho para a pasta 'views'

// config dos middlewares = função que executa antes de chegar nas rotas
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', userRoutes);

// inicando servidor
app.listen(3000, () => {
    console.log('Aplicação em execução: http://localhost:3000');
});
