"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

var _class = _interopRequireDefault(require("./class.js"));

// import "core-js/stable";
// import "regenerator-runtime/runtime";
var test = new Promise(function (resolve, reject) {
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