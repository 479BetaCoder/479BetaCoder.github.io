import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return(
            <div>
            <nav>
            <img src={require("../../assets/myAvatar.JPG")} alt="RK"></img>
            <NavLink className="my-avatar" to="/">
            </NavLink>
            <ul >
            <li ><NavLink  to="/">Home</NavLink></li>
            <li ><NavLink to="/projects">Projects</NavLink></li>
            </ul>
            </nav>
            </div>
        );
    }
}