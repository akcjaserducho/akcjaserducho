import React, {useState} from 'react';
import {Link} from 'gatsby';
import links from '../constants/links';
import '../scss/navbar.scss';
import {FaFacebookF, FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import Logo from '../images/fundacja-akcja-serducho-logo.png';

const Navbar = () => {
    const [isOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(isOpen => !isOpen);
    }

    return (
        <div className="navbar">
            <div className="navbar__header">
                <div className="navbar__logo"><Link to="/"><img src={Logo} alt="akcjaserducho.pl"/></Link></div>
                
                <button type="button" aria-label="menu" title="menu" className={isOpen ? "hamburger hamburger--open" : "hamburger"} onClick={toggleNav}>
                    <span className="hamburger__box">
                        <span className="hamburger__inner"></span>
                    </span>
                </button>

            </div>

            <div className={isOpen ? "navbar__menu navbar__menu--open" : "navbar__menu"}>
                {/* <ul className="menu__icons"></ul> */}

                <nav className="menu__links">
                    <ul className="menu__list">
                        {links.map((link, index) => {
                            return(
                                <li key={index} className="menu__item">
                                    <Link className="menu__link" to={link.path}>{link.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <ul className="menu-contact">
                    <li className="menu-contact__item">
                        <a href="tel:+48697875431" className="menu-contact__link">
                            <FaPhone/>
                        </a>
                    </li>
                    <li className="menu-contact__item">
                        <a href="mailto:akcjaserducho@gmail.com" className="menu-contact__link">
                            <FaEnvelope/>
                        </a>
                    </li>
                    <li className="menu-contact__item">
                        <a href="https://goo.gl/maps/fgvGVudFD5MTzGKt8" className="menu-contact__link">
                            <FaMapMarkerAlt/>
                        </a>
                    </li>
                    <li className="menu-contact__item">
                        <a href="https://pl-pl.facebook.com/pages/category/Nonprofit-Organization/Akcja-Serducho-1615710775391633/" className="menu-contact__link">
                            <FaFacebookF/>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar
