'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIiwicmVkdWNlciIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQVMsQUFBVCxBQUFzQixBQUF0Qjs7QUFDQSxBQUFPLEFBQVA7Ozs7QUFDQSxBQUFPLEFBQVAsQUFFQTs7Ozs7O0FBQU8sSUFBTSxnQ0FBWSxTQUFaLEFBQVksWUFBdUI7TUFBdEIsQUFBc0IsbUZBQVAsQUFBTyxBQUM5Qzs7U0FBTyxBQUFZLEFBQVosNENBQXFCLEFBQXJCLGNBQW1DLEFBQWdCLEFBQWhCLEFBQW5DLEFBQVAsQUFDRDtBQUZNIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGVqYW5kcm9lc3RyYWRhL0RvY3VtZW50cy9Db2RlL3BydWViYXMvYXV0aGVudGljYXRpb24tSldUIn0=