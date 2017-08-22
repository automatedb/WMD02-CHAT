// import d'express
const express = require('express');
// import mongoose
const mongoose = require('mongoose');
// instanciation d'express
const app = express();

mongoose.createConnection('mongodb://138.197.113.194:27017/data_dev');
// exemple méthode get
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// exemple méthode listen sur le port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
