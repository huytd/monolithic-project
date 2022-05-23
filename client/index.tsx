import * as React from 'react';
import { render } from 'react-dom';

const App = () => {
    return <div>Hello, World! This is a test!</div>;
};

render(<App/>, document.querySelector("#root"));