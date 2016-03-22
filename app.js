var express = require('express');
var app = express();
var routes = require(__dirname+'/routes/');
// var swig = require('swig');
var morgan = require('morgan');
var logger = morgan('dev')
//Morgan is used to console.log stuff

var bodyParser = require('body-parser')
app.use(express.static('./public/'));
app.use(express.static('./views/'));

//we need both of these
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(logger);
app.use(routes);


//what is going to be in req, res-- if you're not sure and you're not using them-- then don't put them in the code
//allow port to be set as environment variable
app.listen(3000, function(req, res){
});

