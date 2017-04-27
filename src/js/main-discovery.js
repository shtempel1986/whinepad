"use strict";

var _Actions = require("./components/Actions");

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Discover Component!"
    ),
    React.createElement(
        "h2",
        null,
        "Actions"
    ),
    React.createElement(_Actions2.default, { onAction: function onAction(type) {
            return alert(type);
        } })
), document.getElementById("discovery"));