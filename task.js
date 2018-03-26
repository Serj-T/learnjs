'use strict';

function Rabbit() {
  this.jumps = true;
  this.age = 0;

  setInterval(this.getOlder.bind(this), 1000)
};

Rabbit.prototype = {
  eat: false,
  getOlder: function() {
    this.age++;
  },
};

let first = new Rabbit();
console.log( first.age ); 
let second = new Rabbit();
console.log( second.age ); 