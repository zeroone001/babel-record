"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

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

var Boo =
/*#__PURE__*/
function () {
  function Boo() {
    (0, _classCallCheck2["default"])(this, Boo);
    this.a = 1;
  }

  (0, _createClass2["default"])(Boo, [{
    key: "get",
    value: function get() {
      console.log('1243');
    }
  }, {
    key: "set",
    value: function set() {
      console.log('eqwew');
    }
  }]);
  return Boo;
}();