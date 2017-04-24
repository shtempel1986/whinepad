"use strict";

var _Excel = require("./components/Excel");

var _Excel2 = _interopRequireDefault(_Excel);

var _Logo = require("./components/Logo");

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Павел on 16.04.2017.
 */
var headers = localStorage.getItem("headers"),
    data = localStorage.getItem("data");
if (!headers) {
    headers = ['Title', 'Year', 'Rating', 'Comments'];
    data = [['Test', '2015', '3', 'meh']];
}

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        React.createElement(_Logo2.default, null),
        "Welcome to Whinepad!"
    ),
    React.createElement(_Excel2.default, { headers: headers, initialData: data })
), document.getElementById("pad"));