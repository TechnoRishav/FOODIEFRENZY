import Navbar from '../../components/Navbar/Navbar'
import MyOrder from '../../components/MyOredrsPage/MyOrdersPage'
import Footer from '../../components/Footer/Footer'
import React, { useEffect } from 'react'
const MyOrders = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Navbar />
            <MyOrder />
            <Footer />
        </>
    )
}

export default MyOrders