'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.logIn = undefined;

var _constants = require('../constants');

var _AuthService = require('../auth/AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = new _AuthService2.default();

var logIn = exports.logIn = function logIn(email, password) {
  return function (dispatch) {
    var token = Auth.logIn(email, password);
    if (token) {
      document.cookie = 'id_token=' + token + '; expires=Thu, 18 Dec 2020 12:00:00 UTC';
      dispatch({ type: _constants.LOGGED_IN, token: token });
    }
  };
};

var createUser = exports.createUser = function createUser(name, email, password) {
  return function (dispatch) {
    var token = Auth.createUser(name, email, password);
    if (token) {
      document.cookie = 'id_token=' + token + '; expires=Thu, 18 Dec 2020 12:00:00 UTC';
      dispatch({ type: _constants.LOGGED_IN, token: token });
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvc2lnbkFjdGlvbnNDcmVhdG9ycy5qcyJdLCJuYW1lcyI6WyJMT0dHRURfSU4iLCJBdXRoU2VydmljZSIsIkF1dGgiLCJsb2dJbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ0b2tlbiIsImRvY3VtZW50IiwiY29va2llIiwiZGlzcGF0Y2giLCJ0eXBlIiwiY3JlYXRlVXNlciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFTLEFBQVQ7O0FBRUEsQUFBTyxBQUFQOzs7Ozs7QUFDQSxJQUFNLE9BQU8sQUFBSSxBQUFKLEFBQWIsQUFFQTs7QUFBTyxJQUFNLHdCQUFRLFNBQVIsQUFBUSxNQUFDLEFBQUQsT0FBUSxBQUFSLFVBQUE7U0FBcUIsb0JBQVksQUFDcEQ7UUFBTSxRQUFRLEtBQUssQUFBTCxNQUFXLEFBQVgsT0FBa0IsQUFBbEIsQUFBZCxBQUNBO1FBQUksQUFBSixPQUFXLEFBQ1Q7ZUFBUyxBQUFULHVCQUE4QixBQUE5QixRQUNBO2VBQVMsRUFBRSxBQUFNLEFBQVIsNEJBQW1CLE9BQW5CLEFBQVQsQUFDRDtBQUNGO0FBTm9CO0FBQWQsQUFRUDs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxXQUFDLEFBQUQsTUFBTyxBQUFQLE9BQWMsQUFBZCxVQUFBO1NBQTJCLG9CQUFZLEFBQy9EO1FBQU0sUUFBUSxLQUFLLEFBQUwsV0FBZ0IsQUFBaEIsTUFBc0IsQUFBdEIsT0FBNkIsQUFBN0IsQUFBZCxBQUNBO1FBQUksQUFBSixPQUFXLEFBQ1Q7ZUFBUyxBQUFULHVCQUE4QixBQUE5QixRQUNBO2VBQVMsRUFBRSxBQUFNLEFBQVIsNEJBQW1CLE9BQW5CLEFBQVQsQUFDRDtBQUNGO0FBTnlCO0FBQW5CIiwiZmlsZSI6InNpZ25BY3Rpb25zQ3JlYXRvcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZWphbmRyb2VzdHJhZGEvRG9jdW1lbnRzL0NvZGUvcHJ1ZWJhcy9hdXRoZW50aWNhdGlvbi1KV1QifQ==