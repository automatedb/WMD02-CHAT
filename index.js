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

// on déplace les logs dans un fichier de logs
winston.configure({
    transports: [
        new (winston.transports.File)({ filename: 'app.log' })
    ]
});


// instanciation d'express
const app = express();
//app.set("view options", { layout: false });
app.use(express.static(__dirname + '/views'));

// connexion à la BDD via le gramework MonGoose
mongoose.createConnection(`mongodb://${args.ip}:${args.port}/${args.database}`);

winston.info('Connexion à la base de donnnées OK!');

// affichage index
const IndexCtrl = require('./controllers/IndexCtrl');
const indexCtrl = new IndexCtrl();
app.get('/', indexCtrl.index);


// gestion données formulaire register
const RegisterCtrl = require('./controllers/RegisterCtrl');
const registerCtrl = new RegisterCtrl();
app.get('/v1/users', registerCtrl.postRegister);



// exemple méthode listen sur le port 3000
app.listen(3000, function () {
    winston.info('Example app listening on port 3000!');
});
