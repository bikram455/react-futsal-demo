import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4 col-sm-8">
                    <h2>Futsall Login</h2>
                    <form>
                        <div className="row">
                            <div className="col-md-8"><TextField label="Username" variant="outlined" /></div>
                            <div className="col-md-8"><TextField label="Password" type="password" variant="outlined" /></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default LoginComponent;