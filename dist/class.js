"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Boo =
/*#__PURE__*/
function () {
  function Boo(age) {
    _classCallCheck(this, Boo);

    this.age = age;
    this._name = 'lys';
  }

  _createClass(Boo, [{
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