import Navbar from '../../components/Navbar/Navbar'
import About from "../../components/About/About"
import Footer from '../../components/Footer/Footer'
import React, { useEffect } from 'react'
const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <About />
            <Footer />
        </>
    )
}

export default AboutPage