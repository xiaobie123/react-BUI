'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: #1FB6FF;\n  border: none;\n  border-radius: 2px;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  font-weight: 200;\n  margin: 8px 0;\n  outline: none;\n  padding: ', ';\n  width: ', ';\n  text-transform: uppercase;\n  transition: all 300ms ease;\n  &:hover {\n    background: #009EEB;\n  }\n'], ['\n  background: #1FB6FF;\n  border: none;\n  border-radius: 2px;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  font-weight: 200;\n  margin: 8px 0;\n  outline: none;\n  padding: ', ';\n  width: ', ';\n  text-transform: uppercase;\n  transition: all 300ms ease;\n  &:hover {\n    background: #009EEB;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var buttonSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    padding: '0 8px'
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 12px'
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    padding: '0 16px'
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 36px'
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 72px'
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 8px'
  }
};
function setDisplay(_ref) {
  var size = _ref.size;

  return size === 'fullWidth' ? 'block' : 'inline-block';
}
function setWidth(_ref2) {
  var size = _ref2.size;

  return size === 'fullWidth' ? '100%' : 'initial';
}
var Button = _styledComponents2.default.button(_templateObject, setDisplay, function (_ref3) {
  var size = _ref3.size;
  return buttonSizes[size]['font-size'];
}, function (_ref4) {
  var size = _ref4.size;
  return buttonSizes[size]['line-height'];
}, function (_ref5) {
  var size = _ref5.size;
  return buttonSizes[size]['padding'];
}, setWidth);
exports.default = Button;