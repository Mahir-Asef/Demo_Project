import React from 'react';
// import '../../Styles.css';
import './Hero.css';
import Img from '../../images/p.png';
import {AiOutlineDown} from "react-icons/ai";
const Hero = () => {
    return (
        <div>
            <div>
    <div className='hero'>
      <div style={{textAlign:"start"}}>
        <h1 className="hero-h">
        Get started your  <br/> exciting <span style= {{color:"#FA7436" }}>journey</span><br/>
        with us.
        </h1>
        <p className="p-tag" style= {{color:"#666666" , marginTop: "32px" }}>A Team of experienced tourism professionals will<br/> provide you with the best advice and tips for your<br/> desire place.</p>
        <div className="sign" style={{marginTop:"64px" }}>
          <a href="_blank" style= {{color:"#FA7436", border:"1px solid #FA7436" ,borderRadius:"5px",textDecoration:"none",padding:"10px 30px"}}  id="signup">Sign Up</a>
        </div>
      </div>
      <div>
      <img src={Img} className="traveler" alt="" srcset=""/>
      </div>
    </div>
    </div>
      <div className='sub'>
        <div className='sub-item'>
          Location <AiOutlineDown  className='sub-hero' /> 
          <p style={{color:"#666666"}}>Where are you going</p>
        </div>
        <div  className='sub-item'>
          Date <AiOutlineDown  className='sub-hero' /> 
          <p style={{color:"#666666"}}>When you will go</p>
        </div>
        <div  className='sub-item'>
        Guest <AiOutlineDown  className='sub-hero' /> 
          <p style={{color:"#666666"}}>Number of guest</p>
        </div>
        <div  className='sub-item'> 
          <a href="#sign-up" className="navbar__links" style= {{background:"#FA7436",color:"#FFFFFF", padding: "10px", borderRadius:"10px"  }}  id="signup">Explore Now</a>
        </div>
      </div>
        </div>
    );
};

export default Hero;