import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import history from './config/history'
import {Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


