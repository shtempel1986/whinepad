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