var Dog = require('./Dog'), Mouse = require('./Mouse');

var dog = new Dog();
var mouse = new Mouse('Micky');
dog.eat(mouse);
console.log(dog);