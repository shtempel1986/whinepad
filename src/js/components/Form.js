"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rating = require("./Rating");

var _Rating2 = _interopRequireDefault(_Rating);

var _FormInput = require("./FormInput");

var _FormInput2 = _interopRequireDefault(_FormInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: "getData",
        value: function getData() {
            var _this2 = this;

            var data = {};
            this.props.fields.forEach(function (field) {
                return data[field.id] = _this2.refs[field.id].getValue();
            });
            return data;
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "form",
                { className: "form" },
                this.props.fields.map(function (field) {
                    var prefilled = _this3.props.initialData && _this3.props.initialData[field.id];
                    if (!_this3.props.readonly) {
                        return React.createElement(
                            "div",
                            { className: "form-row", key: field.id },
                            React.createElement(
                                "label",
                                { className: "form-label", htmlFor: field.id },
                                field.label,
                                ":"
                            ),
                            React.createElement(_FormInput2.default, _extends({}, field, { ref: field.id, defaultValue: prefilled }))
                        );
                    }
                    if (!prefilled) return null;
                    return React.createElement(
                        "div",
                        { className: "form-row", key: field.id },
                        React.createElement(
                            "span",
                            { className: "form-label" },
                            field.label,
                            ":"
                        ),
                        field.type === "rating" ? React.createElement(_Rating2.default, { readonly: true, defaultValue: parseInt(prefilled, 10) }) : React.createElement(
                            "div",
                            null,
                            prefilled
                        )
                    );
                })
            );
        }
    }]);

    return Form;
}(React.Component);

Form.PropTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string)
    })).isRequired,
    initialData: PropTypes.object,
    readonly: PropTypes.bool
};

exports.default = Form;