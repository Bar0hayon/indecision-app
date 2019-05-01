'use strict';

console.log('App.js is running!');

//JSX - JavaScript XML

var app = {
    title: 'wasupp',
    subtitle: 'it works!',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var count = 0;
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);

function addOne() {
    count++;
    console.log('adding one');
}

function minusOne() {
    console.log('-1');
}

function reset() {
    console.log('reset');
}

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
