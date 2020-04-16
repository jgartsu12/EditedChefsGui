import React from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router';
// import { NavLink } from 'react-router-dom'


function Nav(props) {
    const loggedOutNav = (
        <ul>
            <li onClick={() => props.displayForm('login')}>
                <button>Login</button>
            </li>

            <li onClick={() => props.displayForm('signup')}>
                <button>
                    Sign Up an Admin 
                </button>
            </li>
        </ul>
    );

    const loggedInNav = (
        <ul>
            <li onClick={props.handleLogout}>
                <button>
                    Logout <i className="fas fa-sign-out-alt"></i>
                </button>
            </li>

            {/* <li onClick={() } */}
            {/* add phlog manager */}
        </ul>
    );

    return <div>{props.loggedIn ? loggedInNav : loggedOutNav}</div>
}

export default Nav;

Nav.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    displayForm: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
};