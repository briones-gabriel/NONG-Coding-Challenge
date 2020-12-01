import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from './auth/firebaseConfig';
import { AuthContext } from './auth/Auth';

function Navbar() {
    function handleClick(e) {
        e.preventDefault();
    }
    function handleLogOut() {
        firebase.auth().signOut();
    }
    const { user } = useContext(AuthContext);
    return (
        <nav className="nav-wrapper green accent-4">
            <div className="container">
                <a href="/" className="left brand-logo" onClick={handleClick}>NONG Challenge</a>
                <ul className="right">
                    {user ? (<li><NavLink to="/" onClick={handleLogOut}>Log Out</NavLink></li>) : (<p></p>)}
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;