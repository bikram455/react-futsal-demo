import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Stylings
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
import './styles/login.css';

// Components
import LoginComponent from './components/login-component';
// import UserComponent from './components/user-component';
import DashboardComponent from './components/dashboard-component';

ReactDOM.render(
    <Router>
        <Route exact path='/' render={() => <Redirect to='login' />} />
        <Route exact path='/login' component={LoginComponent} />
        <Route path='/dashboard' component={DashboardComponent}>
            {/* <Route path='futsals' component={FutsalsComponent} />     */}
        </Route>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
