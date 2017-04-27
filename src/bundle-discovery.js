(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Actions = function Actions(props) {
    return React.createElement(
        "div",
        { className: "actions" },
        React.createElement(
            "span",
            {
                tabIndex: "0",
                className: "actions-info",
                title: "More info",
                onClick: props.onAction.bind(null, "info") },
            "\u2139"
        ),
        React.createElement(
            "span",
            {
                tabIndex: "0",
                className: "actions-edit",
                title: "Edit",
                onClick: props.onAction.bind(null, "edit") },
            "\u2710"
        ),
        React.createElement(
            "span",
            {
                tabIndex: "0",
                className: "actions-delete",
                title: "delete",
                onClick: props.onAction.bind(null, "delete") },
            "x"
        )
    );
};

Actions.PropTipes = {
    onAction: PropTypes.func
};

exports.default = Actions;
},{}],2:[function(require,module,exports){
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
},{"./components/Actions":1}]},{},[2])