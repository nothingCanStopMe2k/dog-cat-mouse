var chalk = require('chalk');
function Dog (){
	this.name = 'Lucky';
	this.stomatch = [];
}

Dog.prototype.eat = function(cat){
	this.stomatch.push(cat); 
}

Dog.prototype.sayHi = function(){
	console.log ('Hi, I am a dog and my name is ' + chalk.blue(this.name));
};
module.exports = Dog;