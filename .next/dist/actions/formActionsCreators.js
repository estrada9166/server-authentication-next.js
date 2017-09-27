'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputChange = undefined;

var _constants = require('../constants');

var inputChange = exports.inputChange = function inputChange(title, name, val) {
  return function (dispatch) {
    return dispatch({ type: _constants.INPUT_VALUE, title: title, name: name, val: val });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvZm9ybUFjdGlvbnNDcmVhdG9ycy5qcyJdLCJuYW1lcyI6WyJJTlBVVF9WQUxVRSIsImlucHV0Q2hhbmdlIiwidGl0bGUiLCJuYW1lIiwidmFsIiwiZGlzcGF0Y2giLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBUyxBQUFULEFBRUE7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsWUFBQyxBQUFELE9BQVEsQUFBUixNQUFjLEFBQWQsS0FBQTtTQUFzQixvQkFBWSxBQUMzRDtXQUFPLFNBQVMsRUFBRSxBQUFNLEFBQVIsOEJBQXFCLE9BQXJCLE9BQTRCLE1BQTVCLE1BQWtDLEtBQWxDLEFBQVQsQUFBUCxBQUNEO0FBRjBCO0FBQXBCIiwiZmlsZSI6ImZvcm1BY3Rpb25zQ3JlYXRvcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZWphbmRyb2VzdHJhZGEvRG9jdW1lbnRzL0NvZGUvcHJ1ZWJhcy9hdXRoZW50aWNhdGlvbi1KV1QifQ==