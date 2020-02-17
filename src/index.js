import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Stylings
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// Components
import App from './App';
import LoginComponent from './components/login-component';

ReactDOM.render(
    <Router>
        <Route path='/' component={LoginComponent} />
        {/* <Route path='/user' component={} /> */}
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
