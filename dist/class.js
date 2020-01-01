"use strict";

<<<<<<< HEAD
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
=======
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
>>>>>>> 8943b064ac3864998e3f3a125b306ae291914fa5

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Boo =
/*#__PURE__*/
function () {
  function Boo(age) {
    (0, _classCallCheck2["default"])(this, Boo);
    this.age = age;
    this._name = 'lys';
  }

  (0, _createClass2["default"])(Boo, [{
    key: "look",
    value: function look() {}
  }, {
    key: "name",
    get: function get() {
      console.log('1243');
      return this._name;
    },
    set: function set(name) {
      console.log('eqwew', name);
      this._name = name;
    }
  }]);
  return Boo;
}();

exports["default"] = Boo;