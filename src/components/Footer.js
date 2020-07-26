import React from 'react';
import {Link} from 'gatsby';
import '../scss/footer.scss';
import MainLogo from '../images/akcja-serducho-logo-male.png';
import HarborLogo from '../images/przystan-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logos">
                <img className="footer-logos__logo" src={MainLogo} alt="logo Fundacji Akcja Serducho"/>
                <img className="footer-logos__logo" src={HarborLogo} alt="logo Centrum Młodzieżowego Przystań"/>
            </div>

            <div className="footer-contact">
                <p className="footer-contact__title">Dane kontaktowe</p>
                <p className="footer-contact__info">tel. 697 875 431 | akcjaserducho@gmail.com | al. Jana Pawła II 27 70-413 Szczecin </p>
            </div>

            <div className="footer-menu">

                <nav className="footer-nav">
                    <ul className="footer-nav__list">
                        <li className="footer-nav__item">
                            <a className="footer-nav__link" href="https://www.siepomaga.pl/akcjaserducho">Siepomaga.pl</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="https://fanimani.pl/akcjaserducho/" className="footer-nav__link">FaniMani.pl</a>
                        </li>
                    </ul>
                </nav>

                <nav className="footer-nav">
                    <ul className="footer-nav__list">
                        <li className="footer-nav__item">
                            <a href="https://drive.google.com/file/d/1E7QX1vhb9CVJgz-XwhJu5PzipkoSZ1xv/view?usp=sharing" className="footer-nav__link">Statut Fundacji</a>
                        </li>
                        <li className="footer-nav__item">
                            <Link to="/o-fundacji" className="footer-nav__link">Dokumenty</Link>
                        </li>
                        <li className="footer-nav__item">
                            <Link to="/kontakt" className="footer-nav__link">Kontakt</Link>
                        </li>
                    </ul>
                </nav>

            </div>
            
            <div className="footer-info">
                <p className="footer-info__copyrights">
                &copy; Fundacja Akcja Serducho {new Date().getFullYear()}. Wszystkie prawa zastrzeżone<br/>Projekt i wykonanie <span className="site-author">Trojnacki & Draganek</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
