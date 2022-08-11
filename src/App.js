import './App.css';
// import './Styles.css';
// import Img from "./images/p.png";
// import {AiOutlineDown} from "react-icons/ai";
// import  Header  from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import  SubSection  from "./components/SubSection/SubSection";
import Home from './pages/Home/Home.jsx';
function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Header></Header>
      <Hero></Hero>
      <SubSection></SubSection> */}
     {/* Navbar Section */}
    {/* <nav className="navbar">
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
    <div>
    <div className='hero'>
      <div style={{textAlign:"start"}}>
        <h1 style= {{fontWeight:"700", fontSize: "64px" }}>
        Get started your  <br/> exciting <span style= {{color:"#FA7436" }}>journey</span><br/>
        with us.
        </h1>
        <p style= {{color:"#666666" , marginTop: "32px" }}>A Team of experienced tourism professionals will<br/> provide you with the best advice and tips for your<br/> desire place.</p>
        <div style={{marginTop:"64px" }}>
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
      </div> */}
    </div>
  );
}

export default App;
