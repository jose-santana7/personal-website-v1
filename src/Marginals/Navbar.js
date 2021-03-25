import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <React.Fragment>
            <div className="navContainer">
                <nav>
                    <ul className="navList">
                        <li className="navItems" id="navLeft">
                            <NavLink exact to='/' activeClassName="selected">Jose Santana</NavLink>
                        </li>
                    </ul>
                    <ul className="navList">
                    
                        <li className="navItems navRight">
                            <NavLink exact to="/contact" activeClassName="selected">Contact</NavLink>
                        </li>
                        <li className="navItems navRight">
                            <NavLink exact to="/about" activeClassName="selected">About</NavLink>
                        </li>
                        <li className="navItems navRight">
                            <NavLink to="/work" activeClassName="selected">Work</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </React.Fragment>
    )
};

export default Navbar;