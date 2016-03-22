var express = require('express');
var app = express();
var routes = require(__dirname+'/routes/');
// var swig = require('swig');
var morgan = require('morgan');
var logger = morgan('dev')
//Morgan is used to console.log stuff

var bodyParser = require('body-parser')
//body parser is used to populate req&res.body

// app.set('views','./views');
// app.set('view engine','html');
//app.engine('html',swig.renderFile);
//swig.setDefaults({cache:false});//since we'll be refreshing our pages a lot

app.use(express.static('./public/'));
app.use(express.static('./views/'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(logger);
app.use(routes);


app.listen(3000, function(req, res){
});

