"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _class = _interopRequireDefault(require("./class.js"));

// import "core-js/stable";
// import "regenerator-runtime/runtime";
var test = new _promise["default"](function (resolve, reject) {
  console.log('1231233');
  resolve('123');
});
console.log(test);

var fun1 = function fun1(params) {
  if (params) {
    console.log(params);
  }
};

fun1('a');
var t1 = new _class["default"]('liuyongsheng');
console.log(t1.age);