import React, { Component } from "react";
// import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className='navbar-wrapper'>
                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/' activeClassName='nav-link-active'>
                            <button className='navbar-links-btn'>
                                <div className='navbar-links-btn-txt'>
                                    HOME
                                </div>
                            </button>
                        </NavLink>
                    </div>
                
                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/about-us/' activeClassName='nav-link-active'>
                            <button className='navbar-links-btn'>
                                <div className='navbar-links-btn-txt'>
                                    ABOUT US
                                </div>
                            </button>
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/soups/' activeClassName='nav-link-active'>
                            <button className='navbar-links-btn'>
                                <div className='navbar-links-btn-txt'>
                                    SOUPS
                                </div>
                            </button>
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/breakfast-menu/' activeClassName='nav-link-active'>
                            <button className='navbar-links-btn'>
                                <div className='navbar-links-btn-txt'>
                                    BREAKFAST
                                </div>
                            </button>
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/lunch-menu/' activeClassName='nav-link-active'>
                            <button className='navbar-links-btn'>
                                <div className='navbar-links-btn-txt'>
                                    LUNCH
                                </div>
                            </button>
                        </NavLink>
                    </div> 

                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/phlog/' activeClassName='nav-link-active'>
                            <button className='navbar-links-btn'>
                                <div className='navbar-links-btn-txt'>
                                    Photo Blog
                                </div>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        );    
    }    
}
