import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling the Navbar

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Hybrid Social App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/chat">Chat</Link>
            </div>
        </nav>
    );
};

export default Navbar;