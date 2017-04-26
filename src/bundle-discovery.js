(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],2:[function(require,module,exports){
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
},{"./FormInput":3,"./Rating":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Suggest = require("./Suggest");

var _Suggest2 = _interopRequireDefault(_Suggest);

var _Rating = require("./Rating");

var _Rating2 = _interopRequireDefault(_Rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormInput = function (_React$Component) {
    _inherits(FormInput, _React$Component);

    function FormInput() {
        _classCallCheck(this, FormInput);

        return _possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).apply(this, arguments));
    }

    _createClass(FormInput, [{
        key: "getValue",
        value: function getValue() {
            return "value" in this.refs.input ? this.refs.input.value : this.refs.input.getValue();
        }
    }, {
        key: "render",
        value: function render() {
            var common = {
                id: this.props.id,
                ref: "input",
                defaultValue: this.props.defaultValue
            };

            switch (this.props.type) {
                case "year":
                    return React.createElement("input", _extends({}, common, {
                        type: "number",
                        defaultValue: this.props.defaultValue || new Date().getFullYear()
                    }));
                case "suggest":
                    return React.createElement(_Suggest2.default, _extends({}, common, { options: this.props.options }));
                case "rating":
                    return React.createElement(_Rating2.default, _extends({}, common, {
                        defaultValue: parseInt(this.props.defaultValue, 10)
                    }));
                case "text":
                    return React.createElement("textarea", common);
                default:
                    return React.createElement("input", _extends({}, common, { type: "text" }));
            }
        }
    }]);

    return FormInput;
}(React.Component);

FormInput.PropTypes = {
    type: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
    id: PropTypes.string,
    options: PropTypes.array,
    defaultValue: PropTypes.any
};

exports.default = FormInput;
},{"./Rating":4,"./Suggest":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rating = function (_React$Component) {
    _inherits(Rating, _React$Component);

    function Rating(props) {
        _classCallCheck(this, Rating);

        var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

        _this.state = {
            rating: props.defaultValue,
            tmpRating: props.defaultValue
        };
        return _this;
    }

    _createClass(Rating, [{
        key: "getValue",
        value: function getValue() {
            return this.state.rating;
        }
    }, {
        key: "setTemp",
        value: function setTemp(rating) {
            this.setState({
                tmpRating: rating
            });
        }
    }, {
        key: "setRating",
        value: function setRating(rating) {
            this.setState({
                tmpRating: rating,
                rating: rating
            });
        }
    }, {
        key: "reset",
        value: function reset() {
            this.setTemp(this.state.rating);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setRating(nextProps.defaultValue);
        }
    }, {
        key: "render",
        value: function render() {
            var stars = [];
            for (var i = 1; i <= this.props.max; i++) {
                stars.push(React.createElement(
                    "span",
                    {
                        className: i <= this.state.tmpRating ? "rating-on" : null,
                        key: i,
                        onClick: !this.props.readonly && this.setRating.bind(this, i),
                        onMouseOver: !this.props.readonly && this.setTemp.bind(this, i)
                    },
                    "\u2606"
                ));
            }
            return React.createElement(
                "div",
                {
                    className: (0, _classnames2.default)({
                        "rating": true,
                        "rating_readonly": this.props.readonly
                    }),
                    onMouseOut: this.reset.bind(this)
                },
                stars,
                this.props.readonly || !this.props.id ? null : React.createElement("input", {
                    type: "hidden",
                    id: this.props.id,
                    value: this.state.rating
                })
            );
        }
    }]);

    return Rating;
}(React.Component);

Rating.PropTypes = {
    defaultValue: PropTypes.number,
    readOnly: PropTypes.bool,
    max: PropTypes.number
};

Rating.defaultProps = {
    defaultValue: 0,
    max: 5
};

exports.default = Rating;
},{"classnames":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggest = function (_React$Component) {
    _inherits(Suggest, _React$Component);

    function Suggest() {
        _classCallCheck(this, Suggest);

        return _possibleConstructorReturn(this, (Suggest.__proto__ || Object.getPrototypeOf(Suggest)).apply(this, arguments));
    }

    _createClass(Suggest, [{
        key: "getValue",
        value: function getValue() {
            return this.refs.lowlevelinput.value;
        }
    }, {
        key: "render",
        value: function render() {
            var randomId = Math.random().toString(16).substring(2);
            return React.createElement(
                "div",
                null,
                React.createElement("input", {
                    list: randomId,
                    defaultValue: this.props.defaultValue,
                    ref: "lowlevelinput",
                    id: this.props.id
                }),
                React.createElement(
                    "datalist",
                    { id: randomId },
                    this.props.options.map(function (item, idx) {
                        return React.createElement("option", { value: item, key: idx });
                    })
                )
            );
        }
    }]);

    return Suggest;
}(React.Component);

Suggest.PropTypes = {
    option: PropTypes.arrayOf(PropTypes.string)
};

exports.default = Suggest;
},{}],6:[function(require,module,exports){
'use strict';

var _Form = require('./components/Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Discover Component!'
    ),
    React.createElement(
        'h2',
        null,
        'Form '
    ),
    React.createElement(_Form2.default, {
        fields: [{ label: 'Rating', type: 'rating', id: 'rateme' }, { label: 'Greetings', id: 'freetext' }],
        initialData: { rateme: 4, freetext: 'Hello' } })
), document.getElementById("discovery"));
},{"./components/Form":2}]},{},[6])