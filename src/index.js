import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Stylings
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/css/style.css';
import './styles/css/login.css';

// Components
import LoginComponent from './components/login-component';
// import UserComponent from './components/user-component';
import dashboardComponent from './components/dashboard-component';

ReactDOM.render(
    <Router>
        <Route exact path='/' component={LoginComponent} />
        <Route path='/dashboard' component={dashboardComponent} />
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
