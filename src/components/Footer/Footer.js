import React from 'react';
import './Footer.css';
import footerbg from '../../images/footerBg.png';
import footerEle from '../../images/footerElement.png';
import subscribe from '../../images/Subscribe.png';
import { FiMail } from 'react-icons/fi';
import vector from '../../images/Vector.png';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div style={{background:"#F7F8FC", paddingTop:324, paddingBottom:10}}>
            {/* <div className="footer">
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
            </div> */}
            <div className="container section-f">

                <div className="section-g">
                    <div>
                    <div style={{display:"flex"}}>
                        <h1 style={{fontWeight:"600",fontSize:"21px",lineHeight:"26.15px",fontStyle:"normal",marginRight:"10px"}}>Trabook</h1>
                        <img src={vector} alt="" srcset="" />
                    </div>
                    <div style={{width:"max-content",textAlign:"start"}}>
                        <p className="GrayColor" style={{marginTop:"24px"}}>Book your trip in minute, get full <br /> <br />
                        Control for much longer.</p>
                        <div style={{marginTop:"24px",display:"flex"}}>
                        <span className="icons"> <GrFacebookOption/> </span> <span className="icons" style={{background:"#FA7436",color:"#FFFFFF"}}> <AiOutlineInstagram/></span> <span className="icons"><FaTwitter/></span>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="section-h">
                    <div className="info-details">
                        <h1 style={{fontWeight:"600",fontSize:"21px",lineHeight:"26.15px",fontStyle:"normal"}}>Company</h1> <br />
                        <h5 className="GrayColor foodet">About</h5>
                        <h5 className="GrayColor foodet">Careers</h5>
                        <h5 className="GrayColor foodet">Logistic</h5>
                        <h5 className="GrayColor foodet">Privacy & Policy</h5>
                    </div>
                    <div className="info-details">
                        <h1 style={{fontWeight:"600",fontSize:"21px",lineHeight:"26.15px",fontStyle:"normal"}}>Contact</h1> <br />
                        <h5 className="GrayColor foodet">Help/FAQ</h5>
                        <h5 className="GrayColor foodet">Press</h5>
                        <h5 className="GrayColor foodet">Affilates</h5>
                    </div>
                    <div className="info-details">
                        <h1 style={{fontWeight:"600",fontSize:"21px",lineHeight:"26.15px",fontStyle:"normal"}}>More</h1> <br />
                        <h5 className="GrayColor foodet">Press Centre</h5>
                        <h5 className="GrayColor foodet">Our Blog</h5>
                        <h5 className="GrayColor foodet">Low fare tips</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;