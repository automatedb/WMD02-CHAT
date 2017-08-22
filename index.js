// import d'express
var express = require('express');
// instanciation d'express
var app = express();

// exemple méthode get
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// exemple méthode listen sur le port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
