'use strict';



// var isEmpty = function(obj) { 
//   return Object.keys(obj).length === 0; 
// };


// function createTree(obj) {
//   console.log('---------');
//   outer: for (var key in obj) {
//     console.log(key);
//     var newObj = obj[key];
//     for (var key in newObj) {
//       console.log(key);
//     };
//   };
// };  
// createTree(data);
// console.log(isEmpty(data["Рыбы"]['Щука']));


// function test() {
//   var count = 4;
//   return function time() {   
//     count--
//     while (count) {
//       console.log(count);
//       return time();
//     }
//   };
// }  
// var x = test()
// x();


// function createTree(obj) {
//   for (var key in obj) {
//     for (var key in obj) {
//       console.log(key) + console.log(obj[key]);
//       if (isEmpty(obj)) {
//         return createTree(newKey);
//       }
//     };
//   }
// };  
// createTree(data);



// function createTree(obj) {

//   for(let key in obj) {

//     if(true) {
//       createTree(obj[key]);
//     }
//   }
// };

// createTree(data);


function createTree(container, obj) {
  container.appendChild(createTreeDom(obj));
}

function createTreeDom(obj) {
  // если нет детей, то рекурсивный вызов ничего не возвращает
  // так что вложенный UL не будет создан
  // if (isObjectEmpty(obj)) return;

  var ul = document.createElement('ul');

  for (var key in obj) {
    var li = document.createElement('li');
    li.innerHTML = key; // 1 Рыбы 2 Форель

    var childrenUl = createTreeDom(obj[key]); // обж Фищ, {}, 
    if (childrenUl) li.appendChild(childrenUl);

    ul.appendChild(li);
  }

  return ul;
}

function isObjectEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
};


var container = document.getElementById('container');
createTree(container, data); // создаёт
