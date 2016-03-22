var express = require('express');
var router = express.Router();
var models = require('../models/');
var Product = models.Product;
var Service = models.Service;
var apiRoute = require('./api/apiIndex.js')
var path = require('path');

router.use('/api', apiRoute);

router.get('/',function(req, res){
	res.render('index', {title: "Home"})
});

router.get('/spa', function(req,res, next){
	res.sendFile(path.join(__dirname,'../views/services.html'));
	// // Service.find({})
	// // .then(function(service){
		
	// // 	// res.send(service);
	// // 	// res.render('services.html', {title: "Spa", services:service})
	// // })
	// .catch(function(err){
	// 	console.log(err);
	// 	res.send(err);
	// })
});

router.get('/products',function(req, res, next){
	Product.find({}).exec()
	.then(function(product){
		res.render('products.html', {title: "Products", products:product})	
	})
	.catch(function(err){
		console.log(err);
	})
});

router.post('/spa',function(req,res){
	var service = new Service({
		name: req.body.name,
		priority: req.body.priority
	});
	service.save()
	.catch(function(err){
		console.log(err);
	});
	res.redirect('/spa');
})

router.post('/products',function(req, res){
	var product = new Product({
		name: req.body.name,
		description: req.body.description,
		quantity: req.body.quantity
	});
	product.save()
	.catch(function(err){
		console.log(err);
	})
	res.redirect('/products')
});

router.delete('/spa/delete/:id',function(req, res){
	Service.find({id: req.params.id})
	.remove()
	.exec()
	.catch(function(err){
		console.log(err);
	})
	res.redirect('/products')
});


module.exports = router;