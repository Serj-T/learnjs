'use strict';

                        // Основы JavaScript

                        // Консоль

// mkdir test создаёт новую папку test
// cd test заходим в папку
// touch index.html main.js создаём файлы в папке

                        // Простые типы

// console.log('Простые типы');
// var numberType = 1,
//     stringType = 'string',
//     boolType = false,
//     nullType = null,
//     undefType = undefined;
// console.log(typeof numberType); //typeof получаем тип перменной
// console.log(typeof stringType);
// console.log(typeof boolType);
// console.log(typeof nullType);
// console.log(typeof undefType);
// console.log('');

                        // Объектные типы

// console.log('Объектные типы');
// var obj = {name: "Serj"}, //  объект
//     array = [1,2,3,4,5], // массивы
//     regexp = /w+/g,
//     func = function(){};
// console.log(typeof obj); //typeof получаем тип перменной
// console.log(typeof array);
// console.log(typeof regexp);
// console.log(typeof func);

                        // Числа

// console.log('Числа');
// var N = new Number(100); // Преобразование простых чисел в объекты. Объекты обертки.
// console.log(typeof N); // Объект
// console.log(N.toFixed(2)); // Количество знаков после точки
// var n = 300.425;
// console.log(typeof n); // Число
// console.log(n.toExponential(2)); // Приведение числа с экспоненте
// console.log(n.toPrecision(4)); // С определенной точностью

                       // Операторы

// Унарные операторы + и -
// Операторы инкримента и дикремента ++ --
// var i = 1;
// console.log(++i); 
// Префиксный инкримент сначала увеличивает потом отдаёт
// console.log(i);
// console.log(i++); 
// Постфиксный инкримент сначала возвращает потом увеличивает
// console.log(i);
// console.log(10 % 3); 
// Остаток от деления

                  // Присваивание с операции

// var n = 100;
// n += 20 // 120
// n *= 2 // 200

                    // Операторы отношения true и false

// console.log(10 === 10); 
// Строгое равенство 10 === "10" false строка и число
// console.log(10 == 10); 
// Равенство с приведением типов
// console.log(10 !== 10); 
// Неравенство

                    // Логический тип операторов

// console.log(10 === 10);
// console.log(Boolean(5)); // Преобразование в булевый тип числа даёт true
// // Falsy values
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(""));

// var s = "text" // Если не пустая строка тогда выполняется
// if (s) {
//   console.log('I\'ts true!')
// }
// // Логическое И
// console.log(true && false);
// console.log(true && true); // Если оба операнда истины возвращается true
// // Логическое ИЛИ
// console.log(true || false); // Истина если хотя бы один операнд истина
// // Логическое отрицание
// console.log(!true);
// // Присваивание с помощью И и ИЛИ
// var a = 0;
// var isTrue = true;
// isTrue && (a = 5); // Если isTrue = true, т.е. не пустая строка тогда а=5
// console.log(a);
// var someString = '123'; // Если someString = true, т.е. не пустая строка тогда newString = someString иначе 'New string'
// var newString = someString || 'New string';
// console.log(newString);*/

                        // null and undefined

// undefined пустое значение, неопределенное или незаданное
// console.log(null == undefined); // true
// console.log(null === undefined); // false разные типы

                       // Преобразование типов

// console.log(Number('222')); // Приводим к числу
// console.log(typeof(Number("222")));
// console.log(String('222')); // Приводим к строке
// console.log(typeof(String('222')));
// console.log(Boolean('1')); // Приводим к числу
// console.log(typeof(Boolean('1')));
// // преобразуем число в булевый оператор
// console.log(!!5); // получаем сначало false т.к. 5 не пустой значение, а потом true, инвертирование
// // преобразуем число в строку
// console.log(typeof(345 + ''));
// var number = 10;
// console.log(number.toString(4));
// console.log(typeof(number.toString())); // в скобках система исчеслений
// // преобразуем строку в число
// console.log(typeof(+'345')); // унарный плюс
// console.log(typeof(parseInt('345 px', 10))); // Может содержать любые символы, которые будут игнорироваться

                        // Условные инструкции

// if (true) console.log('Its true');
// var n = 5;
// if (n < 3) {
//     n++;
//   console.log(n);
// } else {
//   console.log('n is not bigger than three')
// }

// Конструкция else if
// if (n < 3) {
//     n++;
//   console.log(n);
// } else {
//   console.log('n is not bigger than three')
// }

// Конструкция с несколькими типами
// var name = 'Serj', city;
// if (name === 'Serj') {
//   city ='Moscow';
// } else if (name === 'Bill') {
//   city = 'NY';
// } else if (name === 'John') {
//   city = 'La';
// }
// console.log(city);

// Конструкция switch
// var name = 'Serj', city;
// switch(name) {
//   case 'Serj': city = "Moscow";
//   case 'Bill': city = "NY";
//   case 'John': city = 'LA'
// }
// console.log(city);
// Важно!!! Ищется первок совпадение с case и выполняются все условия которые идут после!
// Чтобы избежать в конце иструкциии case используем break чтобы при совпадении выйти из цикла
// var name = 'Serj', city;
// switch(name) {
//   case 'Serj': city = "Moscow"; break;
//   case 'Bill': city = "NY"; break;
//   case 'John': city = 'LA'
//   default: city = 'Unknown' // значение по умолчанию
// }

// var browser = prompt('Browser?');
// if (browser === 'IE') alert( 'О, да у вас IE!' );
// else if (browser === 'Chrome'
//   || browser === 'Firefox'
//   || browser === 'Safari'
//   || browser === 'Opera' ) alert( 'Да, и эти браузеры мы поддерживаем' );
// else alert( 'Мы надеемся, что и в вашем браузере все ок!' );

// var a = +prompt('a?', '');
// switch (a) {
//   case 0: alert(0); break;
//   case 1: alert(1); break;
//   case 2: case 3: alert( '2,3' ); break;
// }

// console.log(city);
// Условный (тернарный) оператор
// выражение ? выражение2 : выражение3
// var x = 8;
// var text = x > 10 ? 'больше десяти' : 'меньше десяти';
// console.log(text);

// var numb = prompt('Enter number', '');
// if (numb > 0) {
//   alert('1');
// } else if (numb < 0){
//   alert('-1');
// } else {
//   alert('0');
// }

                          // Задачи

// var userName = prompt('Your name?', '');
// if (userName === 'admin') {
//   var userPass = prompt("Your password")
//   if (userPass == 123) {
//     alert('Welcome!');
//   } else if (userPass == null) {
//     alert('Aborted!');
//   } else {
//     alert('Wrong password');
//   }
// } else if (userName == null) {
//   alert('Aborted');
// } else {
//   alert('Wrong name');
// }

// var a = 5;
// var b = 1;
// var result = (a + b < 4) ?  'Мало' : 'Много';
// alert(result);

// var login = prompt('Login', '');
// var message;
// login == 'Вася' ? message = 'Привет' :
// login == 'Директор' ? message = 'Здравствуйте' :
// login == '' ? message = 'Нет логина' :
// message = 'Пока!';
// alert(message);

                                // Циклы

// for (иницилизация, тест, инкримент) тело цикла
// var i;
// for (i = 0; i < 10; i++) {
//   console.log(i)
// }
// for (i = 10; i--) { // обратно, можно не задавать условия так i=0 будет false и цикл прекратиться
//   console.log(i)
// }
// while (выражение) инструкция
// var i = 10;
// while (i--) {
//   console.log(i);
// }
// do инструкция while (выражение) условие проверяется после тела цикла, а не до него.
// Поэтому цикл выполняется хотя бы один раз.
// var i = 8;
// do console.log(i++); while (i < 10) {
// }

// for (var i = 1; i <= 10; i++) {
//   if (i % 2 == 0){
//     alert(i);
//   }
// }

// var i = 0;
// while (i < 3) {
//   alert( "номер " + i + "!" );
//   i++;
// }

// var numb
// do {
//   numb = prompt('Enter number', '');
//   if (!numb) break;
// }
// while (numb < 100)

// while (true) {
//   var numb = prompt('Enter number', '');
//   if (numb > 100 || !numb) break;
// }

// nextPrime:
// for (var i = 1; i < 10; i++) {
//   for (var j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   alert(i); // простое
// }

// 3i 2j j<i нет
// 3i 3j j<i 3i

// 4i 2j j<i нет

// 5i 2j j<i нет
// 5i 3j j<i нет
// 5i 4j j<i нет
// 5i 5j j<i 5

// 6i 2j j<i нет

// 7i 3j j<i нет
// 7i 4j j<i нет
// 7i 5j j<i нет
// 7i 6j j<i нет
// 7i 7j j<i 7
// 1i 2j j<i 1i
// 2i 2j j<i 2i

                              // Функции

// function идентификатор(аргументы) {
//   инструкции
//   return выражение
// }
// function greet(name) {
//   return 'Hello ' + name;
// } // !точка с запятой не нужна
// Вызываем функцию greet('Serj') с апперкейсом
// console.log(greet('Serj').toUpperCase());

// var greet = function(name) {
//   console.log(arguments); // массив всех переданных аргументов можно выбирать номер arguments[2]
//   return 'Hello ' + name;
// } // точка с запятой нужна
// console.log(greet('Serj', 10, 12).toUpperCase());
// Callback
// var func = function(callback) {
//   var name = 'Serj';
//   callback(name);
// };
// func(function(n){
//   console.log('Hello ' + n);
// });
// var greet = (function(name) {
//   return 'Hello ' + name;
// }('Serj'));
// console.log(greet);

                          // Цепочки областей видимости. 

// var i = 5;
// var func = function() {
//   var i = 10;
//   console.log(i);
//   var innerFunc = function() {
//     var i = 15;
//     console.log(i);
//   }
//   innerFunc();
// };
// func();

// var age = prompt('Age?', '');
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }
// checkAge(age);

// var age = prompt('Age?', '');
// function checkAge(age) {
//   return(age > 18 || confirm('Родители разрешили?'));
// }
// checkAge(age);

// var a, b;
// function test(a, b) {
//   a = prompt('Число a', '');
//   b = prompt(a + ' больше?', '');
//   alert(a + ' > ' + b + ' ?');
//   if (a > b) {
//     return(alert(false));
//   }
//   else {
//     return(alert(true));
//   }
// }
// test();

                            // Замыкания

// var func = function() {
//   var i = 10;
//   return function() {
//     return i;
//   }
// };
// var anotherFunc = function() {
//   var i = 20;
//   console.log(func()());
// };

                            // Счетчик

// var counter = function(){
//   var count = 1;
//   return function(num) {
//     count = num !== undefined ? num : count;
//     return count++;
//   }
// }();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

                    // Преобразование типов для примитивов

// "" + 1 + 0 // 10 ------
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 //$45
// "4" - 2 // 2
// "4px" - 2 // nan -------
// 7 / 0 // infinity
// "  -9\n" + 5 // -9\n5 ------
// "  -9\n" - 5 // -14
// 5 && 2 // 2
// 2 && 5 // 5
// 5 || 0 // 5
// 0 || 5 // 5
// null + 1 // 1
// undefined + 1 // NaN -------
// null == "\n0\n" // false ------
// +null == +"\n0\n" // true'

                                // NFE

// function foo() { return 1; } // undefined 
// function foo() { return 1; }(); // Uncaught SyntaxError: Expected () to start arrow function, but got '}' instead of '=>'
// (function foo() { return 1; }()) // 1
// (function foo() { return 1; })() // 1
// +function foo() { return 1; }();
// -function foo() { return 1; }();
// --function foo() { return 1; }();
// !function foo() { return 1; }();
// function f(n){alert(n);}(6);


                              // Оператор in
                           
// var obj = {
//   a: 1,
//   name: 2
// };

// var x = 'name'
// console.log('a' in obj); // true
// console.log(x in obj); // true

                        // Проверка на совпадение

// var str = "Widget";
// if (~str.indexOf("get")) {
//   alert( 'совпадение есть!' );
// }

        // Генерация случайного целого от min до max включительно

// var rand = min + Math.floor(Math.random() * (max + 1 - min));

                            // Строки

// console.log('\"Another \n\tlong \n\t\tstring\"'); // Переносы табы и экранирование
// var stringType = 'Hello,';
// console.log(stringType + 'world!'); // конкатенация (сложение строк)
// var string = 'Sometimes the same is different';
// console.log(string)
// console.log(string.charAt(0)); // Возращает букву под индексом 0 - первая (!) буква
// console.log(string.length); // Длина строки
// console.log(string.substring(10, 21)); // Подстрока, с начала до конца, с индекса до индекса
// console.log(string.slice(-15)); // Подстрока, с конца до начала, с индекса до индекса
// console.log(string.substr(0, 9)); // Подстрока, с индекса + кол-во знаков
// console.log(string.indexOf('o')); // Возвращает индекс первой найденной буквы с начала
// console.log(string.lastIndexOf('o')); // с конца
// console.log(string.replace('is', 'is not')); // замена одного на другое
// console.log(string.split(" ")); // разделитель на массив (тут пробел)
// console.log(string.toUpperCase()); // регитстр
// console.log(string.toLowerCase()); // регитстр
// console.log(string[4]); // Строка по ECMA5 это массив вместо charAt*/



// Проверка стандарта
/*
var question = prompt('Напишите официальное название Javascript', '');
if (question == 'ecma sript') {
  alert('Верно!');
} else {
  alert('Не верно');
}
*/

// Получить знак числа
/*
var question = prompt('Напишите число', '');
if (question > 0) {
  alert('1');
} else if (question < 0) {
  alert('-1');
} else if (question === 0 ) {
  alert('0');
} else if (question === null || question == false) {
  alert('Вы ничего не ввели!');
}
*/

