"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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