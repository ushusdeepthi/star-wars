import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import {HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

