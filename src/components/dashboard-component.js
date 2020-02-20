import '../styles/css/dashboard.css';
import React, { Component } from 'react';

class dashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container-fluid dashboard-wrapper">
                <div className="row dashboard">
                    <div className="sidebar">
                        <div className="top-menu">
                            <img className="app-logo" src={'images/ball.png'} alt="Futsal Logo" />
                            <span>Futsal</span>
                        </div>
                        <div>
                            <div className="menu-item">Futsals</div>
                            <div className="menu-item">Bookings</div>
                        </div>
                    </div>
                    <div className="content">
                        <h3>This is dashboard component.</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default dashboardComponent;