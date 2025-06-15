import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CartPage from '../../components/CartPage/CartPage'
import React, { useEffect } from 'react'
const Cart = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Navbar />
            <CartPage />
            <Footer />
        </>
    )
}

export default Cart