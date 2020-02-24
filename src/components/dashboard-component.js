import '../styles/dashboard.css';
import React, { Component } from 'react';
import FutsalsComponent from './user/futsals';
import BookingsComponent from './user/bookings';
import { Route, Link, Redirect } from 'react-router-dom';

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: 'futsals'
        };
    }

    checkCurrentView(view) {
        console.log(view);
        return this.state.currentView === view;
    }

    componentDidMount() {
        console.log(this.props.location.pathname.split('/').pop())
        this.setState({
            currentView: this.props.location.pathname.split('/').pop()
        })
    }

    render() {
        return (
            <div className="container-fluid dashboard-wrapper">
                <div className="row dashboard">
                    <div className="sidebar">
                        <div className="top-menu">
                            <img className="app-logo" src={'/images/ball.png'} alt="Futsal Logo" />
                            <span>Futsal</span>
                        </div>
                        <div>
                            <div className={`menu-item${this.checkCurrentView('futsals') ? ' current-view' : ''}`}>
                                <span className="futsals"><Link onClick={() => this.setState({currentView: 'futsals'})} to={`${this.props.match.path}/futsals`}>Futsals</Link></span>
                            </div>
                            <div className={`menu-item bottom-item${this.checkCurrentView('bookings') ? ' current-view' : ''}`}>
                                <span className="bookings"><Link onClick={() => this.setState({currentView: 'bookings'})} to={`${this.props.match.path}/bookings`}>Bookings</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="content container-fluid">
                        {/* <div className="row"> */}
                            <Route exact path={this.props.match.path} render={()=> <Redirect to={`${this.props.match.path}/futsals`} />} />
                            <Route path={`${this.props.match.path}/futsals`} component={FutsalsComponent} />
                            <Route path={`${this.props.match.path}/bookings`} component={BookingsComponent} />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardComponent;