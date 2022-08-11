import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className="navbar">
        <div className="navbar__container">
            <a href="#home" id="navbar__logo" style={{marginRight:"200px"}}>Trabook</a>
            <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul class="navbar__menu">
                <li className="navbar__item">
                    <a href="#home" className="navbar__links" id="home-page">Home</a>
                </li>
                <li class="navbar__item">
                    <a href="#about" className="navbar__links" id="about-page">About</a>
                </li>
                <li className="navbar__item">
                    <a href="#destination" className="navbar__links" id="destination-page">Destination</a>
                </li>
                <li className="navbar__item">
                    <a href="#tour" className="navbar__links" id="tour-page">Tour</a>
                </li>
                <li className="navbar__item">
                    <a href="#blog" className="navbar__links" id="blog-page">Blog</a>
                </li>
                <li className="navbar__login" style={{marginLeft:"200px"}}>
                    <a href="#login" className="navbar__links" style= {{color:"#FA7436" }}  id="login-page">Login</a>
                </li>
                <li class="navbar__btn">
                    <a href="#sign-up" className="navbar__links" style= {{background:"#FA7436",color:"#FFFFFF", padding: "10px", borderRadius:"10px"  }}  id="signup">Sign Up</a>
                </li>
            </ul>
        </div>
    </nav>
        </div>
    );
};

export default Header;