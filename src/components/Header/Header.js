import {React,useState} from 'react';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
const Header = () => {
    const [burgerClicked,setBurgerClicked] = useState(false);

    const handleBurgerClick = ()=>{
        console.log('adadasd')
        setBurgerClicked(!burgerClicked);
    }


    return (
        <div>
            <nav className="navbar">
        <div className="navbar__container">
            <a href="#home" id="navbar__logo" className="trabook-logo">Trabook</a>
            <div className="burger-button">
                <button  onClick={handleBurgerClick}><GiHamburgerMenu style={{fontSize:"30px"}} /></button>
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

    <div className={`burger-menu ${burgerClicked ? 'burger-visible' : ''}`}>
    <ul class="navbar__menu">
                <div className="burger-button">
                    <span  onClick={handleBurgerClick}>
                        <IoMdClose style={{fontSize:"20px", marginTop:"10px",marginRight:"10px",border:"none"}} />
                    </span>
                </div>
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
                <li className="navbar__login">
                    <a href="#login" className="navbar__links" style= {{color:"#FA7436" }}  id="login-page">Login</a>
                </li>
                <li class="navbar__btn">
                    <a href="#sign-up" className="navbar__links" style= {{background:"#FA7436",color:"#FFFFFF", padding: "10px", borderRadius:"10px"  }}  id="signup">Sign Up</a>
                </li>
            </ul>
    </div>
        </div>
    );
};

export default Header;