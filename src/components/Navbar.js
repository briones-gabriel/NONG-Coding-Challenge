import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    // function to prevent page reload
    function handleClick(e) {
        e.preventDefault();
    }
    return (
        <nav className="nav-wrapper blue">
            <div className="container">
                <a href="/" className="brand-logo" onClick={handleClick}>NONG Coding Challenge</a>
                <ul className="right">
                    <li><NavLink to="/">Log Out</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;