"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var test = new _promise["default"](function (resolve, reject) {
  console.log('1231233');
  resolve('123');
});
console.log(test);