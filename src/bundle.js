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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    grapes: ['Baco Noir', 'Barbera', 'Cabernet Franc', 'Cabernet Sauvignon', 'Catawba', 'Cayuga White', 'Chambourcin', 'Chancellor', 'Chardonel', 'Chardonnay', 'Chelois', 'Chenin Blanc', 'Concord', 'Delaware', 'Frontenac', 'Gewürztraminer', 'Malbec', 'Maréchal Fochr', 'Merlot', 'Norton', 'Pinot Blanc', 'Pinot Gris', 'Pinot Noir', 'Riesling', 'Sangiovese', 'Sauvignon Blanc', 'Seyval Blanc', 'Syrah', 'Sémillon', 'Traminette', 'Vidal Blanc', 'Vignoles', 'Zinfandel']
};
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
    var cssclasses = (0, _classnames2.default)("button", props.className);
    return props.href ? React.createElement("a", _extends({}, props, { className: cssclasses })) : React.createElement("button", _extends({}, props, { className: cssclasses }));
};

Button.propTypes = {
    href: PropTypes.string
};

exports.default = Button;
},{"classnames":1}],5:[function(require,module,exports){
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
},{"./Button":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _Rating = require('./Rating');

var _Rating2 = _interopRequireDefault(_Rating);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Excel = function (_React$Component) {
    _inherits(Excel, _React$Component);

    function Excel(props) {
        _classCallCheck(this, Excel);

        var _this = _possibleConstructorReturn(this, (Excel.__proto__ || Object.getPrototypeOf(Excel)).call(this, props));

        _this.state = {
            data: _this.props.initialData,
            sortby: null, // schema.id
            descending: false,
            edit: null, // [row index, schema.id],
            dialog: null };
        return _this;
    }

    _createClass(Excel, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ data: nextProps.initialData });
        }
    }, {
        key: '_fireDataChange',
        value: function _fireDataChange(data) {
            this.props.onDataChange(data);
        }
    }, {
        key: '_sort',
        value: function _sort(key) {
            var data = Array.from(this.state.data);
            var descending = this.state.sortby === key && !this.state.descending;
            data.sort(function (a, b) {
                return descending ? a[key] < b[key] ? 1 : -1 : a[key] > b[key] ? 1 : -1;
            });
            this.setState({
                data: data,
                sortby: key,
                descending: descending
            });
            this._fireDataChange(data);
        }
    }, {
        key: '_showEditor',
        value: function _showEditor(e) {
            this.setState({ edit: {
                    row: parseInt(e.target.dataset.row, 10),
                    key: e.target.dataset.key
                } });
        }
    }, {
        key: '_save',
        value: function _save(e) {
            e.preventDefault();
            var value = this.refs.input.getValue();
            var data = Array.from(this.state.data);
            data[this.state.edit.row][this.state.edit.key] = value;
            this.setState({
                edit: null,
                data: data
            });
            this._fireDataChange(data);
        }
    }, {
        key: '_actionClick',
        value: function _actionClick(rowidx, action) {
            this.setState({ dialog: { type: action, idx: rowidx } });
        }
    }, {
        key: '_deleteConfirmationClick',
        value: function _deleteConfirmationClick(action) {
            if (action === 'dismiss') {
                this._closeDialog();
                return;
            }
            var data = Array.from(this.state.data);
            data.splice(this.state.dialog.idx, 1);
            this.setState({
                dialog: null,
                data: data
            });
            this._fireDataChange(data);
        }
    }, {
        key: '_closeDialog',
        value: function _closeDialog() {
            this.setState({ dialog: null });
        }
    }, {
        key: '_saveDataDialog',
        value: function _saveDataDialog(action) {
            if (action === 'dismiss') {
                this._closeDialog();
                return;
            }
            var data = Array.from(this.state.data);
            data[this.state.dialog.idx] = this.refs.form.getData();
            this.setState({
                dialog: null,
                data: data
            });
            this._fireDataChange(data);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'Excel' },
                this._renderTable(),
                this._renderDialog()
            );
        }
    }, {
        key: '_renderDialog',
        value: function _renderDialog() {
            if (!this.state.dialog) {
                return null;
            }
            switch (this.state.dialog.type) {
                case 'delete':
                    return this._renderDeleteDialog();
                case 'info':
                    return this._renderFormDialog(true);
                case 'edit':
                    return this._renderFormDialog();
                default:
                    throw Error('Unexpected dialog type ' + this.state.dialog.type);
            }
        }
    }, {
        key: '_renderDeleteDialog',
        value: function _renderDeleteDialog() {
            var first = this.state.data[this.state.dialog.idx];
            var nameguess = first[Object.keys(first)[0]];
            return React.createElement(
                _Dialog2.default,
                {
                    modal: true,
                    header: 'Confirm deletion',
                    confirmLabel: 'Delete',
                    onAction: this._deleteConfirmationClick.bind(this)
                },
                'Are you sure you want to delete "' + nameguess + '"?'
            );
        }
    }, {
        key: '_renderFormDialog',
        value: function _renderFormDialog(readonly) {
            return React.createElement(
                _Dialog2.default,
                {
                    modal: true,
                    header: readonly ? 'Item info' : 'Edit item',
                    confirmLabel: readonly ? 'ok' : 'Save',
                    hasCancel: !readonly,
                    onAction: this._saveDataDialog.bind(this)
                },
                React.createElement(_Form2.default, {
                    ref: 'form',
                    fields: this.props.schema,
                    initialData: this.state.data[this.state.dialog.idx],
                    readonly: readonly })
            );
        }
    }, {
        key: '_renderTable',
        value: function _renderTable() {
            var _this2 = this;

            return React.createElement(
                'table',
                null,
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        this.props.schema.map(function (item) {
                            if (!item.show) {
                                return null;
                            }
                            var title = item.label;
                            if (_this2.state.sortby === item.id) {
                                title += _this2.state.descending ? ' \u2191' : ' \u2193';
                            }
                            return React.createElement(
                                'th',
                                {
                                    className: 'schema-' + item.id,
                                    key: item.id,
                                    onClick: _this2._sort.bind(_this2, item.id)
                                },
                                title
                            );
                        }, this),
                        React.createElement(
                            'th',
                            { className: 'ExcelNotSortable' },
                            'Actions'
                        )
                    )
                ),
                React.createElement(
                    'tbody',
                    { onDoubleClick: this._showEditor.bind(this) },
                    this.state.data.map(function (row, rowidx) {
                        return React.createElement(
                            'tr',
                            { key: rowidx },
                            Object.keys(row).map(function (cell, idx) {
                                var _classNames;

                                var schema = _this2.props.schema[idx];
                                if (!schema || !schema.show) {
                                    return null;
                                }
                                var isRating = schema.type === 'rating';
                                var edit = _this2.state.edit;
                                var content = row[cell];
                                if (!isRating && edit && edit.row === rowidx && edit.key === schema.id) {
                                    content = React.createElement(
                                        'form',
                                        { onSubmit: _this2._save.bind(_this2) },
                                        React.createElement(_FormInput2.default, _extends({ ref: 'input' }, schema, { defaultValue: content }))
                                    );
                                } else if (isRating) {
                                    content = React.createElement(_Rating2.default, { readonly: true, defaultValue: Number(content) });
                                }
                                return React.createElement(
                                    'td',
                                    {
                                        className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'schema-' + schema.id, true), _defineProperty(_classNames, 'ExcelEditable', !isRating), _defineProperty(_classNames, 'ExcelDataLeft', schema.align === 'left'), _defineProperty(_classNames, 'ExcelDataRight', schema.align === 'right'), _defineProperty(_classNames, 'ExcelDataCenter', schema.align !== 'left' && schema.align !== 'right'), _classNames)),
                                        key: idx,
                                        'data-row': rowidx,
                                        'data-key': schema.id },
                                    content
                                );
                            }, _this2),
                            React.createElement(
                                'td',
                                { className: 'ExcelDataCenter' },
                                React.createElement(_Actions2.default, { onAction: _this2._actionClick.bind(_this2, rowidx) })
                            )
                        );
                    }, this)
                )
            );
        }
    }]);

    return Excel;
}(React.Component);