// Проверка логина
/*
var login = prompt('Кто?', '');
if (login === 'admin') {
  var pass = prompt('Пароль?', '');
  if (pass === '123') {
    alert('Добро пожаловать!');
  } else if (pass === null) {
    alert('Вход отменен');
  }
  else if (pass == false) {
    alert('Вы ничего не написали');
  }
} else if (login == false) { // Если ничего не ввёл то возвращает пустую строку
  alert('Вы ничего не написали');
} else if (login === null) {
  alert('Вход отменен');
}
*/

// Перепишите 'if' в '?'
/*
var a = prompt('a', '');
var b = prompt('b', '');
var result = (+a + +b < 4) ? 'Мало' : 'Много';
alert(result);
*/

// Перепишите 'if..else' в '?'
/*
var login = prompt('Логин','');
var message = (login == 'Вася') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' : 'Ввод отменен';
alert(message);
*/

// Перепишите 'if..else' в '?'
/*
var age = prompt('Возраст', '');
if (!(age <= 90 && age >= 14)) {
  alert('OK');
} else {
  alert('NO');
}
*/

// Преобразование типов для примитивов
/*
"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 //$45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity
"  -9\n" + 5  // "  -9\n5"
"  -9\n" - 5 // -14
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
null + 1 // 1
undefined + 1 // NaN
null == "\n0\n" // false
+null == +"\n0\n" // true
*/

// Циклы while, for

/*
for (var i = 1; i <= 10; i++) {
  if (i % 2) continue;
  alert(i);
}
*/

/*
var i = 0;
while (i < 3) {
  alert( "номер " + i + "!" );
  ++i;
}
*/

/*
var i = 0;
while(!(i > 100)) {
  i = prompt('Введите число больше 100', '');
  if (!i) break;
}
*/

/*
for (var i = 0; i <= 100;) {
  i = prompt('Введите число больше 100', '');
  if (!i) break;
}
*/

// только простые числа
/*
for (var i = 1; i <= 13; i++) {
  //alert('i = ' + i);
  for (var n = 2; n <= i; n++) {
    if (i % n == 0) {
      if (i != n) break;
      alert('Верно! n = ' + n);
    }
  }
}
*/

/*
nextPrime:
  for (var i = 2; i < 10; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert( 'i = ' + i ); // простое
  }

var i = 1
  while (i < 20) {
    i++;

    for (var n = 2; n != i; ) {
      if (i % n == 0) break;
      n++;
    }

  if (n != i) continue;
  alert(i)
}
*/

// Конструкция switch
/*
var browser = prompt('Browser');
if (browser == 'IE') {
  alert( 'О, да у вас IE!' );
} else if (browser == 'Chrome' || browser == 'Firefox' ||
  browser == 'Safari' || browser == 'Opera') {
  alert( 'Да, и эти браузеры мы поддерживаем' );
} else {
  alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
*/

/*
var a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( '0' ); break;
  case 1:
    alert( '1' ); break;
  case 2:
  case 3:
    alert( '2,3' ); break;
}
*/

//Функции
/*
var age = (+ prompt('Age?', ''));
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
checkAge(age);
*/

/*
var age = prompt('Age?', '');
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}
checkAge(age);
*/

/*
function min(a,b) {
  var a = prompt('a - ', '');
  var b = prompt('b - ', '');
  return (a > b) ? a : b;
}
alert(min(10,4));
*/

/*
var x = prompt("x?", '');
var n = prompt("n?", '');

function pow(x, n) {
  var result = x;
  while (n > 1) {
    result *= x;
    n--;
  }
  return result;
}
if (n <= 1) {
  alert('Wrong n');
} else {
  alert(pow(x,n));
}
*/

/*
function pow(x,n) {
  return n <= 0 ? 1 : pow(x,n-1)*x
}
alert(pow(2,3));
*/

/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

function showOk() {
  alert( "Вы согласились." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

ask("Вы согласны?", showOk, showCancel);

// короче
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

// new Function
/*
var sum = new Function('a,b', ' return a+b; ');

var result = sum(1, 2);
alert( result ); // 3
*/

/*
function sumTo(n) {
  var result = n;
  while (n != 0) {
    n--;
    result += n;
  }
  return result;
}
alert(sumTo(100));
*/

/*
function sumTo(n) {
  if (n > 0) {
    return n + sumTo(n - 1);
  } else {
    return n;
  }
}
alert(sumTo(100));
*/

/*
function sumTo(n) {
  return n * (n + 1)/2;
}
alert(sumTo(100));
*/

/*
function fact(n) {
  if (n > 0) {
    return n * fact(n - 1);
  } else {
    return n;
  }
}
alert(fact(5));
*/

/*
function fact(n) {
  var result = n;
  while (n != 1) {
    n--;
    result *= n;
  }
  return result;
}
alert(fact(5));
*/

/*
function fact(n) {
  if (n != 1) {
    return n * fact(n - 1);
  } else {
    return 1;
  }
}
alert(fact(5));
*/

/*
function fib(n) {
  var a = 1,
  var b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
alert(fib(3));
*/

/*
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
alert( fib(3) ); // 2
*/

// Проверка на число
/*
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
*/

                              // Числа

/*
for (;;) {
  var a = prompt('a - ', '');
  var b = prompt('b - ', '');

  if (isNumeric(a) && isNumeric(b)) {
    //alert('a + b =' + sum(a,b));
    alert('Десятичная часть числа a = ' + getDecimal(a));
    alert('Десятичная часть числа b = ' + getDecimal(b));
    break;
  } else {
    alert('Вы ввели не число');
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function sum(a,b) {
  return +a + +b;
}

function getDecimal(n) {
  return Math.abs(parseFloat(n) - parseInt(n))/1;
}
*/

// Числа Фибоначи по формуле Бине
/*
  function fibBinet(n) {
    var phi = (1 + Math.sqrt(5)) / 2;
    // используем Math.round для округления до ближайшего целого
    return Math.round(Math.pow(phi, n) / Math.sqrt(5));
  }

  function fibBinet(n) {
    var a = (1 + Math.sqrt(5))/2;
    var b = (1 - Math.sqrt(5))/2;
    var result = (Math.pow(a, n) - Math.pow(b, n))/Math.sqrt(5);
    return result;
  }
  fibBinet(5);
*/

// Возвращает случайное число между 0 (включительно) и 1 (не включая 1)
/*
function getRandom() {
  var max = 10;
  return Math.random() * max ;
}

function random(n) {
  var max = 10;
  return Math.round(Math.random() * max);  
}
alert(random());
*/

// Случайное из интервала (min, max)
/*
function getRandom() {
  var min = 1;
  var max = 10;
  return min + Math.random() * (max - min);
}
alert(getRandom());
*/

//Случайное целое от min до max
/*
function randomInteger(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
alert(randomInteger(1,10));
*/

                            // Строки

// Поиск всех вхождений
/*
var text = 'В этом тексте два слова два.'
var search = 'два';
var pos = 0;

while (true) {
  var foundPos = text.indexOf(search, pos);

  if (foundPos == -1) break;

  alert(foundPos);
  pos = foundPos + 1;
}
*/

// Сделать первый символ заглавным
/*
function ucFirst(str) {
  return str = str.charAt(0).toUpperCase(1) + str.slice(1);
}

alert(ucFirst('привет'));
*/

// Возвращает true, если строка str содержит 
// „viagra“ или „XXX“, а иначе false.
/*
function checkSpam(str) {
  str = str.toLowerCase();
  //!!(~str.indexOf('xxx') || ~str.indexOf('viagra'))
  if (str.indexOf('xxx') != -1 || str.indexOf('viagra') != -1) return true;
  else return false;
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
*/

// Проверяет длину строки str, если она больше maxlength 
// меняет конец str на "..."
/*
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

truncate('Привет', 5)
*/

// Выделить число
/*
function extractCurrencyValue(str) {
  return +str.slice(1);
}
extractCurrencyValue('$120');
*/

                            // Объекты
/*
var user = {}
user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
delete user.name;
*/

/*
var user = {};
user.name = 'Vasya';
alert(user.name);
user['surname'] = 'Petrov';
alert(user.surname);
var key = 'name';
user[key] = 'Sergey';
alert(user.name); 
delete user[name]; // Интересно получается
alert(user[name]);
alert(user.name);
*/

/*
var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

for (var key in menu) {
  // этот код будет вызван для каждого свойства объекта
  // ..и выведет имя свойства и его значение

  alert( "Ключ: " + key + " значение: " + menu[key] );
}
*/

// Перебор объекта с помощью Object.keys
/*
var user = {
  'name': 'Serj',
  'age': 30,
  'work': false
};

var keys = Object.keys(user)

keys.forEach(function(key) {
  console.log(key + ' ' + user[key]);
});

console.log(keys);
*/

// Пуст ли объект
/*
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

var schedule = {};
schedule["8:30"] = "подъём";
alert( isEmpty(schedule) )
*/

// Cумма зарплат с проверками на пустую строку
/* 
function isEmpty(salaries) {
  var sum = 0;
  for (var key in salaries) {
    if (!isNaN(salaries[key])) {
      sum = sum + +salaries[key];
    }
    alert( "Ключ: " + key + " значение: " + salaries[key] );
  }
  return sum;
}

var salaries = {
  "Вася": '100',
  "Петя": 300,
  "Даша": 250
};
salaries.Vitya = '';
alert(isEmpty(salaries));
*/

// Сумма свойств и свойство с наибольшим значением
/*
function getSum(obj) {
  var sum = 0;

  for (var key in obj) {
    sum += obj[key];
  }
  return sum;
};

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" );
*/

/*
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
  submenu: {
    background: 'black';
  }
};

Object.keys(menu).forEach(function(key) {
  console.log(menu[key]);
});
*/

// Умножьте численные свойства на 2
/*
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {
  for (var key in menu) {
    if (isNumeric(obj[key])) {
      obj[key] = obj[key] * 2;
      alert(obj[key]);
    }
  }
}

multiplyNumeric(menu);
*/

                              // Массивы

// Получить последний элемент массива
/*
var goods = [1,2,3,'да'];
var lastItem = alert(goods[goods.length - 1]);
*/

// Добавить новый элемент в массив
/*
var goods = [1,2,3,'да'];
goods[goods.length] = 'Компьютер'
alert(goods);
*/

// Создание массива
/*
var styles = ['Джаз', 'Блюз'];
alert(styles);
styles[styles.length] = 'Рок';
alert(styles);
styles[styles.length - 2] = 'Классика';
alert(styles);
styles.shift();
alert(styles);
styles.unshift('Рэп', 'Регги');
alert(styles);
*/

// Получить случайное значение из массива
/*
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = Math.floor(Math.random() * arr.length);
alert(arr[rand]);
*/

// Копирование объектов
/*
var user = {
  'name': 'Serj',
  'age': 30,
}
var userWork = {
  'work': false
}

function copy(dest) {
  for (var i = 0; i < arguments.length; i++) {
    var obj = arguments[i];
    for (var key in obj) {
      dest[key] = obj[key];
    }
  }
  return dest;
};

// 3 способа
//copy(user, userWork);
//copy(user, {sex: 'male'});
//var clone = copy({}, user, userWork);
user;
*/

// Перебор массива используемый метод
/*
var user = {
  'name': 'Serj',
  'age': 30,
  'work': false
};

Object.keys(user).forEach(function(key) {
  console.log(user[key]);
})
*/

// Калькулятор для введённых значений
/*
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
var arr = [];

for (var i = 0; i >= 0; i++) {
  var num = prompt('num' + i + ' = ', '');

  if (!isNumeric(num)) break; 
  // или if (num === "" || num === null || isNaN(num))

  arr[i] = num; // или arr.push(num);
}

var sum = 0;
for (i = 0; i < arr.length; i++) {
  sum += +arr[i];
}

alert(sum);
*/

//Скопировать массив
/*
var arr2 = [];
for (var i = 0; i < arr.length; i++) arr2[i] = arr[i];
*/

// Ищет в массиве arr значение value и возвращает 
// его номер или -1, если не найдено.
/*
var arr = [1, 'test', 3, 'test', 5];

function find(arr, value) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

alert(find(arr, 'test'));
*/

// Фильтр диапазона
/*
var arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
  var result = [];
  for (var i = 0; i < arr.length; i++) arr[i] = arr[i]; // копируем

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result.push(arr[i]);
    }
  }
  return result;
}

filterRange(arr, 0, 5);
*/

// Решето Эратосфена
/*
var max = 99;
var arr = [];
for (var i = 2; i <= max; i++) {
  arr[i] = true;
};

var count = 2;
for (var i = 2; i <= max; i++) {

  for (var j = 2; j <= max; j++) {
   var stopValue = j * count; 
   arr[stopValue] = stopValue;
   if (stopValue >= 100) break;
  };
  count += 1;
  if (Math.pow(count, 2) >= max) break;
};
console.log(arr);

var sum = 0;
for (var i = 2; i <= max; i++){
  if (arr[i]) sum += i;
};
console.log(sum);
*/

/*
var result = [];
var simpleNumb = [];

function compareNumeric(a, b) {
  return a - b;
}

var arr = [];  // Создаём массив 1-100
for (var i = 0; i <= 100; i++) {
  arr[i] = i;
}

for (var n = 2; n * n <= 100; n++ ) {

  for (var i = 0; i * n <= 100; i++) {
    result[i] = i * n;
  };

  simpleNumb = simpleNumb.concat(result).sort(compareNumeric);
};

for (var x = 1; x <= 100; x++) {
  if (simpleNumb[x] === simpleNumb[x + 1]) console.log(simpleNumb[x])
};
console.log('simpleNumb - ' + simpleNumb);
*/

// Подмассив наибольшей суммы
/*
function getMaxSubSum(arr) {
  var maxSum = 0; // если совсем не брать элементов, то сумма 0

  for (var i = 0; i < arr.length; i++) {
    var sumFixedStart = 0; 
    for (var j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
*/

                                // Массивы: методы

// Коллекция уникальных элементов
/*
var store = {}; // объект для коллекции

var items = ["div", "a", "form"];

for (var i = 0; i < items.length; i++) {
  var key = items[i]; // для каждого элемента создаём свойство
  store[key] = true; // значение здесь не важно
}
if (store['div']) alert('gotcha');
*/

// Добавить класс в строку
/*
function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return; // класс уже есть
  }

  classes.push(cls); // добавить

  obj.className = classes.join(' '); // и обновить свойство
}

var obj = {
  className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className) // open menu new me
*/

// Перевести текст вида border-left-width в borderLeftWidth
/*
function camelize(str) {
  var str = str.split('-');

  for (var i = 1; i < str.length; i++) {
    str[i] = ucFirst(str[i]);
  }

  return str = str.join('');
}

alert(camelize('fuck-fuck-fuck'));

function ucFirst(str) {
  return str = str.charAt(0).toUpperCase(1) + str.slice(1); // Первый заглавный символ
}
*/

//Функция removeClass
/*
var obj = {
  className: 'open menu menu fuck'
};

function removeClass(obj, cls) {
  var classes = obj.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1);
      i--;
    } // класс уже есть
  }
  return obj.className = classes.join(' ');;
};
removeClass(obj, 'menu');
*/

// Фильтрация массива "на месте"
/*
var mass = [5, 3, 8, 1];

function filterRangeInPlace(arr, min, max) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= min || arr[i] >= max) {
      arr.splice(i, 1);
      //i--;
    }
  }
  return arr;
}

filterRangeInPlace(mass, 1, 4); // удалены числа вне диапазона 1..4

alert( mass ); // массив изменился: остались [3, 1]
*/

// Сортировать в обратном порядке
/*
var arr = [5, 2, 1, -10, 8];

function compareNumeric(a, b) {
  return b - a;
}
arr.sort(compareNumeric);

alert( arr ); // 8, 5, 2, 1, -10
*/

// Скопировать и отсортировать массив
/*
var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.slice().sort();

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

// Случайный порядок в массиве
/*
var arr = [1, 2, 3, 4, 5];

function compareRandom(a, b) {
  return Math.random() - 0.5;
}
arr.sort(compareRandom);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
*/

// Сортировка объектов сортирует массив объектов people по полю age.
/*
function compareAge(personA, personB) {
  return personA.age - personB.age;
}

// проверка
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);

// вывести
for(var i = 0; i < people.length; i++) {
  alert(people[i].name); // Вовочка Маша Вася
}
*/

// Вывести односвязный список
/*
var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function printList(list) {
  var tmp = list;

  while (tmp) {
    alert( tmp.value );
    tmp = tmp.next;
  }

}
printList(list);
*/

// Отфильтровать анаграммы
/*
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
var sortName = [];

function aclean(arr) {
  for (var i = 0; i < arr.length; i++) {
    sortName[i] = arr[i].split('').sort().join('').toLowerCase();
  };
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      console.log(sortName[i]);
      console.log(sortName[j]);
      if (sortName[i] === sortName[j]) {
        arr.splice(j, 1);
        j--;
      };
    };
    //console.log(sortName);
  };
  return(arr);
};

aclean(arr);
*/

/*
var arr = ["воз", "киборг", "киборг", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {

  var resultArr = arr.slice();
  var symbols = [];

  for (var i = 0; i < resultArr.length; i++) {
    symbols.push(resultArr[i]
      .split('')
      .sort()
      .join('')
      .toLowerCase()
    );
  }

  console.log(symbols.sort());

  var j = 0;

  for (var i = 0; i < resultArr.length; i++) {
    if (symbols[i] == symbols[i + 1]) {
      arr.splice(j--, 1);
    }
    j++;
  }

  return arr
};

aclean(arr);
*/

// Оставить уникальные элементы массива
/*
var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"];
var obj = {};

function unique(strings) {
  for (var i = 0; i < strings.length; i++) {
    obj[strings[i]] = true;
  };
  return Object.keys(obj);
};

alert( unique(strings) ); 
*/

                              // Массив: перебирающие методы

// Перепишите цикл через map
/*
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(words) {
  return words.length;
});

alert(arrLength)

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5
*/

// Массив частичных сумм
/*
var arr = [-2,-1,0,1];

function getSums(arr) {

  var resultArr = [];
  var newArr = []

  arr.forEach(function(item, i, arr) {

    newArr.push(item);

    resultArr.push(newArr.reduce(function(sum, current) {
      var value = sum + current
      return value;
    }));

  });

  return resultArr;
};

console.log(getSums(arr));
*/

// короткие варианты решения 
/*
function getSums(arr) {
   res = arr.reduce(function(sum, item) {
         sum.sm += item;
         sum.ar.push(sum.sm);
         return sum;
       }, {ar: [], sm: 0});
  return res.ar;
}
*/

/*
function getSums(arr) {
  var reduceArr = [];
  arr.reduce(function(sum, current) {
    sum = sum + current;
    reduceArr.push(sum);
    return sum;
  }, 0)
  return reduceArr;
}
*/

                          // Псевдомассив аргументов "arguments"

// Копирование свойств из нескольких объектов в один
/*
var vasya = {
  age: 21,
  name: 'Вася',
  surname: 'Петров'
};

var user = {
  isAdmin: false,
  isEmailConfirmed: true
};

var student = {
  university: 'My university'
};

copy(vasya, user, student);

alert( vasya.isAdmin ); // false
alert( vasya.university ); // My university


function copy() {
  var dst = arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    var arg = arguments[i];
    console.log(arg);
    for (var key in arg) {
      dst[key] = arg[key];
    }
  }

  return dst;
}
*/

// Проверка на аргумент-undefined
/*
function f(x) {
  if (arguments.length === 0) alert('0')
  else alert('1');
}

f(undefined); // 1
f(); // 0
*/

// Сумма аргументов
/*
function sum() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
};
sum(1, 2, 3, 4);
*/

// В одну строку
/*
function sum () {
    return arguments.length ? [].reduce.call(arguments, function (prev, cur) {return prev + cur}) : 0;
}
*/

                                      // Дата и Время

// Бенчмаркинг
// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;
// function walkIn(arr) {
//   for (var key in arr) arr[key]++;
// }
// function walkLength(arr) {
//   for (var i = 0; i < arr.length; i++) arr[i]++;
// }
// function bench(f) {
//   var date = new Date();
//   for (var i = 0; i < 1000; i++) f(arr);
//   return new Date() - date;
// }
// // bench для каждого теста запустим много раз, чередуя
// var timeIn = 0,
//   timeLength = 0;
// for (var i = 0; i < 100; i++) {
//   timeIn += bench(walkIn);
//   timeLength += bench(walkLength);
// }
// alert( 'Время walkIn: ' + timeIn + 'мс' );
// alert( 'Время walkLength: ' + timeLength + 'мс' );

// Задачи
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут
// alert(new Date(2012,  1, 20, 3, 12));

// Выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
/*
function getWeekDay(date) {
  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[date.getDay()];
}
var date = new Date(2014, 0, 3); // 3 января 2014
alert( getWeekDay(date) ); // 'пт'
*/
/*
var date = new Date(2012,0,3);  // 3 января 2012

function getWeekDay(date) {
  var options = {
    weekday: 'short'
  };
  return date.toLocaleString("ru", options);
};
alert( getWeekDay(date) );      // Должно вывести 'вт'
alert( date.toLocaleString('ru', {weekday: 'short'}) ) // или так
*/

// День недели в европейской нумерации
/*
var date = new Date(2012,0,3);  // 3 января 2012

function getWeekDay(date) {
  return date.getDay() || 7;
}
alert( getWeekDay(date) );
*/

// Возвращает число days дней назад от даты date
/*
function getDateAgo(date, day) {
  var newTime = new Date(date - (3600 * 24 * 1000 * day));
  return newTime.getDate();
}

var date = new Date(2015, 0, 2);
alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
*/
/*
function getDateAgo(date, days) {
  var dateCopy  = new Date(date);
  dateCopy.setDate(dateCopy.getDate() - days);
  return result = dateCopy.toLocaleString("ru", {day: 'numeric'});
  //return dateCopy.getDate(); или так
}
var date = new Date(2017, 2, 31);
getDateAgo(date);
*/

// Возвращает последний день месяца
/*
function getLastDayOfMonth(year, month) {
  var date = new Date(year, month + 1, 0)
  return date.getDate();
}
getLastDayOfMonth(2017, 1);
*/

// Возвращает, сколько секунд прошло с начала сегодняшнего дня.
/*
function getSecondsToday() {
  var result = new Date();
  return result.getHours() * 3600 + result.getMinutes() * 60 + result.getSeconds();
};
getSecondsToday();
*/
/*
function getSecondsToday() {
  var now = new Date();

  // создать объект из текущей даты, без часов-минут-секунд
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  var diff = now - today; // разница в миллисекундах
  return Math.floor(diff / 1000); // перевести в секунды
}

alert( getSecondsToday() );
*/

// Возвращает, сколько секунд осталось до завтра
/*
function getSecondsToTomorrow() {
  var now = new Date();

  // создать объект из завтрашней даты, без часов-минут-секунд
  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  var diff = tomorrow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // перевести в секунды
};
getSecondsToTomorrow();
*/

// Выводит дату date в формате дд.мм.гг:
/*
function formatDate(date) {
  var options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }
return date.toLocaleString("ru", options);
};

var d = new Date(2014, 0, 30);
formatDate(d);
*/

// Относительное форматирование даты
/*
function formatDate(date) {
  var now = Math.floor((Date.now() - date) / 1000);
  if (now <= 1) return "только что";
  if (now <= 60) return now + " сек. назад";
  if (now <= 3600) return now / 60 + " мин. назад";

  var options = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleString('ru', options);

  // return date.toLocaleString("ru", {
  //   day: '2-digit',
  //   month: '2-digit',
  //   year: '2-digit'
  // }) + " " + date.toLocaleString("ru", {
  //   hour: '2-digit',
  //   minute: '2-digit'
  // });
}

alert( formatDate(new Date(new Date - 1)) ); // "только что"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
*/

                                    // Замыкание

// Локальные переменные для объекта
// sum(a)(b) = a+b
/*
function sum(a) {
  return function(b) {
    return a + b;
  };
};
sum(5)(5);
*/

// Функция - строковый буфер и очистка
/*
function makeBuffer() {
  var text = '';

  return function(value) {
    if (arguments.length == 0) { // вызов без аргументов
      return text;
    }
    text += value;

    buffer.clear = function(){
      text = ''
    };
  };
};

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
buffer();
*/

// Сортировка
/*
var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}

users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );
});
*/

// Фильтрация через функцию
/*
function filter(arr, func) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i]; // 0

    if (func(val)) { // inBetween(2, 6)(x) x == false || x
      result.push(val);
    };
  };
  return result;
};

function inBetween(min, max)(0) {
  return function(x) {
    return x >= min && x <= max;
  };
};

var numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(numbers, inBetween(3, 6)) );

var filteredArray = arr.filter(inBetween(2, 6));
console.log(filteredArray);
*/

// var filteredArray = arr.filter(inBetween(3, 6)); фильтр
// var filteredArray = arr.filter(f); передаём функцию
// function f(i) { return i >= min && i <= max }; создаём функцию для фильтра
// var min = 3, var max = 6
// чтобы менять значения min и max нужно чтобы F была результатом другой функции
// function inBetween(min, max) { return f }
// var checkIfValue = inBetween(3, 6); замыкание

// Второе решение не оптимальное через filter
// todo
/*
var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func) {
  var resultArr = arr.filter(func);
  return resultArr;
}

function inBetween(a, b) {
  return function(number) {
    return (number >= a) && (number <= b);
  };
};

function inArray(newArr) {
  if (newArr.length == 0) return;
  return function(a) {
    for (var i = 0; i < newArr.length; i++) {
      console.log('newArr[i] ' + newArr[i] + ' a ' + a);
      if (newArr[i] == a) return true;
    }
  }
};

console.log(filter(arr, inBetween(3, 6)) ); // 3,4,5,6
console.log(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

console.log(filter(arr, inArray([1, 2, 6, 4, 10]) ) ); // 1,2,4,6
*/

// Пример выполнения функции
/*
var shooters = [0, 1, 2, 3, 4];

var shooter = function() {
  return [1, 2, 3];
};

shooters.push(shooter()[0]);

shooters.forEach(function(item, i) {
  console.log( i + ": " + item);
});
*/

// Армия функций
/*
function makeArmy() {
  var army = [];

  for (var i = 0; i < 10; i++) {

    // Первое решение
    /* 
    var robot = function innerRobot() {
      alert( innerRobot.i );
    };
    robot.i = i;
    army.push(robot);
    */ 

    // Второе решение
    /*
    var robot = (function(x) {

      return function() {
        alert(x);
      }
    })(i);
    army.push(robot);
    */
    //(цикл)(fn(i) {})(i)
    // Третье решение. Crazy. Не понятно
    /*
    for (var i = 0; i < 10; i++)(function(i) {
      console.log(i)
      var robot = function() {
        alert( i );
      };
      army.push(robot);

    })(i);
    return robot;
    */
    // мое решение
    /*
    var createRobot = function() {
      var numb = i;
      return function() {
        alert(numb)
      }
    };
    army.push(createRobot());
    
  }

  return army;
};

var army = makeArmy();

army[2]();
army[5]();
*/


                        // Некоторые другие возможности

                        // Типы данных: [[Class]], instanceof и утки

// alert( typeof 1 );         // 'number'
// alert( typeof true );      // 'boolean'
// alert( typeof "Текст" );   // 'string'
// alert( typeof undefined ); // 'undefined'
// alert( typeof null );      // 'object' (ошибка в языке)
// alert( typeof alert );     // 'function'

// var toString = {}.toString;
// var arr = [1, 2];
// alert( toString.call(arr) ); // [object Array]
// var date = new Date;
// alert( toString.call(date) ); // [object Date]
// var user = { name: "Вася" };
// alert( toString.call(user) ); // [object Object]
// alert( {}.toString.call(123) ); // [object Number]
// alert( {}.toString.call("строка") ); // [object String]

// Функция возвращает только сам [[Class]]
// function getClass(obj) {
//   return {}.toString.call(obj).slice(8, -1);
// }
// alert( getClass(new Date) ); // Date
// alert( getClass([1, 2, 3]) ); // Array

// Метод isArray 
// alert( Array.isArray([1,2,3]) ); // true
// alert( Array.isArray("not array")); // false

// var something = [1, 2, 3];
// if (something.splice) {
//   alert( 'Это утка! То есть, массив!' );
// }


// Задачи
// Полиморфная функция formatDate
/*
function formatDate(date) {

  var options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  };

  switch(typeof date) {
    case 'string':
    case 'number':
    return new Date(date).toLocaleString("ru", options);
  };

  if (date.getFullYear) {
    return date.toLocaleString("ru", options);
  };
  if (Array.isArray(date)) {
    console.log();
    return new Date(date.join(':')).toLocaleString("ru", options);
  };
};
*/
/*
alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890 * 1000) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14

function formatDate(date) {
    switch ({}.toString.call(date).slice(8, 9)) {
        case 'A': return f(new Date(date[0], date[1], date[2]))
        case 'N': return f(new Date(date * 1e3))
        case 'S': return f(new Date(date))
        case 'D': return f(date)
    }

    function f(d) {
        var s = '2-digit'
        return d.toLocaleString('ru', {year: s, month: s, day: s})
    }
}
*/


                          //Формат JSON, метод toJSON
// {
//   name: "Вася",       // ошибка: ключ name без кавычек!
//   "surname": 'Петров',// ошибка: одинарные кавычки у значения 'Петров'!
//   "age": 35,           // .. а тут всё в порядке.
//   "isAdmin": false    // и тут тоже всё ок
// }

// дата в строке - в формате UTC
// var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';

// var event = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });
// alert( event.date.getDate() ); // теперь сработает!

// var user = {
//   name: "Вася",
//   age: 25,
//   window: window
// };
// alert( JSON.stringify(user, ["name", "age"]) );
// // {"name":"Вася","age":25}

// Задачи
// Превратите объект в JSON
/*
var leader = {
  name: "Василий Иванович",
  age: 35
};
var leaderStr = JSON.stringify(leader);
leader = JSON.parse(leaderStr);
*/

// Превратите объекты со ссылками в JSON
// todo


                                // setTimeout и setInterval

// // начать повторы с интервалом 2 сек
// var timerId = setInterval(function() {
//   alert( "тик" );
// }, 2000);

// // через 5 сек остановить повторы
// setTimeout(function() {
//   clearInterval(timerId);
//   alert( 'стоп' );
// }, 5000);

// рекурсивный setTimeout:
// // вместо:
// var timerId = setInterval(function() {
//   alert( "тик" );
// }, 2000);
// 
// var timerId = setTimeout(function tick() {
//   alert( "тик" );
//   timerId = setTimeout(tick, 2000);
// }, 2000);

// Задачи
// Вывод чисел каждые 100 мс
/*
function printNumbersInterval() {
  var i = 1;
  var timerId = setInterval(function() {

    console.log(i);
    i++;

    if (i > 10) {
      clearTimeout(timerId);
    };
  }, 500);
};
printNumbersInterval()
*/

// Вывод чисел каждые 100 мс, через setTimeout
/*
function printNumbersInterval() {
  var i = 1;
  var timerId = setTimeout(function warpTimer() {
    console.log(i)
    i++;
    if (i <= 10) setTimeout(warpTimer, 1000);
  }, 1000);
};

printNumbersInterval();
*/

// Для подсветки setInterval или setTimeout?
/*
// setInterval, с остановкой по окончании работы:
var timer = setInterval(function() {
  if (есть еще что подсветить) highlight();
  else clearInterval(timer);
}, 10);

// Рекурсивный setTimeout:
// гарантирует браузеру свободное время между выполнениями highlight
setTimeout(function go() {
  highlight();
  if (есть еще что подсветить) setTimeout(go, 10);
}, 10);
*/

// Что выведет setTimeout?
/*
setTimeout(function() {
  alert( i );
}, 100);
// выполнится по завершению hardWork сразу же
var i;

function hardWork() {
  // время выполнения этого кода >100 мс, сам код неважен
  for (i = 0; i < 1e8; i++) hardWork[i % 2] = i;
}

hardWork();
*/

// Что выведет после setInterval?
/*
var timer = setInterval(function() { 
  i++; // выполнится второй. один раз сразу после выполнения f
  // без накопления вызовов!
}, 10);

setTimeout(function() { // выполнится третий после timer
  clearInterval(timer);
  alert( i ); // 100000001 +1 от i++ в timer
}, 50);
var i;  
function f() { // тяжелая ф-ция. выполнится первой
  for (i = 0; i < 1e8; i++) f[i % 2] = i;
}
f();
*/

// Кто быстрее?
/*
var runner1 = new Runner();
var runner2 = new Runner();
// первый?
setInterval(function() {
  runner1.step();
}, 15);
// или второй?
setTimeout(function go() {
  runner2.step();
  setTimeout(go, 15);
}, 15);
setTimeout(function() {
  alert( runner1.steps );
  alert( runner2.steps );
}, 5000);
// первый быстрее т.к. отсчет интервала включает время
// исполнения ф-ции. а в рекурскивной время отсчитывается
// только после выполнения внутр. ф-ции
*/

// Функция-задержка
/*
function delay(f, ms) {

  return function(x) {
    var thisSelf = this;
    var thisArgs = arguments;

    setTimeout(function() {
      f.apply(thisSelf, thisArgs);
    }, ms)
  }
}

function f(x) {
  alert( x );
}
// delay(f, 1000);
var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
*/

// Вызов не чаще чем в N миллисекунд
// todo

// Тормозилка
// todo


                            // Перехват ошибок, "try..catch"

// try {
//   alert('Начало блока try');  // (1) <--
//   lalala; // ошибка, переменная не определена!
//   alert('Конец блока try');  // (2)
// } catch(e) {
//   alert('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--
// }
// alert("Потом код продолжит выполнение...");

// var data = '{ "age": 30 }'; // данные неполны
// try {
//   var user = JSON.parse(data); // <-- выполнится без ошибок
//   if (!user.name) {
//     throw new SyntaxError("Данные некорректны");
//   }
//   alert( user.name );
// } catch (e) {
//   alert( "Извините, в данных ошибка" );
// }

// function readData() {
//   var data = '{ "name": "Вася", "age": 30 }';
//   try {
//     blabla(); // ошибка!
//   } catch (e) {
//     if (e.name != 'SyntaxError') {
//       throw e; // пробрасываем
//     }
//   }
// }
// try {
//   readData();
// } catch (e) {
//   alert( "Поймал во внешнем catch: " + e ); // ловим
// }

// Оборачивание исключений
// function ReadError(message, cause) {
//   this.message = message;
//   this.cause = cause;
//   this.name = 'ReadError';
//   this.stack = cause.stack;
// }
// function readData() {
//   var data = '{ bad data }';
//   try {
//     // ...
//     JSON.parse(data);
//     // ...
//   } catch (e) {
//     // ...
//     if (e.name == 'URIError') {
//       throw new ReadError("Ошибка в URI", e);
//     } else if (e.name == 'SyntaxError') {
//       throw new ReadError("Синтаксическая ошибка в данных", e);
//     } else {
//       throw e; // пробрасываем
//     }
//   }
// }
// try {
//   readData();
// } catch (e) {
//   if (e.name == 'ReadError') {
//     alert( e.message );
//     alert( e.cause ); // оригинальная ошибка-причина
//   } else {
//     throw e;
//   }
// }

// Секция finally
// function sum(n) {
//   return n ? (n + sum(n - 1)) : 0;
// }
// var n = +prompt('Введите n?', 100);
// var start = new Date();
// try {
//   var result = sum(n);
// } catch (e) {
//   result = 0;
// } finally {
//   var diff = new Date() - start;
// }
// alert( result ? result : 'была ошибка' );
// alert( "Выполнение заняло " + diff );

// <script>
//   window.onerror = function(message, url, lineNumber) {
//     alert("Поймана ошибка, выпавшая в глобальную область!\n" +
//       "Сообщение: " + message + "\n(" + url + ":" + lineNumber + ")");
//   };
//   function readData() {
//     error(); // ой, что-то не так
//   }
//   readData();
// </script>

// Задачи
// Finally или просто код?
/*
try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
} finally {
  финализация: завершить работу
}
// разница с finally будет при работе с функцией
// при return, throw 
*/

// Eval-калькулятор с ошибками
/*
function calculator(calcExp = prompt('expression', '')) {
  try {
    var result = eval(calcExp);
    if(isNaN(result)) throw new Error('Результат неопределен');
    
  } catch(e) {
    alert('Ошибка ' + e.message + ' повторите ввод');
    return calculator();
  }
  return console.log(result)
}
calculator()
*/

                                // Запуск кода из строки: eval

// "use strict";
// eval("var a = 5; function f() { }");
// alert( a ); // ошибка, переменная не определена
// // функция f тоже не видна снаружи

// Задачи
// Eval-калькулятор
// var expr = prompt("Введите выражение?", '2*3+2');
// alert( eval(expr) );


                                        // This
// Калькулятор
/*
var a = +prompt('Введите значение a -', '');
var b = +prompt('Введите значение a -', '');

var calculator = {
  read : [a, b],

  sum: function() {
    return (this.read[0] + this.read[1]);
  },

  mul: function() {
    return (this.read[0] * this.read[1]);
  }
};
calculator.read;
alert( calculator.sum() );
alert( calculator.mul() );
*/

/*
var calculator = {
  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  },

  read: function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

// «чейнинг» (chaining)
/*
var ladder = {
  step: 0, // 1
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
  }
};

ladder.up(); // выполнение функции == lader или {}
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.up().up().down().up().down().showStep(); // 1
*/

// Перебор объекта с помощью Object.keys
/*
var user = {
  'name': 'Serj',
  'age': 30,
  'work': false
};

var keys = Object.keys(user)
keys.forEach(function(key) {
  console.log(key + ' ' + user[key]);
});

console.log(keys);
*/
                            // Преобразование объектов: toString и valueOf

// Вопросник по преобразованиям, для объектов
/*
new Date(0) - 0       //0;
new Array(1)[0] + ""  // undefined
({})[0]               // undefined
[1] + 1               // 11
[1,2] + [3,4]         // 1,23,4
[] + null + 1         // null1
[[0]][0][0]           // 00
({} + {})             // [obj][obj]
*/

// Сумма произвольного количества скобок
/*
function sum(a) {

  var result = a;

  function inner(b) {
    result += b;
    // console.log(result);
    return inner;
  };

  inner.toString = function() {
    return result;
  };

  return inner;
};

alert(sum(2)(2)(6)(3)); // алерт приводит к строке, в функции ищем метод toString и возвращаем резалт
console.log(sum(2)(2)(6)(3));
*/

// Создать Calculator при помощи конструктора
/*
var calculator = new Calculator();

function Calculator() {
  this.read = function(a, b) {
    this.a = +prompt('a?', '');
    this.b = +prompt('b?', '');
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
};

calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );
*/

//Accumulator(startingValue)
/*
function Accumulator(startingValue) { // 1

  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('a?', '');;
  };
}

var accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
alert( accumulator.value );
*/

// Расширяемые объект-калькулятор
/*
function Calculator() {

  var arrOp = {
    '+': function(a, b) {return a + b;}, 
    '-': function(a, b) {return a - b;}
  }

  this.calculate = function(str) {

    var arr = str.split(' ');

    var a = +arr[0];
    var operator = arr[1];
    var b = +arr[2];

    return arrOp[operator](a, b);
  };

  this.addMethod = function(newOp, newFunc) {
    arrOp[newOp] = newFunc;
  }
}

var calc = new Calculator();
alert(calc.calculate("2 + 2"));

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});

alert(powerCalc.calculate("2 * 2"));
*/

                                      // This

// NFE имя функции видно только внутри функци 
// если вызвать test() то test is not defined

// var g = function test(a, b) { 
//   var result = a + b;
//   console.log(arguments);  
// };
// var obj = {
//   f: g
// }
// g(100, 42); // this === undefind
// obj.f(); // this = obj
// obj['f']() // this = obj

// var f2 = obj.f;
// f2(); // this undefind
// После запуска
// LFE_g-0 {
//   this: undefined
//   test: #test // ссылка функции на саму себя
//   arguments {
//     0: 100
//     1: 42
//     length: 2
//   }
//   a: 100
//   b: 42
//   result undefined
// }

// var g = function test(a, b) { 
//   var result = a + b;
//   console.log(a, b); 
//   console.log(this);
//   console.log(arguments);   
// };
// g.call(123); // this === 123
// g.call(123, 1 , 2); // this === 123 a === 1 b === 2
// g.apply(123, [1 , 2, 3]); // this === 123 a === 1 b === 2


// var g = function test(a, b) { 
//   // this = {} при вызове через new создается объект 
//   var result = a + b;
//   console.log(a, b); 
//   console.log(this);
//   console.log(arguments);  
//   // return this возвращает this этого объекта
// };
// console.log(new g(1, 2))

// Статическая переменная
// function f() {
//   var count = 0;
//   count++;
//   console.log(count)
// };
// f(); // 1
// f(); // 1

// Статическая переменная через замыкание
// function f() {
//   // запускается только один раз здесь *
//   var count = 0;
//   return function(){
//     return count++;
//   }
  
// };
// var g = f(); // *
// console.log(g()) // 1 
// console.log(g()) // 2

// или так
// var g = (function f() {
//   var count = 0;
//   return function() {
//     return count++;
//   }
// })();
// console.log(g()) // 1 
// console.log(g()) // 2

// var g = (function f() {
//   var count = 0;
//   return function() {
//     console.log(count++) // 1 
//     return count++;
//   }
// })();
// console.log(g); // интересный результат
// console.log(g());
// console.log(g());
// console.log(g());

// Статическая переменная через свойство
// function g() {
//   return g.count++;
// };  
// g.count = 0; 
// console.log(g());
// console.log(g());
// console.log(g.count);  
// через свойство функции можно вызвать отовсюду

// Псевдо аргументы arguments функции
// function go(a, b) {
//   console.log(arguments.length);
//   console.log(arguments);
//   console.log(arguments[4]);
//   console.log(a, b)
// };
// // go(1) // a = 1 b = undefind
// go(1, 2, 3, 4, 5) // a = 1 b = 2 как получить третий аргумент

// Перебор arguments 
// function f() {
//   for (var i = 0; i < arguments.length; i++) {
//     console.log('i = ' + arguments[i]);
//   };
// };
// f(4, 3, 2, 1);

// Копирование объектов
// function copy(dst) {
//   for (var i = 1; i < arguments.length; i++) {
//     var obj = arguments[i];
//     for (var key in obj) {
//       dst[key] = obj[key];
//     }
//   }
//   return dst;
// };


// var user = {
//   firstname: 'Serj',
//   surname: 'Tele'
// };

// var admin = {
//   admin: true
// };

// // применение 
// copy(user, admin);
// // копирование в пустой объект
// var clone = copy({}, user);

// факториал через NFE
// var f = function(n) {
//   return n > 1 ? (n * n - 1) : n; 
// };

// var g = f;
// f = null;
// g(5);

// Именнование аргументы
// function war(width, height, title, contents, yesno) {
//   width = width || 200;
//   height = height || 200;
//   title = 'Warning';
// };
// war(null, null, null, null, null) // неразбериха

// function warnings(options) {
//   var width = options.width || 200;
//   var height = options.height || 200;
//   var title = options.title || 'Warning';
// };

// var options = {
//   title: 'okey',
//   contents: 'good',
//   width: 400
// };

// warning(options);
// options.width = 500;

                                  // Методы объектов

// var user = {
//   name: 'Serj',
//   sayHi: function() {
//     alert('Hi, ' + user.name); // если измениться user будет ошибка
//     alert('Hi, ' + this.name); // this ссылка на объект в котором вызвана-запущена функция
//     alert('Hi, ' + showName(this)); // функция объявлена снаружи, но вызвана внутри объекта
//   }
// };

// function showName(object) {
//   return object.name;
// }

// user.sayHi();

                                // Конструкторы new

// function User(name) {
//   // this = {} new создаёт пустой объект
//   this.name = name;
//   this.sayHi = function() {
//     alert('Hi, ' + this.name);
//   };

//   // без return возвращает это объект в конструкторах не ставят
//   // return может быть, но если он возвращает не объект он игнорируется
// };

// var serj = new User('Serj');
// var serj = new User('Kate');
// var arr = [new User('Serj'), new User('Kate')]; 
// serj.sayHi();

// Приватные переменные и методы
// чтобы закрыть доступ держим данные в переменных
// function User(name) {

//   var pass;
//   var age;
//   function request() {
//     // функция не будет доступна снаружи
//   }

//   this.getName = function() { // функция геттер
//     return name;
//   };
//   this.setName = function(newName) { // функция для смены имени
//     name = newName;
//   };  
//   this.sayHi = function() {
//     alert('Hi, ' + name);
//   };
// };

// var serj = new User('Serj');
// serj.setName('vasya'),
// serj.getName(); // можно получить name но нельзя изменить
// serj.sayHi(); 

// Контекст this 
// function User(name) {
//   this.name = name;
// };

// function sayHi(name) {
//   alert(this.name);
// };

// var serj = new User('Serj');
// serj.sayHi = sayHi // без вызова. Просто передаём ссылку на функцию
// serj.sayHi(); // alert Serj. вызов через точку 
// serj['sayHi'](); // alert Serj тоже самое

// function User(name) {
//   this.name = name;
// };

// function sayHi(name) {
//   alert(this.name);
// };

// var serj = new User('Serj');
// var kate = new User('Kate');

// serj.sayHi = kate.sayHi = sayHi;
// serj.sayHi();
// kate['sayHi']();


                          // Явный this. call and apply
/*
var user = {
  surname: 'tele',
  name: 'serj',
  patronymic: 'val'
};

function showName() {
  console.log(this.name + ' ' + this.surname);
};

user.showName = showName; // первый способ
user.showName();

showName.call(user); // второй способ. this объекта и аргументы
*/

/*
var user = {
  surname: 'tele',
  name: 'serj',
  patronymic: 'val'
};

function showName(first, last) {
  console.log(this[first] + ' ' + this[last]);
};

showName.call(user, 'name', 'patronymic');
showName.call(user, 'name', 'surname'); // кол-во аргументов фиксировано
showName.apply(user, ['name', 'surname']); // тоже самое но сколько угодно аргументов
*/

// Одолживание метода
/*
function show() {
  arguments.join = [].join;
  var arg = arguments.join(':');
  console.log(arg);
};

show(1, 2, 3, 4, 5);
*/

/*
var obj = { // обычный объект с числовыми индексами и length
  0: "А",
  1: "Б",
  2: "В",
  length: 3
};

obj.join = [].join;
alert( obj.join(';') ); // "A;Б;В"
*/

// Одалживание метода c call к произвольному массиву!!! 
// вариант работает только с массивом а должен с объектом
// todo
/*
var obj = ['a', 'б', 'в'];

function show(obj) { 
  return [].join.call(obj, ';');
};

console.log(show(obj));
*/

// Вызов метода без копирования
/*
function printArgs() {
  var join = [].join; // скопируем ссылку на функцию в переменную

  // вызовем join с this=arguments,
  // этот вызов эквивалентен arguments.join(':') из примера выше
  var argStr = join.call(arguments, ':');

  alert( argStr ); // сработает и выведет 1:2:3
}

printArgs(1, 2, 3);
*/

// Создание полноценного массива из аргументов
/*
function printArgs() {
  // вызов arr.slice() скопирует все элементы из this в новый массив
  var args = [].slice.call(arguments);
  alert( args.join(', ') ); // args - полноценный массив из аргументов
}

printArgs('Привет', 'мой', 'мир'); // Привет, мой, мир
*/

// Получить максимум из элементов arr при помощи apply
/*
var arr = [];
arr.push(1);
arr.push(5);
arr.push(2);

// Получить максимум из элементов arr
alert( Math.max.apply(null, arr) ); // 5
*/

// function show() {
//   var args = [].slice.call(arguments)
//   var argStr = [].join.call(arguments, ';');
//   console.log(args.join('-'));
// };
// show(1, 2, 3, 4, 5);

// Перенаправление вызовов
/*
function AdminUser(first, last) {

  User.call(this, first, last); // передаём функции ее же this 

  this.edit = function() { // дополнительные ф-ции для админа 
    alert('test passed!')
  }
};

function User(first, last) {

  this.first = first;
  this.last = last;

  this.sayHi = function() {
    alert('Hi, ' + this.first + ' ' + this.last);
  };
};

var serj = new User('Serj', 'Tele');
serj.sayHi(); 

var admin = new AdminUser('Admin', 'God');
admin.sayHi();
admin.edit();
*/

                          // Преобразование типов для объектов

/*
var room = {
  number: 777,

  valueOf: function() {
    return this.number;
  },
  toString: function() {
    return 'Комната номер ' + this.number + ' жильцы: ...'
  }
};

alert(room) // общая информация стандартное преобразование stringOf
alert(+room) // преобразование к числу
*/


                            // Статические и фабричные методы

// Методы и свойства, которые не привязаны к конкретному экземпляру объекта,
// называют «статическими». Их записывают прямо в саму функцию-конструктор.

//Поиска самого раннего журнала из массива:
/*
function Journal(date) {
  this.date = date;

  this.formatDate = function(date) {
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  };

  this.getTitle = function() {
    return "Выпуск от " + this.formatDate(this.date);
  };

}

Journal.compare = function(journalA, journalB) {
  return journalA.date - journalB.date;
};

// использование:
var journals = [
  new Journal(new Date(2012, 1, 1)),
  new Journal(new Date(2012, 0, 1)),
  new Journal(new Date(2011, 11, 1))
];

function findMin(journals) {
  var min = 0;
  for (var i = 0; i < journals.length; i++) {
    // используем статический метод
    if (Journal.compare(journals[min], journals[i]) > 0) min = i;
  }
  return journals[min];
}

alert( findMin(journals).getTitle() );
*/

/*
function User() {
  this.sayHi = function() {
    alert(this.name)
  };
}

User.createAnonymous = function() {
  var user = new User;
  user.name = 'Аноним';
  return user;
}

User.createFromData = function(userData) {
  var user = new User;
  user.name = userData.name;
  user.age = userData.age;
  return user;
}

// Использование
var guest = User.createAnonymous();
guest.sayHi(); // Аноним

var knownUser = User.createFromData({
  name: 'Вася',
  age: 25
});
knownUser.sayHi(); // Вася
*/

/*
function Article() {
  Article.count++;
}
Article.count = 0; // статическое свойство-переменная
Article.DEFAULT_FORMAT = "html"; // статическое свойство-константа
*/

// Счетчик объектов
/*
function Article() {
  this.created = new Date();
  Article.count++;
  Article.last = this.created;
};

Article.showStats = function() {
  console.log('count = ' + this.count + ' date = ' + this.last)
}

Article.count = 0;

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)
*/

// Явное указание this: "call", "apply"
/*
var user = {
  firstName: "Василий",
  surname: "Петров",
  patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
  alert( this[firstPart] + " " + this[lastPart] );
}

// f.call(контекст, аргумент1, аргумент2, ...)
showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
showFullName.call(user, 'firstName', 'patronym') // "Василий Иванович"
*/

// Копировани метода с помощью call
/*
function printArgs() {
  var join = [].join; // скопируем ссылку на функцию в переменную

  // вызовем join с this=arguments,
  // этот вызов эквивалентен arguments.join(':') из примера выше
  var argStr = join.call(arguments, ':');

  alert( argStr ); // сработает и выведет 1:2:3
}
printArgs(1, 2, 3);
*/

// Создание из arguments полноценного массива
/*
function printArgs() {
  // вызов arr.slice() скопирует все элементы из this в новый массив
  var args = [].slice.call(arguments);
  alert( args.join(', ') ); // args - полноценный массив из аргументов
}

printArgs('Привет', 'мой', 'мир'); // Привет, мой, мир
*/

// Перепишите суммирование аргументов
// Копирование в arguments
/*
function sumArgs() {
  arguments.reduce = [].reduce;
  return arguments.reduce(function(a, b) {
    return a + b;
  });
}
alert( sumArgs(1, 2, 3) )
*/

// Запустить из массива напрямую
/*
function sumArgs() {
  // запустим reduce из массива напрямую
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}
alert( sumArgs(4, 5, 6) ); // 15
*/

// Применить функцию к аргументам
/*
function applyAll(fn) {
  return fn.apply(null, [].slice.call(arguments, 1));
  // [1,2,3].slice(1) == [2,3]
  // argument.slice(1)
  // arguments.slice = [].slice
  //
};
alert( applyAll(Math.max, 10, -2, 3) ); // 3
*/

                                                    // Декораторы

// Проблема с setTimeout первое решение
/*
var petya = {
  name: 'Petya',
  sayHi: function() {
    console.log('Hi, my name is ' + this.name)
  }
};

var wrap = function() {
  petya.sayHi();
}

petya.sayHi();

setTimeout(wrap, 3000); // делает this для wrap window
// если после вызова сделать petya = null будет ошибка
*/

// Проблема с setTimeout второе решение

/*
var petya = {
  name: 'Petya',
  sayHi: function() {
    console.log('Hi, my name is ' + this.name)
  }
};

function createWrapper() {
  var user = petya; // сохраняем в замыкании petya
  console.log('outter');

  return function() {
    console.log('inner');
    user.sayHi();
  };
}
petya.sayHi();

var wrap = createWrapper(); // вызываем функцию 
setTimeout(wrap, 3000);

petya = null;
*/

// Сокращем код
/*
var petya = {
  name: 'Petya',
  sayHi: function() {
    console.log('Hi, my name is ' + this.name)
  }
};

function createWrapper(user) {
  var f = user.sayHi;

  return function() {
    f.call(user);
    // user.sayHi.call(user) тоже самое что 
  };
}
petya.sayHi();

var wrap = createWrapper(petya); // вызываем функцию 

setTimeout(wrap, 3000);

petya = null;
*/

// Финалочка c аргументами
/*
var petya = {
  name: 'Petya',
  sayHi: function(a, b, c) {
    console.log(this);
    //console.log('Hi, my name is ' + this.name + a + b + c);
    return 42
  }
};

function createWrapper(f, context) {

  return function() {
    // console.log('FUCK!') // можно добавить дополнительные действия для ф-ции или
    // if (hasAcces) return f.apply(context, arguments); // или проверять все функции
    return f.apply(context, arguments); // не теряем аргументы из начальной функции
  };
}

var wrap = createWrapper(petya.sayHi, petya); // вызываем функцию 
var wrap1 = createWrapper(petya.sayHi, 123); 
var wrap2 = createWrapper(petya.sayHi, null); 
var wrap3 = createWrapper(petya.sayHi, {}); 

wrap(1, 2, 3);
wrap1(1);
wrap2(1, 2, 3, null);
wrap3();
*/

// Финалочка c bind
/*
function logThis() {
  console.log(this);
};

var petya = {
  name: 'Petya'
};

petya.logThis = logThis.bind(petya);
petya.logThis();
*/

// Другой тип декораторов
/*
function doubleDecorator(f) {
  return function() {
    return 2 * f.apply(this, arguments);
  };
};

function sum(a, b) {
  return a + b;
};

var sum = doubleDecorator(sum)

console.log(sum(1, 2));
*/

/*
function check(f) {
  return function() {
    if (isAdmin()) {
      return f.apply(this, arguments);
    }
    alert('Denied')
  }
}
*/

// Привязать всё: bindAll
// Если у объекта много методов и мы планируем их активно передавать, 
// то можно привязать контекст для них всех в цикле:
/*
for (var prop in user) {
  if (typeof user[prop] == 'function') {
    user[prop] = user[prop].bind(user);
  }
}
*/

// double умножает только на два
/*
var double = mul.bind(null, 2); // контекст фиксируем null, он не используется

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10
*/

// Функция ask для задач
/*
function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}
*/

            // Задачи к привязка контекста и карринг: "bind"

// Кросс-браузерная эмуляция bind
/*
function bind(func, context) {                // +args
  var bindArgs = [].slice.call(arguments, 2); // срезаем аргументы после
                                              // функции и контекста в массив
  console.log(bindArgs); 
  function wrapper() {                        // обертка
    var args = [].slice.call(arguments);      // срезаем все аргументы при вызове
    console.log(args);                        // функции 
    var unshiftArgs = bindArgs.concat(args);  // соединяем все аргументы ф-ции
    console.log(unshiftArgs);  
    return func.apply(context, unshiftArgs);  // возвращаем 
  }
  return wrapper;                             // возвращаем обертку
}
var obj = {
  f: function() {
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });; 
  }   
}
// console.log(obj.f(1, 2));
console.log(bind(obj.f, obj, 3, 2)(3, 2, 4));
*/

// Запись в объект после bind
/*
function f() {
  alert( this );
}
var user = {
  g: f.bind("Hello")
}
user.g(); // Hello
*/

// Повторный bind
/*
function f() {
  alert(this.name);
}
f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
f(); // Вася

function f() {
  alert(this.name);
}

f = bind(f, {name: "Вася"} ); // (1)
f = bind(f, {name: "Петя"} ); // (2)

function bind(fn, context) {
  return function() {
    return f.apply(Вася)
  }
}
function bind2(bind, context) {
  return function() {
    return bind.apply(Петя)
  }
}

bind(f, user);
*/

// Свойство функции после bind
/*
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;
alert( sayHi.test ); // 5
console.log(sayHi)

var bound = sayHi.bind({
  name: "Вася"
});
alert( bound.test ); // undefined обертка над оберткой.
*/

// Использование функции вопросов
/*
function ask(question, answer, ok, fail) {
  console.log(this);
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
};

var user = {
  login: 'Василий',
  password: '12345',

  loginOk: function() {
    console.log(this)
    alert( this.login + ' вошёл в сайт' );
  },

  loginFail: function() {
    console.log(this)
    alert( this.login + ': ошибка входа' );
  },
  // Решение с bind

  checkPassword: function() {
    // console.log(this);
    ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }

  // Решение с замыканием
  checkPassword: function() {
    var context = this;
    ask("Ваш пароль?", this.password,
      function() {
        context.loginOk();
      },
      function() {
        context.loginFail();
      }
    );
  }  
};

var vasya = user;
user = null;
vasya.checkPassword();
*/

// Использование функции вопросов с каррингом

/*
function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginDone: function(result) {
    console.log(this)
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  // вариант с замыканием
  // checkPassword: function() {
  //   var context = this;
  //   ask("Ваш пароль?", this.password,
  //     function() {
  //       context.loginDone(true);
  //     },
  //     function() {
  //       context.loginDone(false);
  //     }
  //   );
  // }

  // вариант с bind
  // checkPassword: function() {

  //   ask("Ваш пароль?", this.password,
  //       this.loginDone.bind(this, true),
  //       this.loginDone.bind(this, false),
  //   );
  // }
};

var vasya = user;
user = null;
vasya.checkPassword();
*/

                                // Функции-обёртки, декораторы
                             
/*
var timers = {};

// прибавит время выполнения f к таймеру timers[timer]
function timingDecorator(f, timer) {
  return function() {
    var start = performance.now();
    console.log(start)
    var result = f.apply(this, arguments); // (*)

    if (!timers[timer]) timers[timer] = 0;
    timers[timer] += performance.now() - start;
    console.log(timers)
    return result;
  }
}

// функция может быть произвольной, например такой:
var fibonacci = function f(n) {
  return (n > 2) ? f(n - 1) + f(n - 2) : 1;
}

// использование: завернём fibonacci в декоратор
fibonacci = timingDecorator(fibonacci, "fibo");

// неоднократные вызовы...
alert( fibonacci(10) ); // 55
alert( fibonacci(20) ); // 6765
// ...

// в любой момент можно получить общее количество времени на вызовы
alert( timers.fibo + 'мс' );
*/


// Декоратор для проверки типа
/*
function checkNumber(value) {
  return typeof value == 'number';
}
// второй аргумент checks - массив с функциями для проверки
function typeCheck(f, checks) {
  return function() { // здесь будут аргументы функции
    for (var i = 0; i < arguments.length; i++) {
      if (!checks[i](arguments[i])) {
        console.log( "Некорректный тип аргумента номер " + i );
        return;
      }
    }
    return f.apply(this, arguments);
  }
}

function sum(a, b) {
  return a + b;
}
// обернём декоратор для проверки
sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа
// пользуемся функцией как обычно
console.log( sum(1, 2) ); // 3, верно
sum(true, null); // некорректный аргумент номер 0
sum(1, ["array", "in", "sum?!?"], 2); // некорректный аргумент номер 1
*/

// Декоратор проверки доступа
/*
function checkPermissionDecorator(f) {
  return function() {
    if (isAdmin()) {
      return f.apply(this, arguments);
    }
    alert( 'Недостаточно прав' );
  };
};
function save() { ... }
save = checkPermissionDecorator(save);
// вызов функции save() проверяет права
*/

// Логирующий декоратор (1 аргумент)
/*
function work(a) {
  return a;
}

function makeLogging(f, log) {
  return function() {
    log.push(arguments[0]);
    return f.apply(this, arguments);
  }
}

var log = [];
work = makeLogging(work, log);  

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log
console.log(log);
for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
*/

// Логирующий декоратор (много аргументов)
/*
function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {
  return function() {
    // одалживание метода 
    log.push([].slice.call(arguments));
    return f.apply(this, arguments);
  }
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

console.log(log);

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
*/

// Кеширующий декоратор 
// todo
/*
function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {

  var arg = null;
  var value = null;

  return function(x) {
    console.log('arg = ' + arg + ' x = ' + x);

    if ( arg === null ) {
      value = f.call(this, x);
      arg = x;
      return value
    } else if (arg == x ) {
      // var value = f.call(this, x);
      return value
    }
    return;
  }
  // решение из учебника
  // function makeCaching(f) {
  // var cache = {};
  // return function(x) {
  //   if (!(x in cache)) {
  //     cache[x] = f.call(this, x);
  //   }
  //   return cache[x];
  //   };
  // }
}

f = makeCaching(f);
var a, b;
a = f(1);
console.log(a);
b = f(1);
console.log(b);
alert( a == b ); // true (значение закешировано)
b = f(2);
alert( a == b ); // false, другой аргумент => другое значение
console.log(b);
*/

                              // Задача из реальной жизни

// используем как метод объекта
/*
var order = {
  deliveryPrice: 100,
  items: [
    {price: 10},
    {price: 20},
    {price: 30},
    {price: 40},
  ],
  getPrice: function(discount = 0) { // значение по умолчанию
    console.log(this, arguments) // для дебагинга
    var itemsTotalPrice = 0;

    this.items.forEach(function(item) {
      itemsTotalPrice += item.price;
    });

    return itemsTotalPrice + this.deliveryPrice - discount;
  }
}

console.log(order.getPrice(12));
*/

// делаем DEBUG для функции. а если их много делаем отдельну. нкцию
/*
var DEBUG = true;

function _log(logName, context, args) { 
  console.log(context, args)
};

function wrapWithLogging(oldFunction) {

  return function() { // (*) 1, 2, 3 а надо сюда (**)
    if (DEBUG) {
      _log('sumArgs', this, arguments); 
    }
    oldFunction(); // (**)
  };
}

alert = wrapWithLogging(alert); 
alert(1, 2, 3);  // в таком виде аргументы попадают (*)


function sumArgs() {
  if (DEBUG) {
    _log('sumArgs', this, context)
  };
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
}

function getTotalPrice(discount = 0) { // выносим функцию отдельно
  if (DEBUG) {
    _log('getTotalPrice', this, context)
  };
  var itemsTotalPrice = 0;

  this.items.forEach(function(item) {
    itemsTotalPrice += item.price;
  });

  return itemsTotalPrice + this.deliveryPrice - discount;
}

var order = {
  deliveryPrice: 100,
  items: [
    {price: 10},
    {price: 20},
    {price: 30},
    {price: 40},
  ],
  getPrice: getTotalPrice // сохраняем ссылку на функцию
}

console.log(order.getPrice(12));
*/

// Декоратор
/*
var DEBUG = true;

var order = {
  deliveryPrice: 100,
  items: [
    {price: 10},
    {price: 20},
    {price: 30},
    {price: 40},
  ],
  getPrice: getTotalPrice
}

function _log(logName, context, args) { 
  console.log(logName, context, args)
};

function sumArgs() {

  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function wrapWithLogging(oldFunction, funcName) {

  return function() {
    if (DEBUG) {
      _log(funcName, this, arguments); 
    }
    return oldFunction.apply(this, arguments); 
  };
}

function getTotalPrice(discount = 0) {

  var itemsTotalPrice = 0;

  this.items.forEach(function(item) {
    itemsTotalPrice += item.price;
  });

  return itemsTotalPrice + this.deliveryPrice - discount;
}

if (DEBUG) { // так можно прятать на боевом сервере
  sumArgs = wrapWithLogging(sumArgs, 'sumArgs');
  order.getPrice = wrapWithLogging(order.getPrice, 'order.getPrice');
}

console.log(order.getPrice(20));
console.log(sumArgs(1, 2, 3, 4));
*/

// Одалживание метода
/*
function sumArgs() { // можно так function sumArgs(...args) === args[a, b, c]
  var sum = 0;
  // arguments.slice(); не сработает
  // [].slice() // делаем копию пустого массива ()

  // [].slice.call(arguments) // запускаем для arguments. 
  // значеие перед точкой становится не [] а псевдомассив arguments
  // запускаем по другому
  
  // var args = [].slice.call(arguments);
  // или так 
  // arguments.slice = [].slice; // записываем в arguments метод slice
  // var args = argument.slice()

  // предпочтительный вариант такой и можно использовать forEach
  var args = [].slice.call(arguments);

  args.forEach(function(args) { // args функции видны только в функции
    sum += args;
  })
  console.log(args)
  return sum;
};

console.log(sumArgs(1, 2, 3));
*/

                            // ООП в функциональном стиле

// Добавить метод и свойство кофеварке stop
/*
function CoffeeMachine(power) {

  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getBoilTime() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
  };

  // первое решение
  this.run = function() {
    this.timerId = setTimeout(onReady, getBoilTime.call(this));
  };

  // второе решение
  // var getBoilTime = function() {
  //   return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  // }.bind(this);

  // третье решение
  // var self = this;
  // function getBoilTime() {
  //   return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  // };

  function onReady() {
    alert( 'Кофе готов!' );
  };

  this.stop = function() {
    clearTimeout(this.timerId);
  };
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();

coffeeMachine.stop();

console.log(coffeeMachine);
*/

// Написать объект с геттерами и сеттерами
/*
function User() {
  var firstName, surname;

  this.setFirstName = function(str) {
    firstName = str;
  };
  this.setSurname = function(str) {
    surname = str;
  };

  this.getFullName = function() {
    return firstName + ' ' + surname;
  };
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов
*/

// Добавить геттер для power
/*
function CoffeeMachine(power, capacity) {

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

  this.getPowerValue = function() {
    return power;
  }

}
var coffee = new CoffeeMachine(100, 200);
console.log(coffee.getPowerValue());
*/

// Добавить публичный метод кофеварке
/*
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  };

  this.addWater = function(value) {
    waterAmount += value;
    return this.setWaterAmount()
  };

  this.setWaterAmount = function(amount = 0) {

    var currentValue = waterAmount + amount;
    
    if (currentValue <= 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (currentValue > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = currentValue;
    console.log(currentValue);
  };

  function onReady() {
    alert( 'Кофе готов!' );
  };

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

};

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(100);
coffeeMachine.addWater(100);
coffeeMachine.addWater(100); // Нельзя залить больше, чем 400
coffeeMachine.setWaterAmount(100)
coffeeMachine.addWater(100);
coffeeMachine.run();
*/

// Создать сеттер для onReady 
// todo

// Добавить метод isRunning
// todo

                      // Повторение реальные примеры
// Получение query параметры
/*
function parseQueryString(query) {
  var params = {};
  var parts = query.split('&');
  // parts = ['a=1', 'b=2', 'c=3']

  parts.forEach(function(part) {
    var temp = part.split('=');
    //temp = ['a', '1']

    params[temp[0]] = temp[1];
    // params['a'] = '1'
    console.log(temp);
  });

  console.log(params);
  return params;
};

console.log(location.search);

parseQueryString(location.search.slice(1));
*/

// Сумма выбранных элементов объектов в массиве
// todo поправить 
/*
var arr = [
    {
      price: 100,
      selected: true
    },
    {
      price: 200,
      selected: true
    },
    {
      price: 300,
      selected: true
    },
    {
      price: 400,
      selected: true
    },
    {
      price: 400,
    }
];
var totalPriceItems = arr
  .filter(
    function(item) {
      return item.selected
    })
  .map(
    function(item) {
      return item.price
    })
  .reduce(
    function(a, b) {
      return a + b;
    }, 0);
console.dir(totalPriceItems)
*/

// Декоратор с задержкой вызова ф-ции
/*
function wrapWithDelay(f, delay) {
  var isDelay = false;

  return function() {

    if (isDelay) {
      return;
    }

    f.apply(this, arguments);

    isDelay = true;

    setTimeout(function() {
      isDelay = false
    }, delay)
  }
};

console.log = wrapWithDelay(console.log, 3000);
console.log(1);
console.log(2);
console.log(3);

setTimeout(function() {
  console.log(4);
}, 3100);
*/
                              // ООП в прототипном стиле
                              // Прототип объекта

// проверка нахождения свойства в объекте, а не в прототипе
// for (var key in obj) {
//   if (!obj.hasOwnProperty(key)) continue; // пропустить "не свои" свойства
//   alert( key + " = " + obj[key] ); // выводит только "jumps"
// }

// Чему равно свойство после delete?
/*
var animal = {
  jumps: null
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
alert( rabbit.jumps ); // true
delete rabbit.jumps;
alert( rabbit.jumps ); // null
delete animal.jumps;
alert( rabbit.jumps ); // undefined
*/                       

// Прототип и this
/*
var animal = {
  eat: function() {
    this.full = true;
  }
};
var rabbit = {
  __proto__: animal
  // full = true
};

rabbit.eat();
*/

// Алгоритм для поиска
/*
var head = {
  glasses: 1,
  //__proto__: pockets,
  // не сработает head.money == 2000
  // из-за порядка присвоения
};

var table = {
  pen: 3,
  __proto__: head,
};

var bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

var pockets = {
  money: 2000,
  __proto__: bed,
};
console.log();
*/

                // Свойство F.prototype и создание объектов через new

// Прототип после создания
/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();
Rabbit.prototype = {};
alert( rabbit.eats ); // true

var rabbit = new Rabbit();
Rabbit.prototype.eats = false; 
alert( rabbit.eats ); // false

var rabbit = new Rabbit();
delete rabbit.eats; // (*)
alert( rabbit.eats ); // true

var rabbit = new Rabbit();
delete Rabbit.prototype.eats; // (*)
alert( rabbit.eats ); // undefined
*/

// Аргументы по умолчанию
/*
function Menu(options) {
  options = Object.create(options);
  options.width = 300;

  alert("width: " + options.width); // возьмёт width из наследника
  alert("height: " + options.height); // возьмёт height из исходного объекта
}

var options = {
  width: 100,
  height: 200
};

var menu = new Menu(options);

alert("original width: " + options.width); // width исходного объекта
alert("original height: " + options.height); // height исходного объекта

// var Menu = new createMenu({width: 100});
console.log(menu);
*/

// Есть ли разница между вызовами?
/*
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
};

var rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); 
// Rabbit this перед точкой
Rabbit.prototype.sayHi(); 
// undefined this не перед точкой
Object.getPrototypeOf(rabbit).sayHi(); 
// undefined this не перед точкой
rabbit.__proto__.sayHi(); 
// undefined this не перед точкой
*/

// Создать объект тем же конструктором
/*
var obj = new Obj();
var obj2 = new obj.constructor();
// при условии не изменения prototype
// либо четкого присвоения constructor
*/

                              // Встроенные "классы" в JavaScript

// Вызов методов через call и apply из прототипа
// function showList() {
//   alert( [].join.call(arguments, " - ") );
//   alert( Array.prototype.join.call(arguments, " - ") );
// }
// showList("Вася", "Паша", "Маша"); // Вася - Паша - Маша


// Добавить функциям defer откладывает вызов на ms
/*
function f(ms) {
  alert( "привет" );
};
function d(ms) {
  alert( "пока" );
};
Function.prototype.defer = function(ms) {
  return setTimeout(this, ms);
};

f.defer(1000)
d.defer(4000)
*/

// Добавить функциям defer с аргументами
/*
function f(a, b) {
  alert( a + b );
}
var obj = {
  a: 10,
  b: 10,
  g: function(a, b) {
    alert(this.a + this.b);
  },
}

Function.prototype.defer = function(ms) {
  var context = this;

  return function() { // 1, 2
    var args = arguments;
    console.log(args)
    console.log(context)
    console.log(ms)
    var g = setTimeout(function() {
      context.apply(context, args)
    }, ms)
    return g;
  }
};
var f = obj.g;
f.defer(2000)(1, 2)

// f.defer(2000)(1, 2); // выведет 3 через 1 секунду.
// d.defer(2000)(2, 2);
// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// function f() {
//   alert( "привет" );
// }
// f
// Object.prototype.defer(func)
// f.defer(1000); // выведет "привет" через 1 секунду
*/

                              // Свои классы на прототипах

// Перепишите в виде класса
/*
function CoffeeMachine(power) {
  this._power = power; 
  this._waterAmount = 0;
  this._WATER_HEAT_CAPACITY = 4200;

};
CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype._getTimeToBoil = function() {
  return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.run = function() {
  setTimeout(function() {
      alert( 'Кофе готов!' );
    }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
*/

// Хомяки с __proto__
/*
function Hamster() {
  this.food = [];
};
Hamster.prototype.food = new Array(); // пустой "живот"

Hamster.prototype.found = function(something) {
  this.food.push(something);
};
// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 2 (!??)
*/


                              // Наследование классов в JavaScript

//Структура наследования полностью:
// --------- Класс-Родитель ------------
// Конструктор родителя пишет свойства конкретного объекта
// function Animal(name) {
//   this.name = name;
//   this.speed = 0;
// }
// // Методы хранятся в прототипе
// Animal.prototype.run = function() {
//   alert(this.name + " бежит!")
// }
// // --------- Класс-потомок -----------
// // Конструктор потомка
// function Rabbit(name) {
//   Animal.apply(this, arguments);
// }
// // Унаследовать
// Rabbit.prototype = Object.create(Animal.prototype);
// // Желательно и constructor сохранить
// Rabbit.prototype.constructor = Rabbit;
// // Методы потомка
// Rabbit.prototype.run = function() {
//   // Вызов метода родителя внутри своего
//   Animal.prototype.run.apply(this);
//   alert( this.name + " подпрыгивает!" );
// };
// // Готово, можно создавать объекты
// var rabbit = new Rabbit('Кроль');
// rabbit.run();
// alert( rabbit instanceof Rabbit ); // true


// Найдите ошибку в наследовании
/*
function Animal(name) {
  this.name = name;
}
Animal.prototype.walk = function() {
  alert( "ходит " + this.name );
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = Animal.prototype; // ошибка
// Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.walk = function() {
  alert( "прыгает! и ходит: " + this.name );
};

var rabbit = new Rabbit('rabbit');
rabbit.walk();
*/

// В чём ошибка в наследовании
/*
function Animal(name) {
  this.name = name;

  this.walk = function() { // переделать для прототипа
    alert( "ходит " + this.name );
  };
};

// Animal.prototype.walk = function() {
//    alert( "ходит " + this.name );
// };

function Rabbit(name) {
  Animal.apply(this, arguments);
}
Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.walk = function() {
  alert( "прыгает " + this.name );
};

var rabbit = new Rabbit("Кроль");
rabbit.walk();
*/

// Класс "часы"
// todo

// Класс "расширенные часы"
// todo

// Меню с таймером для анимации
// todo

// Что содержит constructor?
/*
function Animal() {}
function Rabbit() {}

Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();
console.dir(rabbit)
alert( rabbit.constructor == Rabbit ); // что выведет?
// false 
*/

                        // Проверка класса: "instanceof"

// obj instanceof Constructor:
// obj.__proto__ с Constructor.prototype

// function Rabbit() {}
// var rabbit = new Rabbit();
// // проверяем -- этот объект создан Rabbit?
// alert( rabbit instanceof Rabbit ); // true, верно
// // (rabbit.__proto == Rabbit.prototype)
// console.log(Rabbit.prototype);

// Что выведет instanceof?
/*
function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

alert( rabbit instanceof Rabbit ); // true
alert( rabbit instanceof Animal ); // true
alert( rabbit instanceof Object ); // true
*/

                  // Свои ошибки, наследование от Error

// function PropertyError(property) {
//   Error.call(this, property) ;
//   this.name = "PropertyError";

//   this.property = property;
//   this.message = "Ошибка в свойстве " + property;

//   if (Error.captureStackTrace) {
//     Error.captureStackTrace(this, PropertyError);
//   } else {
//     this.stack = (new Error()).stack;
//   }

// }

// PropertyError.prototype = Object.create(Error.prototype);

                    // Прототипное наследование

// В старом стандарте
/*
function Animal() {;
  this.age = 0;

  setInterval(this._getOlder.bind(this), 1000);
};

Animal.prototype.constructor = Animal;
Animal.prototype.canEat = true,
Animal.prototype._getOlder = function() {
  this.age++;
}

function Rabbit(name) {
  Animal.call(this) // запустили конструктор this будет petya
  // в данном случае __proto__ не меняется 

  this.name = name; 
};

Rabbit.prototype = {
  __proto__: Animal.prototype,

  // правильный старый варинат
  // Rabbit.prototype = Object.create(Animal.prototype);
  // Rabbit.prototype.constructor = Rabbit

  canJump: true,

  jump: function() {
    console.log(`${this.name} is jumping`);
  },

  // старение для Rabbit c дополнением
  _getOlder: function() {
    Animal.prototype._getOlder.call(this);
    console.log(`${this.name} got ${this.age}`);
  }

};

var petya = new Rabbit('Petya');
console.dir(petya);
*/


                  // Современные возможности ES-2015

// В новом стандарте 
/*
class Animal {
  constructor() { // объявление нового метода
    this.age = 0;
    this._canEat = true; // придется записывать не в прототип
    // а в конструктор или делать геттер
    // get canEat() { return true;}
    // console.log(animal.canEat) без скобочек для вызова
    setInterval(this._getOlder.bind(this), 1000);
  }
  _getOlder() {
    this.age++;
  }
  static createSuperAnimal() { // статический метод
    let superAnimal = new Animal();
    superAnimal.getOlder = null; // не стареет
  }
};

let superAnimal = createSuperAnimal() // создали

class Rabbit extend Animal { // наследование
  constructor() {
    super(); // вызов конструктора ссылка на родителя Animal
    this.name = name;
    this.canJump = true;
  }
  jump() {
    console.log(`${this.name} is jumping`);
  }
  _getOlder() {
    // Animal.prototype._getOlder.call(this);
    super._getOlder(); // super передаёт this текущий объект
    console.log(`${this.name} got ${this.age}`);
  }
};

var petya = new Rabbit('Petya');
console.dir(petya);
*/
          
                // Переменные в новом стандарте
// let a = 1;
// const b = 3

// let sum = (a, b) => {
//   // LE = {
//   //  пустой!
//   // }
//   console.log(this);
//   return a + b;
// };
// var sum = function(a, b) {
//  // LE = {
    // this:..., arguments = []
//  // }
//   console.log(this, arguments);
//   return a + b;
// };
// sum(1, 2);


// Функции-стрелки
// let user = {
//   name: 'Ivan',
//   sayLater() {
//     // this === user
//     // arguments === [1, 2, 3]

//     setTimeout( () => {
//       console.log(this, arguments)
//     }, 1000); // своего this нет, берет из замыкания
//   }
// }
// user.sayLater(1, 2, 3);

// В старом формате
// var fullName = 'Ivan Ivanov';
// var parts = fullName.split(' ');
// var firstName = parts[0];
// var lastName = parts[1];
// console.log(firstName + ' '+ lastName);

// В новом формате
// var fullName = 'Ivan Ivanov 1 2 3 4';
// let [firstName, lastName,  ...numbers] = fullName.split(' ');
// console.log([firstName, lastName,  ...numbers]);
// console.log(numbers); // создать массив 
// console.log(...numbers); // вернуть через запятую

// let f = (a, ...args) => {
//   console.log(a, args);
// };
// f(10, 1, 2, 3)


                          // Документ и объекты страницы
                          // Дерево DOM
// Задачи
/*  
<html>
<head>
  <script>
    alert( document.body ); // null
  </script>
</head>
<body>
  Привет, мир!
</body>
</html>
*/

                          // Навигация по DOM-элементам

// Методы массива 1
// var elems = document.documentElement.childNodes;
// [].forEach.call(elems, function(elem) {
//   alert( elem ); // HEAD, текст, BODY
// });                          

// Метод массива 2
// var elems = document.documentElement.childNodes;
// elems = Array.prototype.slice.call(elems); // теперь elems - массив

// elems.forEach(function(elem) {
//   alert( elem.tagName ); // HEAD, текст, BODY
// });

// Задачи
// DOM children
/*
document.documentElement.children[0]; // или document.head
document.body.children[1];
document.body.children[1].children[1];
*/

// Проверка существования детей
/*
if (!elem.childNodes.length) { ... }
if (!elem.firstChild) { ... }
if (!elem.lastChild) { ... }
*/

// Вопрос по навигационным ссылкам
/*
elem.lastChild.nextSibling // null
Верно ли, что elem.children[0].previousSibling // не всегда null может быть текст
*/

// Выделите ячейки по диагонали
/*
var table = document.body.children[0];
[].forEach.call(table.rows, function(row, index) {
  row.cells[index].style.backgroundColor = 'red'; // row === table.rows
});
*/

                  // Поиск: getElement* и querySelector*

// <div id="content">Выделим этот элемент</div>
// <script>
//   var elem = document.getElementById('content');
//   elem.style.background = 'red';
//   alert( elem == content ); // true
//   content.style.background = ""; // один и тот же элемент
// </script>

// // получить все div-элементы
// var elements = document.getElementsByTagName('div');

// // получить все элементы документа
// document.getElementsByTagName('*');
// // получить всех потомков элемента elem:
// elem.getElementsByTagName('*');
// document.getElementsByTagName('input')[0].value = 5;

// var elems = document.getElementsByName('age');

// <div class="article">Статья</div>
// <div class="long article">Длинная статья</div>
// <script>
//   var articles = document.getElementsByClassName('article');
//   alert( articles.length ); // 2, найдёт оба элемента
// </script>

// <ul>
//   <li>Этот</li>
//   <li>тест</li>
// </ul>
// <ul>
//   <li>полностью</li>
//   <li>пройден</li>
// </ul>
// <script>
//   var elements = document.querySelectorAll('ul > li:last-child');
//   for (var i = 0; i < elements.length; i++) {
//     alert( elements[i].innerHTML ); // "тест", "пройден"
//   }
// </script>

// <a href="http://example.com/file.zip">...</a>
// <a href="http://ya.ru">...</a>

// <script>
//   var elems = document.body.children;
//   for (var i = 0; i < elems.length; i++) {
//     if (elems[i].matches('a[href$="zip"]')) {
//       alert( "Ссылка на архив: " + elems[i].href );
//     }
//   }
// </script

// getElementById  id  - везде
// getElementsByName name  - везде
// getElementsByTagName  тег или '*' ✔ везде
// getElementsByClassName  классу  ✔ кроме IE8-
// querySelector CSS-селектор  ✔ везде
// querySelectorAll  CSS-селектор  ✔ везде

// Задачи
// Поиск элементов
/*
document.getElementById('age-table').getElementsByTagName('label');
document.querySelector('#age-table td');
document.getElementsByName('search-person')[0];
document.querySelector('form[name="search"]');
document.querySelector('form[name="search"] input');
document.getElementsByName("info[0]")[0];
document.querySelector('form[name="search-person"] [name="info[0]"]');
*/

// Дерево
/*
var elem = document.querySelectorAll('li');
for (var i = 0; i < elem.length; i++) {
  var value = elem[i].getElementsByTagName('li')
  console.log(elem[i].firstChild.data.trim().replace(/\r?\n/g, "")
+ ' ' + value.length);
};
*/

// Оптимизация перебора цикла DOM'a загнать length в переменную
// for (var i = 0, length = elements.length; i < length ; i++) {
//   var input = elements[i];
//   alert( input.value + ': ' + input.checked );
// }

                // Свойства узлов: тип, тег и содержимое

// Задачи
// Что выведет код? 
/*
<!DOCTYPE HTML>
<html>

<body>
  <script>
    alert( document.body.lastChild.nodeType ); // 1
  </script>
</body>

</html>
*/

//Тег в комментарии
/*
<script>
  var body = document.body;
  body.innerHTML = "<!--" + body.tagName + "-->";
  alert( body.firstChild.data ); // BODY
</script>
*/
  
        // Внутреннее устройство поисковых методов

// Задачи
// Длина коллекции после удаления элементов
/*
<ul id="menu">
  <li>Главная страница</li>
  <li>Форум</li>
  <li>Магазин</li>
</ul>

var lis = document.body.getElementsByTagName('li');
document.body.innerHTML = "";
alert( lis.length ); // 0

var menu = document.getElementById('menu');
var lis = menu.getElementsByTagName('li');
document.body.innerHTML = "";
alert( lis.length ); // 3 поиск в переменной
*/

// Сравнение количества элементов
/*
var aList1 = document.getElementsByTagName('a'); // 3
var aList2 = document.querySelectorAll('a');     // 3
// <a href=#></a>
aList1 // 4
aList2 // 3
*/

// Бенчмаркинг методов поиска в DOM
// todo

                // Атрибуты и DOM-свойства

// Устанавливает атрибуты                
// <body>
//   <div id="elem" about="Elephant"></div>
//   <script>
//     alert( elem.getAttribute('About') ); // (1) 'Elephant', атрибут получен
//     elem.setAttribute('Test', 123); // (2) атрибут Test установлен
//     alert( document.body.innerHTML ); // (3) в HTML видны все атрибуты!
//     var attrs = elem.attributes; // (4) можно получить коллекцию атрибутов
//     for (var i = 0; i < attrs.length; i++) {
//       alert( attrs[i].name + " = " + attrs[i].value );
//     }
//   </script>
// </body>

// <a id="a" href="#"></a>
// <script>
//   a.href = '/';
//   alert( 'атрибут:' + a.getAttribute('href') ); // '/'
//   alert( 'свойство:' + a.href );  // полный URL
// </script>

// <input id="input" type="checkbox" checked>
// <script>
//   // работа с checked через атрибут
//   alert( input.getAttribute('checked') ); // пустая строка
//   input.removeAttribute('checked'); // снять галочку
//   // работа с checked через свойство
//   alert( input.checked ); // false <-- может быть только true/false
//   input.checked = true; // поставить галочку (при этом атрибут в элементе не появится)
// </script>

// <img id="img" href="test">
// <a id="link" alt="test"></a>

// <script>
//   alert( img.href ); // undefined
//   alert( link.alt ); // undefined
// </script>

// <div id="elem" data-about="Elephant" data-user-location="street">
//   По улице прошёлся слон. Весьма красив и толст был он.
// </div>
// <script>
//   alert( elem.getAttribute('data-about') ); // Elephant
//   alert( elem.getAttribute('data-user-location') ); // street
//   alert( elem.dataset.about ); // Elephant
//   alert( elem.dataset.userLocation ); // street
//   data-user-location трансформировалось в dataset.userLocation
// </script>

// Полифилл для атрибута hidden
// <style>
//   [hidden] { display: none }
// </style>

// <script>
//   if (document.documentElement.hidden === undefined) {
//     Object.defineProperty(Element.prototype, "hidden", {
//       set: function(value) {
//         this.setAttribute('hidden', value);
//       },
//       get: function() {
//         return this.getAttribute('hidden');
//       }
//     });
//   }
// </script>
// <div>Текст</div>
// <div hidden>С атрибутом hidden</div>
// <div id="last">Со свойством hidden</div>

// <script>
//   last.hidden = true;
// </script>

// Задачи
// Получите пользовательский атрибут
/*
<body>
  <div id="widget" data-widget-name="menu">Выберите жанр</div>
  <script>
    var div = document.getElementById('widget');
    var divAttr = div.getAttribute('data-widget-name');
    var divAttr2 = div.dataset.widgetName;
    console.log(divAttr);
  </script>
</body>
*/

// Поставьте класс ссылкам
/*
var a = document.querySelectorAll('a');

for (var i = 0; i < a.length; i++) {
  var attr = a[i].getAttribute('href');
  var prop = a[i].href;

  if (!attr) continue;
  if (attr.indexOf('://') == -1) continue;
  if (attr.indexOf('http://internal.com') === 0) continue;

  a[i].classList.add('external');

  console.log('attr ' + a[i].getAttribute('href'));
  console.log('prop ' + a[i].href);
}
*/

        // Методы contains и compareDocumentPosition 
// var result = parent.contains(child);

        // Добавление и удаление узлов

// Создание и вставка элемента
// var div = document.createElement('div');
// div.className = "alert alert-success";
// div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";
// document.body.appendChild(div);

// Глубокое клонирование
// // создать копию узла
// var div2 = div.cloneNode(true);
// // копию можно подправить
// div2.querySelector('strong').innerHTML = 'Супер!';
// // вставим её после текущего сообщения
// div.parentNode.insertBefore(div2, div.nextSibling);

// Поменять местами
// var first = document.body.children[0];
// var last = document.body.children[1];

// Удалить сообщение
// setTimeout(function() {
//   div.parentNode.removeChild(div);
// }, 1000);
// или так
// setTimeout(function() {
//   div.remove();
// }, 2000);

// Текстовые узлы для вставки текста
// var div = document.createElement('div');
// div.className = "alert alert-success";
// document.body.appendChild(div);
// var text = prompt("Введите текст для сообщения", "Жили были <a> и <b>!");
// // вставится именно как текст, без HTML-обработки
// div.appendChild(document.createTextNode(text));

// Задачи
// createTextNode vs innerHTML
/*
elem.appendChild(document.createTextNode(text)); // вставит HTML
elem.innerHTML = text; // интерпретирует теги как текст
*/

// Удаление элементов полифил
/*
Element.prototype.remove = function remove() {
  if (this.parentNode) {
    this.parentNode.removeChild(this);
  }
}
var elem = document.body.children[0];
elem.remove();
*/

// Функцию insertAfter(elem, refElem)
/*
var elem = document.createElement('div');
elem.innerHTML = '<b>Новый элемент</b>';

function insertAfter(elem, refElem) {
  var nextNode = refElem.nextSibling;
  var parent = refElem.parentNode;
  var insert = parent.insertBefore(elem, nextNode)
  return parent.insertBefore(elem, nextNode);
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

var body = document.body;

// вставить elem после первого элемента
insertAfter(elem, body.firstChild); // <--- должно работать

// вставить elem за последним элементом
insertAfter(elem, body.lastChild); // <--- должно работать
*/

// Функция removeChildren
/*
function removeChildren(elem) {
  elem.innerHTML = '';
}
removeChildren(table); // очищает таблицу
removeChildren(ol); // очищает список
*/
// С поддержкой IE8 + второй вариант
/*
function removeChildren(elem) {
  try {
    elem.innerHTML = '';
  } catch (e) {
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
  }
}
*/

// Создать список (ul создасться автоматом)
/*
function addLi() {
  var textLi = prompt('Add text to list', '');

  if (textLi !== null) {
    var li = document.createElement('li');
    li.textContent = textLi;
    document.appendChild(li);
    return addLi();
  };
};
addLi();
*/

// Создайте дерево из объекта
// todo
/*
var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

// Первый вариант
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

    var childrenUl = createTreeDom(obj[key]);
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

// Второй вариант
function createTree(container, obj) {
  container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // отдельная рекурсивная функция
  var li = '';
  for (var key in obj) {
    li += '<li>' + key + createTreeText(obj[key]) + '</li>';
  }
  if (li) {
    var ul = '<ul>' + li + '</ul>'
  }
  return ul || '';
};
var container = document.getElementById('container');
createTree(container, data); // создаёт
*/

// Календарь
/*
function createCalendar(id, year, month) {
  var elem = document.getElementById(id);

  var mon = month - 1;
  var d = new Date(year, mon);

  var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  for (var i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) {
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (var i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';
  elem.innerHTML = table;
}

function getDay(date) {
  var day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar("calendar", 2012, 9)
*/

// Дерево
/*
var lis = document.getElementsByTagName('li');

for (i = 0; i < lis.length; i++) {
  var childCount = lis[i].getElementsByTagName('li').length;
  if (!childCount) continue;
  lis[i].firstChild.data += ' [' + childCount + ']';
}
*/
                    // Полифиллы

// Полифилл для matches
/*
for (var i = 0; i < list.children.length; i++) {
  if (list.children[i].matches('li[class="second"]')) {
    console.log(list.children[i].className + ' gotcha!')
  }
}
// Обернуть в сразу выполняющуюся ф-цию
if (document.documentElement.matches === undefined) {
  Element.prototype.matches = Element.prototype.matchesSelector ||
  Element.prototype.webkitMatchesSelector ||
  Element.prototype.mozMatchesSelector ||
  Element.prototype.msMatchesSelector;
}
*/

// Полифилл для closest
/*
(function() {
  if (!Element.prototype.closest) {

    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();
*/

// Полифилл для textContent
/*
(function() {
  if (document.documentElement.textContent === undefined) {

    Object.defineProperty(HTMLElement.prototype, "textContent", {
      get: function() {
        return this.innerText;
      },
      set: function(str) {
        this.innerText = str;
      }
    });
  }
})();
*/

// Часы на js
/*
function update() {
  var clock = document.getElementById('clock');

  var date = new Date(); // (*)

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  var minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  var seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}
*/

// Аттрибуты и DOM свойства

// <style>
//   .order[order-state="new"] {color: green;}
//   .order[order-state="pending"] {color: blue;}
//   .order[order-state="canceled"] {color: red;}
// </style>

// <div class="order" order-state="new">
//   Новый заказ.
// </div>
// <div class="order" order-state="pending">
//   Ожидающий заказ.
// </div>
// <div class="order" order-state="canceled">
//   Заказ отменён.
// </div>

// <script>
//   div.setAttribute('order-state', 'canceled');
// </script>


          // Мультивставка: insertAdjacentHTML и DocumentFragment

// Вставьте элементы в конец списка
/*
var ul = document.body.children[0];
ul.insertAdjacentHTML("beforeEnd", "<li>3</li><li>4</li><li>5</li>");
*/

// Отсортировать таблицу