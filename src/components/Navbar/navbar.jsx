import React, { useState } from "react";
import logo from '../../Assest/logo-agriconnect.png'
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-container">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className={`navbar-item ${isOpen ? "open" : ""}`}>
                    <ul>
                        <li><div className="farmer"><p>Farmer</p></div></li>
                        <li><div className="consumer"><p>Consumer</p></div></li>
                        <li><div className="retailer"><p>Retailer</p></div></li>
                    </ul>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
        </div>
    );
};

export default Navbar;
