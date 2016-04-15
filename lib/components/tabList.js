'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var activeID = _ref.activeID;
  var children = _ref.children;
  var makeActive = _ref.makeActive;
  return _react2.default.createElement(
    'div',
    null,
    children.map(function (tab) {
      return _react2.default.cloneElement(tab, { active: tab.props.tabID === activeID, makeActive: makeActive });
    })
  );
};