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