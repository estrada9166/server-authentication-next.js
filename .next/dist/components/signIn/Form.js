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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../../actions');

var _SignForm = require('../utils/SignForm');

var _SignForm2 = _interopRequireDefault(_SignForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/pruebas/authentication-JWT/components/signIn/Form.js';


var Form = function (_Component) {
  (0, _inherits3.default)(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call.apply(_ref, [this].concat(args))), _this), _this.logIn = function () {
      var _this$props$formReduc = _this.props.formReducer.logIn,
          email = _this$props$formReduc.email,
          password = _this$props$formReduc.password;
      var logIn = _this.props.logIn;

      var re = /\S+@\S+\.\S+/;
      if (re.test(email)) {
        logIn(email, password);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Form, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '40px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 12, style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Sign In')), _react2.default.createElement(_SignForm2.default, { title: 'logIn', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_reactBootstrap.Col, { lg: 12, style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_reactBootstrap.Button, { type: 'submit', bsStyle: 'info', onClick: this.logIn, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Sign In')), _react2.default.createElement(_reactBootstrap.Col, { lg: 12, style: { marginTop: '20px', textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_link2.default, { href: '/signUp', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Sign up'))))));
    }
  }]);

  return Form;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var formReducer = _ref2.formReducer;

  return {
    formReducer: formReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logIn: (0, _redux.bindActionCreators)(_actions.logIn, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Form);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lnbkluL0Zvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMaW5rIiwiQ29sIiwiUm93IiwiQnV0dG9uIiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImxvZ0luIiwiU2lnbkZvcm0iLCJGb3JtIiwicHJvcHMiLCJmb3JtUmVkdWNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyZSIsInRlc3QiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFLLEFBQUs7O0FBQ25CLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU87Ozs7Ozs7OztJQUVELEE7Ozs7Ozs7Ozs7Ozs7O3dNLEFBQ0osUUFBUSxZQUFNO2tDQUNnQixNQUFBLEFBQUssTUFBTCxBQUFXLFlBRDNCLEFBQ3VDO1VBRHZDLEFBQ0osOEJBREksQUFDSjtVQURJLEFBQ0csaUNBREgsQUFDRztVQURILEFBRUosUUFBVSxNQUZOLEFBRVcsTUFGWCxBQUVKLEFBQ1I7O1VBQU0sS0FBTixBQUFXLEFBQ1g7VUFBSSxHQUFBLEFBQUcsS0FBUCxBQUFJLEFBQVEsUUFBUSxBQUNsQjtjQUFBLEFBQU0sT0FBTixBQUFhLEFBQ2Q7QUFDRjtBOzs7Ozs2QkFFUyxBQUNSOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxxQ0FBSSxPQUFPLEVBQUUsV0FBZCxBQUFZLEFBQWE7b0JBQXpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHFDQUFJLElBQUwsQUFBUztvQkFBVDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyxxQ0FBSSxJQUFMLEFBQVMsSUFBSSxPQUFPLEVBQUUsV0FBdEIsQUFBb0IsQUFBYTtvQkFBakM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUVGLDZCQUFBLEFBQUMsb0NBQVMsT0FBVixBQUFnQjtvQkFBaEI7c0JBSkYsQUFJRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyxxQ0FBSSxJQUFMLEFBQVMsSUFBSSxPQUFPLEVBQUUsV0FBdEIsQUFBb0IsQUFBYTtvQkFBakM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsd0NBQU8sTUFBUixBQUFhLFVBQVMsU0FBdEIsQUFBOEIsUUFBTyxTQUFTLEtBQTlDLEFBQW1EO29CQUFuRDtzQkFBQTtBQUFBO1NBTkosQUFLRSxBQUNFLEFBSUYsNkJBQUEsQUFBQyxxQ0FBSSxJQUFMLEFBQVMsSUFBSSxPQUFPLEVBQUUsV0FBRixBQUFhLFFBQVEsV0FBekMsQUFBb0IsQUFBZ0M7b0JBQXBEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUFxQjtBQUFyQjt5QkFBcUIsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBZC9CLEFBQ0UsQUFDRSxBQUNFLEFBVUUsQUFDRSxBQUFxQixBQU1oQzs7Ozs7QUEvQmdCLEE7O0FBa0NuQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBcUI7TUFBbEIsQUFBa0Isb0JBQWxCLEFBQWtCLEFBQzNDOzs7aUJBQUEsQUFBTyxBQUdSO0FBSFEsQUFDTDtBQUZKOztBQU1BLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFZLEFBQ3JDOztXQUNTLEFBQW1CLCtDQUQ1QixBQUFPLEFBQ0UsQUFBMEIsQUFFcEM7QUFIUSxBQUNMO0FBRkosQUFNQTs7a0JBQWUseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBeEMsQUFBZSxBQUE2QyIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGVqYW5kcm9lc3RyYWRhL0RvY3VtZW50cy9Db2RlL3BydWViYXMvYXV0aGVudGljYXRpb24tSldUIn0=