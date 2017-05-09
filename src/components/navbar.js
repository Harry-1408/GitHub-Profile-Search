import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header col-md-8">
                    <span className="navbar-brand">GitHub Search</span>
                </div>
                <ul className="nav navbar-nav">
                    <li><a href="http://harshpatel.cf" target="_blank">My Space on Web</a></li>
                    <li><a href="https://github.com/harry-1408" target="_blank">GitHub</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
