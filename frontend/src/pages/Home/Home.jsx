import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'
import AboutHome from '../../components/AboutHome/AboutHome'
import OurMenuHome from '../../components/OurMenuHome/OurMenuHome'
import Footer from '../../components/Footer/Footer'
import React, { useEffect } from 'react'
const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Navbar />
            <Banner />
            <SpecialOffer />
            <AboutHome />
            <OurMenuHome />
            <Footer />
        </>
    )
}

export default Home