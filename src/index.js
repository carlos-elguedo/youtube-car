/**
 * Main file of the application
 * @author Carlos Elguedo
 * @version 0.0.1
 */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
