import React from "react";
import Navbar from '../../components/Navbar/navbar.jsx';
import './Home.css'
import Categories from '../../components/categories/catogories.jsx'
import Service from '../../components/Services/service.jsx'
import Aboutus from '../../components/About-us/about.jsx'
import Contactus from '../../components/Contact-us/contactus.jsx'
import Copyright from '../../components/copyright/copyright.jsx'
import agriImage from '../../Assest/agri.jpg';

const Home = () =>{
    return(
        <div className="home-container">
            <Navbar/>
            <div className="courosell-backround">
                <img src={agriImage} alt="" />
            </div>
            <div className="catagories-container">
                <Categories/>
            </div>
            <div className="services-container">
                <Service/>
            </div>
            <div className="about-us-container">
                <Aboutus/>
            </div>
            <div className="contact-us-container">
                <Contactus/>
            </div>
            <div className="copyright-container">
                <Copyright/>
            </div>
        </div>
    )
}

export default Home;