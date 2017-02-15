var lambdaFunciton = require('./hello');
var functionHandler = 'handler';

var event={name:'Arpan'};
var context ={};

function callback(error, data){
	console.log(error);
	console.log(data);
}

lambdaFunciton[functionHandler](event,context,callback);