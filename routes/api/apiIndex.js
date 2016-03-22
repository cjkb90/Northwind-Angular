var express = require('express');
var router = express.Router();
var models = require('../../models/');
var Service = models.Service;

//RESTful routes /spas
router.get('/spa', function(req,res, next){
	Service.find({})
	.then(function(services){
		res.send(services);
	})
	.catch(function(err){
		console.log(err);
		res.send(err);
	});
});

//not too RESTful
router.get('/spa/action/prioritize', function(req, res){
	Service.find({})
	.sort({priority:1})
	.then(function(success){
    //why would you call this variable success? these are what spas? products?
		res.send(success);
	})
	.catch(console.error.bind(console));//lets do something with this
});

//again /spas/:id
router.delete('/spa/:elemID', function(req,res, next){
	Service.remove({_id:req.params.elemID})
	.then(function(success){//what is success?
		res.send(success);
	})
	.catch(function(err){
		console.log(err);
		res.send(err);//set the status... 
	})
});


module.exports = router;
