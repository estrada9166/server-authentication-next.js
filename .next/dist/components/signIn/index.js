'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _SignLogo = require('../utils/SignLogo');

var _SignLogo2 = _interopRequireDefault(_SignLogo);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/pruebas/authentication-JWT/components/signIn/index.js';


var Main = function (_Component) {
  (0, _inherits3.default)(Main, _Component);

  function Main() {
    (0, _classCallCheck3.default)(this, Main);

    return (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).apply(this, arguments));
  }

  (0, _createClass3.default)(Main, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (nextProps.signReducer.token) {
        document.location.pathname = '/profile';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Sign In'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), _react2.default.createElement('div', { style: { marginTop: '200px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 4, lgOffset: 2, style: { borderRight: '2px solid #ccc', height: '350px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_SignLogo2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })), _react2.default.createElement(_reactBootstrap.Col, { lg: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_Form2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }))));
    }
  }]);

  return Main;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var signReducer = _ref.signReducer;

  return {
    signReducer: signReducer
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Main);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lnbkluL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIkNvbCIsImNvbm5lY3QiLCJMb2dvIiwiRm9ybSIsIk1haW4iLCJuZXh0UHJvcHMiLCJzaWduUmVkdWNlciIsInRva2VuIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibWFyZ2luVG9wIiwiYm9yZGVyUmlnaHQiLCJoZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0lBRUQsQTs7Ozs7Ozs7Ozs7d0NBQ2lCLEEsV0FBVyxBQUM5QjtVQUFJLFVBQUEsQUFBVSxZQUFkLEFBQTBCLE9BQU8sQUFDL0I7aUJBQUEsQUFBUyxTQUFULEFBQWtCLFdBQWxCLEFBQTZCLEFBQzlCO0FBQ0Y7Ozs7NkJBRVMsQUFDUjs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxvREFBTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtvQkFBNUI7c0JBSEosQUFDRSxBQUVFLEFBRUY7QUFGRTsyQkFFRixjQUFBLFNBQUssT0FBTyxFQUFFLFdBQWQsQUFBWSxBQUFhO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyxxQ0FBSSxJQUFMLEFBQVMsR0FBRyxVQUFaLEFBQXNCLEdBQUcsT0FBTyxFQUFFLGFBQUYsQUFBZSxrQkFBa0IsUUFBakUsQUFBZ0MsQUFBeUM7b0JBQXpFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFO0FBQUEsMkJBRUYsQUFBQyxxQ0FBSSxJQUFMLEFBQVM7b0JBQVQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQVhSLEFBQ0UsQUFLRSxBQUlFLEFBQ0UsQUFLVDtBQUxTO0FBQUE7Ozs7O0FBbkJPLEE7O0FBMkJuQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixzQkFBcUI7TUFBbEIsQUFBa0IsbUJBQWxCLEFBQWtCLEFBQzNDOzs7aUJBQUEsQUFBTyxBQUdSO0FBSFEsQUFDTDtBQUZKLEFBTUE7O2tCQUFlLHlCQUFBLEFBQVEsaUJBQXZCLEFBQWUsQUFBeUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZWphbmRyb2VzdHJhZGEvRG9jdW1lbnRzL0NvZGUvcHJ1ZWJhcy9hdXRoZW50aWNhdGlvbi1KV1QifQ==