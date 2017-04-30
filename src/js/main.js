"use strict";

var _Logo = require("./components/Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _Whinepad = require("./components/Whinepad");

var _Whinepad2 = _interopRequireDefault(_Whinepad);

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = JSON.parse(localStorage.getItem("data"));

if (!data) {
    data = {};
    _schema2.default.forEach(function (item) {
        return data[item.id] = item.sample;
    });
    data = [data];
}

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        "div",
        { className: "app-header" },
        React.createElement(_Logo2.default, null),
        " Welcome to Whinepad!"
    ),
    React.createElement(_Whinepad2.default, { schema: _schema2.default, initialData: data })
), document.getElementById("pad"));