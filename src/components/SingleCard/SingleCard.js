import React from 'react';
import './SingleCard.css';
import image1 from '../../images/Image1.png'
import { AiFillStar } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { BiDollar } from 'react-icons/bi';
const SingleCard = ({serial}) => {
    return (
        <div className="main-card">
            <div>
              <img src={image1} alt="" style={{width:"100%"}} srcset="" />
             </div>
                <div>
                    <div className="card-body">
                        <div className="card">
                            <h3>London</h3>
                            <p><AiFillStar style={{color:"gold"}}  /> <span className="GrayColor" style={{marginRight:"30px"}}>4.8</span></p>
                        </div>
                        <div className="card-footer">
                            <p><ImLocation/>UK</p>
                            <p><BiDollar className="GrayColor" /><span className="price GrayColor">950</span> <span className="priceBG OrangeColor"><BiDollar/>850</span></p>
                        </div>

                        {
                         serial === 2 && <button className="Card-Button">Book Now</button>
                        }
                    </div>


                </div>
          </div>
    );
};

export default SingleCard;