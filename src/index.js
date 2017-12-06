import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Summary from './Summary';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Summary />, document.getElementById('root'));
registerServiceWorker();



