'use strict'




function debounce(f, ms) {

  

  return function() {
    var thisSelf = this;
    var thisArgs = arguments;
    
    setTimeout(function() {
      f.apply(thisSelf, thisArgs);
    }, ms);

  }
}
function fn(x) {
  console.log(x)
}

let f = debounce(fn, 1000);

f(1); // вызов отложен на 1000 мс
f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс
setTimeout( function() { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { f(4) }, 1200); // игнорируем вызов (3)