import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import getConfirmation from './GetUserConfirmation';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter getUserConfirmation={getConfirmation}>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
