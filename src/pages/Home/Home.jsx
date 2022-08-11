import React from 'react';
import Header from '../../components/Header/Header.js';
import Hero from '../../components/Hero/Hero.js';
import SubSection from '../../components/SubSection/SubSection.js';
import Banner from '../../components/Banner/Banner.js';
import Footer from '../../components/Footer/Footer.js';
import Subscribe from '../../components/Subscribe/Subscribe.js';
const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <SubSection/>
            <Banner/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default Home;