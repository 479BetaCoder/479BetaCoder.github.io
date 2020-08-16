import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return(
            <div className="outer-container">
            <nav className="nav-container">
            <a className="site-logo transition-link" href="/">
            <span className="logo-text">RK</span>
            </a>
            <ul className="nav-right">
            <li className="list-item"><NavLink className="transition-link" to="/">Home</NavLink></li>
            <li className="list-item"><NavLink className="transition-link" to="/projects">Projects</NavLink></li>
            </ul>
            </nav>
            </div>
        );
    }
}