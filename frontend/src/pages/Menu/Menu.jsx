import Navbar from '../../components/Navbar/Navbar'
import OurMenu from '../../components/OurMenu/OurMenu'
import Footer from '../../components/Footer/Footer'
import React, { useEffect } from 'react'
const Menu = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Navbar />
            <OurMenu />
            <Footer />
        </>
    )
}

export default Menu