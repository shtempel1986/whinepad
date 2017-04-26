"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
    var cssclasses = (0, _classnames2.default)("button", props.className);
    return props.href ? React.createElement("a", _extends({}, props, { className: cssclasses })) : React.createElement("button", _extends({}, props, { className: cssclasses }));
};

Button.propTypes = {
    href: PropTypes.string
};

exports.default = Button;