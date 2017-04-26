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