Excel.propTypes = {
    schema: PropTypes.arrayOf(PropTypes.object),
    initialData: PropTypes.arrayOf(PropTypes.object),
    onDataChange: PropTypes.func
};

exports.default = Excel;
},{"./Actions":3,"./Dialog":5,"./Form":7,"./FormInput":8,"./Rating":10,"classnames":1}],7:[function(require,module,exports){
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
},{"./FormInput":8,"./Rating":10}],8:[function(require,module,exports){
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
},{"./Rating":10,"./Suggest":11}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{"classnames":1}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require("./Dialog");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Excel = require("./Excel");

var _Excel2 = _interopRequireDefault(_Excel);

var _Form = require("./Form");

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Whinepad = function (_React$Component) {
    _inherits(Whinepad, _React$Component);

    function Whinepad(props) {
        _classCallCheck(this, Whinepad);

        var _this = _possibleConstructorReturn(this, (Whinepad.__proto__ || Object.getPrototypeOf(Whinepad)).call(this, props));

        _this.state = {
            data: props.initialData,
            addNew: false
        };
        _this._preSearchData = null;
        return _this;
    }

    _createClass(Whinepad, [{
        key: "_addNewDialog",
        value: function _addNewDialog() {
            this.setState({ addNew: true });
        }
    }, {
        key: "_addNew",
        value: function _addNew(action) {
            if (action === "dismiss") {
                this.setState({ addNew: false });
                return;
            }
            var data = Array.from(this.state.data);
            data.unshift(this.refs.form.getData());
            this.setState({
                addNew: false,
                data: data
            });
            this._commitToStorage(data);
        }
    }, {
        key: "_onExcelDataChange",
        value: function _onExcelDataChange(data) {
            this.setState({ data: data });
            this._commitToStorage(data);
        }
    }, {
        key: "_commitToStorage",
        value: function _commitToStorage(data) {
            localStorage.setItem("data", JSON.stringify(data));
        }
    }, {
        key: "_startSearching",
        value: function _startSearching() {
            this._preSearchData = this.state.data;
        }
    }, {
        key: "_doneSearching",
        value: function _doneSearching() {
            this.setState({
                data: this._preSearchData
            });
        }
    }, {
        key: "_search",
        value: function _search(e) {
            var needle = e.target.value.toLowerCase();
            if (!needle) {
                this.setState({ data: this._preSearchData });
                return;
            }
            var fields = this.props.schema.map(function (item) {
                return item.id;
            }),
                searchData = this._preSearchData.filter(function (row) {
                for (var f = 0; f < fields.length; f++) {
                    if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
                        return true;
                    }
                }
                return false;
            });
            this.setState({ data: searchdata });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "whinepad" },
                React.createElement(
                    "div",
                    { className: "whinepad-toolbar" },
                    React.createElement(
                        "div",
                        { className: "whinepad-toolbar-add" },
                        React.createElement(
                            _Button2.default,
                            {
                                onClick: this._addNewDialog.bind(this),
                                className: "whinepad-toolbar-add-button"
                            },
                            " + add"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "whinepad-toolbar-search" },
                        React.createElement("input", {
                            placeholder: "Search...",
                            onChange: this._search.bind(this),
                            onFocus: this._startSearching.bind(this),
                            onBlur: this._doneSearching.bind(this) })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "whinepad-datagrid" },
                    React.createElement(_Excel2.default, {
                        schema: this.props.schema,
                        initialData: this.state.data,
                        onDataChange: this._onExcelDataChange.bind(this)
                    })
                ),
                this.state.addNew ? React.createElement(
                    _Dialog2.default,
                    {
                        modal: true,
                        header: "Add new item",
                        confirmLabel: "Add",
                        onAction: this._addNew.bind(this)
                    },
                    React.createElement(_Form2.default, {
                        ref: "form",
                        fields: this.props.schema
                    })
                ) : null
            );
        }
    }]);

    return Whinepad;
}(React.Component);

Whinepad.PropTypes = {
    schema: PropTypes.arrayOf(PropTypes.object),
    initialData: PropTypes.arrayOf(PropTypes.object)
};

exports.default = Whinepad;
},{"./Button":4,"./Dialog":5,"./Excel":6,"./Form":7}],13:[function(require,module,exports){
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
},{"./components/Logo":9,"./components/Whinepad":12,"./schema":14}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classification = require('./classification');

var _classification2 = _interopRequireDefault(_classification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = [{
    id: 'name',
    label: 'Name',
    show: true,
    sample: '$2 chuck',
    align: 'left'
}, {
    id: 'year',
    label: 'Year',
    type: 'year',
    show: true,
    sample: 2015
}, {
    id: 'grape',
    label: 'Grape',
    type: 'suggest',
    options: _classification2.default.grapes,
    show: true,
    sample: 'Merlot',
    align: 'left'
}, {
    id: 'rating',
    label: 'Rating',
    type: 'rating',
    show: true,
    sample: 3
}, {
    id: 'comments',
    label: 'Comments',
    type: 'text',
    sample: 'Nice for the price'
}];

exports.default = schema;
},{"./classification":2}]},{},[13])