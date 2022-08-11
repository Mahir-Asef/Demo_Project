import React from 'react';
import   "./Banner.css";
import Slider from "react-slick";
// import image1 from '../../images/Image1.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { AiFillStar } from 'react-icons/ai';
// import { ImLocation } from 'react-icons/im';
// import { BiDollar } from 'react-icons/bi';
import SingleCard from '../../components/SingleCard/SingleCard';


const Banner = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className=" container">
            <div className="BannerHeader">
                <h1 classNam="banner-text" >Exclusive <span className="OrangeColor">deals & discounts </span> </h1>
                <p className="GrayColor banner-p " style={{marginTop:"20px"}}>Discover our fantastic early booking discounts <br /> & start planning your journey.</p>
            </div>
            <div>
        {/* <h2> Responsive </h2> */}
        <Slider {...settings}>
          
         {
          [...new Array(6)].map((element,index)=> <SingleCard serial={index+1} key={index}/>)
         }
        </Slider>
      </div>
        </div>
    );
};

export default Banner;