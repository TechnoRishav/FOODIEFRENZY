import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CheckoutMe from "../../components/Checkout/Checkout"
import React, { useEffect } from 'react'
const Checkout = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Navbar />
            <CheckoutMe />
            <Footer />
        </>
    )
}

export default Checkout