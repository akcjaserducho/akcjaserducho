import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../scss/layout.scss';
import {Helmet} from 'react-helmet';

const Layout = ({children}) => {
    return (
        <>
        <Helmet>
        <script async type="text/javascript" src="https://widget2.fanimani.pl/7VAL8sXJuenQ82QSGnBqNa.js"></script>
        </Helmet>
        <Navbar />
        {children}
        <Footer/>
        </>
    )
};

export default Layout
