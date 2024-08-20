import React from "react";
import './about.css'
import logo from '../../Assest/logo-agriconnect.png'

const aboutus = () => {
    return (
        <div className="about-us-container-main">
            <div className="Heading-about-us">
                <h1><u>About</u></h1>
            </div>
            <div className="about-item-container">
                <div className="logo-about">
                    <img src={logo} alt="" />
                </div>
                <div className="content-container">
                    <h1>Content</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, qui?</p>
                </div>

            </div>
        </div>
    )
}

export default aboutus;