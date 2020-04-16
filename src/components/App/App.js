import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import SoupMenu from '../pages/soup-menu';
import BreakfastMenu from '../pages/breakfast-menu';
import LunchMenu from '../pages/lunch-menu';
import Phlog from '../pages/phlog';
// import PhlogManager from '../pages/phlog-manager';

import Nav from '../Auth/NavMachXX';
import LoginForm from '../Auth/LoginFormmachX';
import SignupForm from '../Auth/SignupFormMachX';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: localStorage.getItem('token') ? true : false,
            username: '',
            displayedForm: ''
        }
    }

    checkLoginStatus() {
        if (this.state.loggedIn) {
            fetch('http://127.0.0.1:8000/login/user_now/', {
                headers: {
                    Authorization : `JWT ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(json => {
                this.setState({ username: json.username })
            })
            .catch(error => 
                console.log('checkLoginStatus error', error));
        }
    }

    displayForm = form => {
        this.setState({
            displayedForm: form
        });
    }

    handleLoginChange = e => {
        this.setState({
            [e.target.name]: e.target.valie
        });
    };

    handleLogout = () => {
        localStorage.removeItem('token');
        this.setState({ 
            loggedIn: false,
            username: ''
        });
    }

    handleLogin = (event, data) => {
        event.preventDefault();
        // console.log(data);
        fetch('http://127.0.0.1:8000/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('token', json.token);
            console.log(json.token)
            this.setState({
                loggedIn: true,
                displayedForm: '',
                username: json.username
            })
        })
        .catch(error => {
            console.log('handleLogin error', error);
        })
    }

    handleSignup = (event, data) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8000/login/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    loggedIn: true,
                    displayedForm: '',
                    username: json.username
                });
            });
    }

    handlePhlogManager

    componentDidMount() {
        this.checkLoginStatus();
    }
    
    render() {

        let form;
        switch(this.state.displayedForm) {
            case 'login':
                form = <LoginForm handleLogin={this.handleLogin} />;
                break;
            case 'signup':
                form = <SignupForm handleSignup={this.handleSignup} />;
                break;
            // case 'phlog-manager':
            //     form = <PhlogManager handleEditPhlog={this.handleEditPhlog} /> 
            default:
                form = null;
        }

        return (
            <div className="container">
                <Router>
                    <div>
                        <Nav 
                            loggedIn = {this.state.loggedIn}
                            displayForm={this.displayForm}
                            handleLogout={this.handleLogout}
                        />
                        {form}
                        <h3>
                            {
                                this.state.loggedIn 
                                ? `Hello, ${this.state.username}`
                                : 'Please Login To Phlog'
                            }
                        </h3>

                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/about-us' component={AboutUs}/>
                            <Route 
                                path='/soups'
                                render={props => <SoupMenu {...props} />} /> 
                            <Route 
                                path='/breakfast-menu'
                                render={props => <BreakfastMenu {...props} />}/>
                            <Route 
                                path='/lunch-menu' 
                                render={props => <LunchMenu {...props}/>} />
                            <Route 
                                path='/phlog'
                                render={props => <Phlog {...props}/>} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}