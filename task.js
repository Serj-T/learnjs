'use strict';

let allModels = {};

function createModel(Model, ...args) {
  let model = new Model(...args);
  model._id = Math.random().toString(36).slice(2);
  allModels[model._id] = model;

  return model;
}




let user = createModel(class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}, "Зуенф");



user.sayHi(); // Вася

alert( allModels[user._id].name ); // Вася