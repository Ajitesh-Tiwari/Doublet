import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './components/application';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
