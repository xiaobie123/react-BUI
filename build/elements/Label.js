'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  display: inline-block;\n  font-size: ', ';\n  line-height: ', ';\n  font-weight: ', ';\n  margin: 8px 0;\n  text-transform: ', ';\n  transition: all 300ms ease;\n'], ['\n  color: ', ';\n  display: inline-block;\n  font-size: ', ';\n  line-height: ', ';\n  font-weight: ', ';\n  margin: 8px 0;\n  text-transform: ', ';\n  transition: all 300ms ease;\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../styles/colors');

var colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var labelSizes = {
  small: {
    'font-size': '12px',
    'line-height': '12px'
  },
  medium: {
    'font-size': '14px',
    'line-height': '16px'
  },
  large: {
    'font-size': '16px',
    'line-height': '16px'
  }
};
var Label = _styledComponents2.default.label(_templateObject, function (_ref) {
  var color = _ref.color;
  return colors[color];
}, function (_ref2) {
  var size = _ref2.size;
  return labelSizes[size]['font-size'];
}, function (_ref3) {
  var size = _ref3.size;
  return labelSizes[size]['line-height'];
}, function (_ref4) {
  var fontWeight = _ref4.fontWeight;
  return fontWeight;
}, function (_ref5) {
  var textTransform = _ref5.textTransform;
  return textTransform;
});
Label.propTypes = {
  color: _propTypes2.default.string,
  fontWeight: _propTypes2.default.number,
  textTransform: _propTypes2.default.string
};
Label.defaultProps = {
  color: 'silver',
  fontWeight: 400,
  size: 'medium',
  textTransform: 'uppercase'
};
exports.default = Label;