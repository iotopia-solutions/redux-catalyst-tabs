"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  var active = _ref.active;
  var tabID = _ref.tabID;
  var makeActive = _ref.makeActive;
  return _react2.default.createElement(
    "button",
    { className: "tab", onClick: function onClick() {
        return makeActive(tabID);
      } },
    active ? "ALIVE!!" : "not alive."
  );
};