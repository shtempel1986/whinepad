"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_React$Component) {
    _inherits(Dialog, _React$Component);

    function Dialog() {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
    }

    _createClass(Dialog, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.body.classList.remove("dialog-modal-open");
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            document.body.classList.add("dialog-modal-open");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: this.props.modal ? "dialog dialog-modal" : "dialog" },
                React.createElement(
                    "div",
                    { className: this.props.modal ? "dialog-modal-wrap" : null },
                    React.createElement(
                        "div",
                        { className: "dialog-header" },
                        this.props.header
                    ),
                    React.createElement(
                        "div",
                        { className: "dialog-body" },
                        this.props.children
                    ),
                    React.createElement(
                        "div",
                        { className: "dialog-footer" },
                        this.props.hasCancel ? React.createElement(
                            "span",
                            {
                                className: "dialog-dismiss",
                                onClick: this.props.onAction.bind(this, "dismiss")
                            },
                            "Cancel"
                        ) : null,
                        React.createElement(
                            _Button2.default,
                            { onClick: this.props.onAction.bind(this, this.props.hasCancel ? "confirm" : "dismiss") },
                            this.props.confirmLabel
                        )
                    )
                )
            );
        }
    }]);

    return Dialog;
}(React.Component);

Dialog.PropTypes = {
    header: PropTypes.string.isRequired,
    confirmLabel: PropTypes.string,
    modal: PropTypes.bool,
    onAction: PropTypes.func,
    hasCancel: PropTypes.bool
};

Dialog.defaultProps = {
    confirmLabel: "Ok",
    modal: "False",
    onAction: function onAction() {},
    hasCancel: true
};

exports.default = Dialog;