//Includiamo il modulo express
var express = require('express');
var logger = require('morgan');

//Creiamo la nostra applicaizone
var app = express();

//Definiamo la porta di ascolto
var port = process.env.PORT || 8080;

//Otteniamo una istanza del router 
var router = express.Router();


//Aggiungiamo un logger
if('development' == app.get('env')){
	app.use(logger('dev'));
}

//Aggiungiamo un piccolo middleware
app.use(function(req, res, next) {
  console.log('%s %s from %s', req.method, req.url , req.ip);
  next();
});


//Definiamo una rotta di benvenuto 
app.get('/',function(req,res){
	res.send('Bazinga!');
});


//Definiamo la rotta di default delle api
router.get('/',function(req,res){
	res.send('Welcome to tvseries apis');
});

//Colleghiamo le rotte contenute in router all'url /api
app.use('/api/v1',router);

//Mettiamo il server in ascolto
app.listen(port);
console.log('Server listening on port: '+port);