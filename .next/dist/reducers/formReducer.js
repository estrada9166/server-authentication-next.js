'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.INPUT_VALUE:
      return (0, _extends3.default)({}, state, (0, _defineProperty3.default)({}, action.title, (0, _extends3.default)({}, state[action.title], (0, _defineProperty3.default)({}, action.name, action.val))));
    case _constants.LOGGED_IN:
      return initialState;
    default:
      return state;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2Zvcm1SZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIklOUFVUX1ZBTFVFIiwiTE9HR0VEX0lOIiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidGl0bGUiLCJuYW1lIiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBVCxBQUFzQixBQUF0Qjs7OztBQUVBLElBQU0sZUFBZSxBQUFyQixBQUVBOztrQkFBZSxZQUFrQztNQUFqQyxBQUFpQyw0RUFBekIsQUFBeUI7TUFBWCxBQUFXLG1CQUMvQzs7VUFBUSxPQUFPLEFBQWYsQUFDRTtBQUFLLEFBQUwsQUFDRTt3Q0FBWSxBQUFaLHlDQUNHLE9BQU8sQUFEVixrQ0FFTyxNQUFNLE9BQU8sQUFBYixBQUZQLDBDQUdLLE9BQU8sQUFIWixNQUdtQixPQUFPLEFBSDFCLEFBTUY7QUFBSyxBQUFMLEFBQ0U7YUFBTyxBQUFQLEFBQ0Y7QUFDRTthQUFPLEFBQVAsQUFYSixBQWFEOztBQWREIiwiZmlsZSI6ImZvcm1SZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGVqYW5kcm9lc3RyYWRhL0RvY3VtZW50cy9Db2RlL3BydWViYXMvYXV0aGVudGljYXRpb24tSldUIn0=