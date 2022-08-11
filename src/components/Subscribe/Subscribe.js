import React from 'react';
import { FiMail } from 'react-icons/fi';
import footerEle from '../../images/footerElement.png';
import subscribe from '../../images/Subscribe.png';
import '../Footer/Footer.css';
const Subscribe = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="footer-bg">
                    <div className="inputField">
                        <FiMail className="email" />
                        <input className="input" type="email" placeholder="Enter your mail" name="" id="" />
                        <button className="button">Subscribe</button>
                    </div>
                </div>
                <div className="footerEle">
                    <img src={footerEle} alt="" srcset="" />
                </div>
                <img className="subsc"  src={subscribe} alt=""  srcset="" />
            </div>  
        </div>
    );
};

export default Subscribe;