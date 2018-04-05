'use strict';

let tr = document.querySelectorAll('tr')
var newArr = [];

for (var i = 0; i < tr.length; i++) {
  var str = [];
  
  for (var j = 0; j < tr[i].children.length; j++) {
    var cells = tr[i].children[j].innerHTML;
    str.push(cells);
  }
  newArr.push(str);
};


newArr.sort(function (a, b) {
  console.log();
  return a[1] - b[1];
});

// console.log(newArr);


for (var i = 0; i < newArr.length; i++) {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  
  for (var j = 0; j < newArr[i].length; j++) { 
    td.innerHTML = newArr[i][j];
    console.log(td);
    tr.appendChild(td)
  };
  
  table.appendChild(tr)
}