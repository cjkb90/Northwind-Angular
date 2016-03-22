var express = require('express');
var router = express.Router();
var models = require('../../models/');
var Product = models.Product;
var Service = models.Service;

router.get('/spa', function(req,res, next){
	Service.find({})
	.then(function(services){
		res.send(services)
	})
	.catch(function(err){
		console.log(err);
		res.send(err);
	})
});

router.get('/spa/action/prioritize', function(req, res){
	Service.find({})
	.sort({priority:1})
	.then(function(success){
		res.send(success)
	})
	.catch(console.error.bind(console));
	// Service.save();
});

router.delete('/spa/:elemID', function(req,res, next){
	Service.remove({_id:req.params.elemID})
	.then(function(success){
		res.send(success);
	})
	// Service.find({})
	// // .then(function(services){
	// // 	services.filter(function(elem){
	// // 		elem[_id] = req.params.elemID;
	// // 	});
	// // 	return services;
	// // })
	// .then(function(services){
	// 	Service.remove({name:"Conditioner"});
	// 	res.send(services);
	// })
	.catch(function(err){
		console.log(err);
		res.send(err);
	})
});


module.exports = router;