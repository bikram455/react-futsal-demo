import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gotoDashboard: false
        };
        this.user = {};
    }

    login = ()=> {
        console.log('login user', this.user);
        this.setState({gotoDashboard: true});
    }

    entry = (e) => {
        this.user[e.target.name] = e.target.value;
    }

    render() { 
        if(!this.state.gotoDashboard) {
            return (
                <div className="container-fluid login-wrapper">
                    <div className="row login">
                        <div className="col-md-3 col-sm-8 loginForm">
                            <div className="logo-name">
                                <img className="app-logo" src={'images/ball.png'} alt="Futsal Logo" />
                                <h2>Futsall Login</h2>
                            </div>
                            <form>
                                <div className="row input-wrapper">
                                    <div className="col-md-12 input-field top"><TextField name="username" label="Username" variant="outlined" onChange={this.entry} /></div>
                                    <div className="col-md-12 input-field"><TextField name="password" label="Password" type="password" variant="outlined" onChange={this.entry} /></div>
                                    <div className="col-md-12 input-field"><Button variant="contained" onClick={this.login}>Login</Button></div>
                                    <div className="col-md-12 input-field bottom"><a>Forgot password</a></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <Redirect to='/dashboard' />
        }
         
    }
}
export default LoginComponent;