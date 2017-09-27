'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _signReducer = require('./signReducer');

var _signReducer2 = _interopRequireDefault(_signReducer);

var _formReducer = require('./formReducer');

var _formReducer2 = _interopRequireDefault(_formReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  signReducer: _signReducer2.default,
  formReducer: _formReducer2.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInNpZ25SZWR1Y2VyIiwiZm9ybVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU8sQUFFUDs7Ozs7OztBQUErQixBQUU3QjtBQUZGLEFBQWUsQUFBZ0I7QUFBQSxBQUM3QixDQURhIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGVqYW5kcm9lc3RyYWRhL0RvY3VtZW50cy9Db2RlL3BydWViYXMvYXV0aGVudGljYXRpb24tSldUIn0=