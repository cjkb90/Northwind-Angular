var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/northwind');//db name is northwind
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'mongodb connection error:'));

var productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
	quantity: Number
});

var Product = mongoose.model('Product',productSchema);

var serviceSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	priority: { 
		type: Number,
		default: 5
	}
});

var Service = mongoose.model('Service', serviceSchema);

module.exports = {
	Product: Product,
	Service: Service
};
