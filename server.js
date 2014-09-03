//Includiamo il modulo express
var express = require('express');

//Creiamo la nostra applicaizone
var app = express();

//Definiamo la porta di ascolto
var port = process.env.PORT || 8080;

//Otteniamo una istanza del router 
var router = express.Router();


//Definiamo una rotta di benvenuto 
app.get('/',function(req,res){
	res.send('Bazinga!');
});


//Definiamo la rotta di default delle api
router.get('/',function(req,res){
	res.send('Welcome to tvseries apis');
});

//Colleghiamo le rotte contenute in router all'url /api
app.use('/api',router);

app.listen(port);
console.log('Server listening on port: '+port);