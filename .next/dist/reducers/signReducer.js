'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  token: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.LOGGED_IN:
      return (0, _assign2.default)({}, state, { token: action.token });
    default:
      return state;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3NpZ25SZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIkxPR0dFRF9JTiIsImluaXRpYWxTdGF0ZSIsInRva2VuIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUVULElBQU07U0FBTixBQUFxQixBQUNaLEFBR1Q7QUFKcUIsQUFDbkI7O2tCQUdhLFlBQWtDO01BQWpDLEFBQWlDLDRFQUF6QixBQUF5QjtNQUFYLEFBQVcsbUJBQy9DOztVQUFRLE9BQVIsQUFBZSxBQUNiO0FBQUEsQUFBSyxBQUNIO2FBQU8sc0JBQUEsQUFBYyxJQUFkLEFBQWtCLE9BQU8sRUFBQyxPQUFPLE9BQXhDLEFBQU8sQUFBeUIsQUFBZSxBQUNqRDtBQUNFO2FBSkosQUFJSSxBQUFPLEFBRVo7O0FBUEQiLCJmaWxlIjoic2lnblJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZWphbmRyb2VzdHJhZGEvRG9jdW1lbnRzL0NvZGUvcHJ1ZWJhcy9hdXRoZW50aWNhdGlvbi1KV1QifQ==