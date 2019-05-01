console.log('App.js is running!');

//JSX - JavaScript XML

const app = {
    title : 'wasupp',
    subtitle : 'it works!',
    options: ['One', 'Two'] 
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;
const templateTwo = (
    <div>
        <h1>count: {count}</h1>
        <button onClick = {addOne}>+1</button>
        <button onClick = {minusOne}>-1</button>
        <button onClick = {reset}>reset</button>
    </div>
);

function addOne() {
    count ++;
    console.log('adding one');
}

function minusOne() {
    console.log('-1');
}

function reset() {
    console.log('reset');
}

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);  
