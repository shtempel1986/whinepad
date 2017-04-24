(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Logo = function Logo() {
    return React.createElement(
        "div",
        { className: "whinepad-logo" },
        React.createElement("img", { src: "img/whinepad-logo.png", alt: "whinepad-logo" })
    );
};
exports.default = Logo;
},{}],2:[function(require,module,exports){
"use strict";

var _Logo = require("./components/Logo");

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Discover Component Logo!"
    ),
    React.createElement(_Logo2.default, null)
), document.getElementById("discovery"));
},{"./components/Logo":1}]},{},[2])