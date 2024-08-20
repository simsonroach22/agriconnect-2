import React from "react";
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const contact = () => {
    return (
        <div className="contact-us-container-main">
            <div className="Heading-contact-us">
                <h1><u>Contact</u></h1>
            </div>
            <div className="contact-item-container1">
                <div className="contact-item-container">
                    <div className="item-container">
                        <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                        <p>9123463726</p>
                    </div>
                    <div className="item-container">
                        <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                        <p>agriconnect@gmail.com</p>
                    </div>
                    <div className="item-container">

                        <div className="icon"> <FontAwesomeIcon icon={faLocationDot} /></div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, expedita?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact;