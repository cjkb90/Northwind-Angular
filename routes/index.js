var express = require('express');
var router = express.Router();
var models = require('../models/');
var Product = models.Product;
var apiRoute = require('./api/apiIndex');
var path = require('path');

router.use('/api', apiRoute);

router.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname,'../views/services.html'));
});


module.exports = router;
