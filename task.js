'use strict';
var rows = table.querySelectorAll('tr');


// for (var i = 0; i < rows.length; i++) {
//   console.log(rows[i].querySelector('td:last-child'))
// };



  rows.sort.call(rows, function(a, b) {
    return a - b;
  });



// rows.forEach(function(rows[i]) {
//   console.log(rows[a]);
// })
