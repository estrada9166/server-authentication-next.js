'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jwt = require('jsonwebtoken');

var createJWT = function createJWT(token) {
  return jwt.sign({
    token: token
  }, 'secret account key');
};

var user = [];

var AuthService = function () {
  function AuthService() {
    (0, _classCallCheck3.default)(this, AuthService);

    user.push({
      name: 'Demo',
      email: 'demo@demo.com',
      password: 'demo',
      token: createJWT(123456789)
    });
  }

  (0, _createClass3.default)(AuthService, [{
    key: 'logIn',
    value: function logIn(email, password) {
      for (var i = 0; i < user.length; i++) {
        if (email === user[i].email) {
          return password === user[i].password ? user[i].token : false;
        }
      }
      return false;
    }
  }, {
    key: 'createUser',
    value: function createUser(name, email, password) {
      var token = createJWT('Demo');
      user.push({
        name: name,
        email: email,
        password: password,
        token: token
      });
      return token;
    }
  }]);

  return AuthService;
}();

exports.default = AuthService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvQXV0aFNlcnZpY2UuanMiXSwibmFtZXMiOlsiand0IiwicmVxdWlyZSIsImNyZWF0ZUpXVCIsInNpZ24iLCJ0b2tlbiIsInVzZXIiLCJBdXRoU2VydmljZSIsInB1c2giLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU4sQUFBWTs7QUFFWixJQUFNLFlBQVksU0FBWixBQUFZLGlCQUFTLEFBQ3pCO2FBQU8sQUFBSTtXQUFKLEFBQVM7QUFBQSxBQUNkLEdBREssRUFBUCxBQUFPLEFBRUosQUFDSjtBQUpEOztBQU1BLElBQU0sT0FBTixBQUFhOztJQUVRLEEsMEJBQ25CO3lCQUFlO3dDQUNiOztTQUFBLEFBQUs7WUFBSyxBQUNGLEFBQ047YUFGUSxBQUVELEFBQ1A7Z0JBSFEsQUFHRSxBQUNWO2FBQU8sVUFKVCxBQUFVLEFBSUQsQUFBVSxBQUVwQjtBQU5XLEFBQ1I7Ozs7OzBCLEFBT0csTyxBQUFPLFVBQVUsQUFDdEI7V0FBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQUksS0FBcEIsQUFBeUIsUUFBekIsQUFBaUMsS0FBSyxBQUNwQztZQUFJLFVBQVUsS0FBQSxBQUFLLEdBQW5CLEFBQXNCLE9BQU8sQUFDM0I7aUJBQU8sYUFBYSxLQUFBLEFBQUssR0FBbEIsQUFBcUIsV0FBVyxLQUFBLEFBQUssR0FBckMsQUFBd0MsUUFBL0MsQUFBdUQsQUFDeEQ7QUFDRjtBQUNEO2FBQUEsQUFBTyxBQUNSOzs7OytCLEFBRVcsTUFBTSxBLE8sQUFBTyxVQUFVLEFBQ2pDO1VBQU0sUUFBUSxVQUFkLEFBQWMsQUFBVSxBQUN4QjtXQUFBLEFBQUs7Y0FBSyxBQUVSO2VBRlEsQUFHUjtrQkFIUSxBQUlSO2VBSkYsQUFBVSxBQU1WO0FBTlUsQUFDUjthQUtGLEFBQU8sQUFDUjs7Ozs7OztrQkE1QmtCLEEiLCJmaWxlIjoiQXV0aFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZWphbmRyb2VzdHJhZGEvRG9jdW1lbnRzL0NvZGUvcHJ1ZWJhcy9hdXRoZW50aWNhdGlvbi1KV1QifQ==