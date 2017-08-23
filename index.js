// import d'express
const express = require('express');
// import mongoose
const mongoose = require('mongoose');
// import winston
const winston = require('winston');
// import d'ArgParse
const ArgumentParser = require('argparse').ArgumentParser;


// on instancie la classe puis récupère les arguments de la console
const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp:true
});
parser.addArgument(
    '--ip',
    {
        help: 'Server IP'
    }
);
parser.addArgument(
    [ '-p', '--port' ],
    {
        help: 'Server Port'
    }
);
parser.addArgument(
    [ '-db', '--database' ],
    {
        help: 'Database Name'
    }
);
// test bon fonctionnement des arguments
let args = parser.parseArgs();
console.dir(args);



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
app.set("view options", { layout: false });
app.use(express.static(__dirname + '/views'));


// connexion à la BDD via le gramework MonGoose
mongoose.createConnection('mongodb://138.197.113.194:27017/data_dev');



const IndexCtrl = require('./controllers/IndexCtrl');
const indexCtrl = new IndexCtrl();
app.get('/', indexCtrl.index);


// exemple méthode listen sur le port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
