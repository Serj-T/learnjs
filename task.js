'use strict';

// if (document.documentElement.remove === undefined) { // (1)

//   Object.defineProperty(Element.prototype, 'remove', { // (2)
//     remove: function() {
//       documentElement.parentNode.removeChild(div)
//     }
//   });
// }


Element.prototype.remove = function remove() {
  if (this.parentNode) {
    this.parentNode.removeChild(this);
  }
}

document.body.sayHi();