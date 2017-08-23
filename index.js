// import d'express
const express = require('express');
// import mongoose
const mongoose = require('mongoose');
// import winston
const winston = require('winston');

// on déplace les logs dans un fichier de logs
winston.configure({
    transports: [
        new (winston.transports.File)({ filename: 'app.log' })
    ]
});
// test logs
winston.info('Now my debug messages are written to console!');

// instanciation d'express
const app = express();

// connexion à la BDD via le gramework MonGoose
mongoose.createConnection('mongodb://138.197.113.194:27017/data_dev');


// exemple méthode get
app.get('/', function (req, res) {
    res.send('Hello World!');
});


const IndexCtrl = require('./controllers/IndexCtrl');
const indexCtrl = new IndexCtrl();
app.get('/index', indexCtrl.index);



// exemple méthode listen sur le port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
