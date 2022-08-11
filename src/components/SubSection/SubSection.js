import React from 'react';
import './SubSection.css';
import  SubSec1  from "../../images/SubSec1.png.png";
import group1 from "../../images/Group1.png";
import group2 from "../../images/Group2.png";
import group3 from "../../images/Group3.png";
const SubSection = () => {
    return (
        <div className="Subsection">
           <div className="Sub" >
                <div style={{marginTop:"50px"}}>
                    <h1 className="sub-h">Things you need <span style={{color:"#FA7436"}}> to do</span></h1>
                    <p style={{color:"#666666", marginTop:"10px"}}>We ensure that you’ll embark on a perfectly planned,<br /> safe vacation at a price you can afford. </p>
                </div>
                <div style={{marginTop:"50px"}}>
                    <img  src={SubSec1} alt="" srcset="" />
                </div>
           </div>
           <div className="allGroup">
                <div className="Group">
                    <div>
                        <img style={{marginTop:"60px",marginLeft:"30px"}} src={group1} alt="" srcset="" />
                    </div>
                    <div style={{marginTop:"40px",marginLeft:"30px"}}>
                        <h1>Sign Up</h1>
                        <p style={{color:"#666666", marginTop:"10px"}}>Completes all the work associated <br /> with planning and processing</p>
                    </div>
                </div>
                <div className="Group">
                    <div>
                        <img style={{marginTop:"60px",marginLeft:"30px"}} src={group2} alt="" srcset="" />
                    </div>
                    <div style={{marginTop:"40px",marginLeft:"30px"}}>
                        <h1>Worth of Money</h1>
                        <p style={{color:"#666666", marginTop:"10px"}}>After successful access then book<br /> from exclusive deals & pricing </p>
                    </div>
                </div>
                <div className="Group">
                    <div>
                        <img style={{marginTop:"60px",marginLeft:"30px"}} src={group3} alt="" srcset="" />
                    </div>
                    <div style={{marginTop:"40px",marginLeft:"30px"}}>
                        <h1>Exciting Travel</h1>
                        <p style={{color:"#666666", marginTop:"10px"}}>Start and explore a wide range of <br /> exciting travel experience.</p>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default SubSection;