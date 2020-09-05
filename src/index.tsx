import React from 'react';
import ReactDOM from 'react-dom';
import {sw} from './sw';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

sw();

