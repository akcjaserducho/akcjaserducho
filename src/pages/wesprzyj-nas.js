import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'gatsby';
import '../scss/support-header.scss';
import '../scss/support.scss';
import BgImg from '../components/BgImg';
import {graphql} from 'gatsby';
import fanimaniIMG from '../images/fanimani-img.gif';
import SEO from '../components/SEO';

const support = ({data}) => {
    return (
        <Layout>
            <SEO title="Wesprzyj nas" description="Okaż serducho! Dowiedz się, jak możesz nas wesprzeć i pomagać razem z nami." />
            <main className="page support">

                <header className="page__header support-header">
                    <div className="support-header__box1">
                        <h1 className="header__title support-header__title">Okaż serducho!</h1>
                        <p className="header__text support-header__text">Podejmowane przez nas działania i rozwój Fundacji są możliwe dzięki Waszym otwartym sercom. To dzięki darowiznom dobrych ludzi możemy pomagać skuteczniej i poszerzać naszą ofertę.</p>
                    </div>
                    <div className="support-header__box2">
                        <BgImg className="support-header__box2-bg" img={data.supportHeaderBg.childImageSharp.fluid}/>
                    </div>
                </header>

                <section className="section your-help">
                    <h2 className="section__title your-help__title">Wasze wsparcie</h2>
                    <p className="section__text your-help__title">
                    Dzięki Wam powstało Centrum Młodzieżowe „Przystań”, w którym młodzi ludzie uzyskują pomoc w nauce, wsparcie emocjonalne, otrzymują możliwość poznawania siebie, rozwoju swoich zainteresowań, odkrywania możliwości. Organizujemy warsztaty, wyjścia, spotkania oraz wyjazdy (2019 - zimowy wyjazd na narty oraz wakacyjny wyjazd w Tatry, a także majowy weekendowy pobyt w Międzyzdrojach).
                    </p>  
                </section>

                <div className="main-gallery support-gallery">
                        <div className="main-gallery__img-box">
                            <div className="support-gallery__img1"></div>
                        </div>
                        <div className="main-gallery__img-box">
                            <div className="support-gallery__img2"></div>
                        </div>
                        <div className="main-gallery__img-box">
                            <div className="support-gallery__img3"></div>
                        </div>
                        <div className="main-gallery__img-box">
                            <div className="support-gallery__img4"></div>
                        </div>
                        <div className="main-gallery__img-box">
                            <div className="support-gallery__img5"></div>
                        </div>
                        <div className="main-gallery__img-box">
                            <div className="support-gallery__img6"></div>
                        </div>
                        <div className="main-gallery__img-box">
                            <div className="support-gallery__img7"></div>
                        </div>
                        <div className="main-gallery__img-box">
                            <div className="support-gallery__img8"></div>
                        </div>
                </div>

                <section className="section our-goals">
                    <h2 className="section__title our-goals__title">Nasze cele</h2>
                    <p className="section__text our-goals__text">Przed nami jeszcze wiele wyzwań i planów, do których realzacji potrzebujemy pomocy:</p>
                    <ul className="our-goals__list">
                        <li className="our-goals__list-item">Poszukiwanie większego lokalu na profesjonalną działalność Centrum Młodzieżowego i jego sukcesywne wyposażanie.</li>
                        <li className="our-goals__list-item">Poszerzenie oferty o stałe poradnictwo psychologiczne, pedagogiczne, prawne, terapię pedagogiczną, logopedyczną, socjoterapię, doradztwo zawodowe oraz trening umiejętności społecznych.</li>
                        <li className="our-goals__list-item">Realizacja kilkumiesięcznych projektów: artystycznych, społecznych, sportowych (w zależności od zainteresowań wychowanków).</li>
                        <li className="our-goals__list-item">Stworzenie systemu wsparcia rodziny.</li>
                        <li className="our-goals__list-item">Stworzenie systemu stypendialnego dla wychowanków mającego na celu rozwijanie ich zainteresowań i umiejętności.</li>
                        <li className="our-goals__list-item">Stworzenie programu szkoleń dla wolontariuszy.</li>
                        <li className="our-goals__list-item">Dokształcanie i rozwój kadry pracującej z młodzieżą i rodzinami (szkolenia, warsztaty, kursy).</li>
                    </ul>
                </section>
                
                <article className="section support-options">
                    <h2 className="section__title support-options__title">Jak możesz nam pomóc?</h2>

                    <section className="subsection support-option">
                        <h3 className="subsetion__title support-option__title">Przekaż darowiznę</h3>
                        <p className="support-option__text">Fundacja Akcja Serducho<br/>ul. Marii Konopnickiej<br/>71-151 Szczecin<br/>Nr konta: 62 2490 0005 0000 4530 2848 4568<br/>Tytuł: darowizna na cele statutowe</p>
                        <p className="support-option__text">Darowiznę możesz odliczyć od podatku od osób prawnych, jak również fizycznych.</p>
                        <Link to="/darowizna-a-podatki" className="btn">Odpisywanie od podatku</Link>
                    </section>

                    <section className="subsection support-option-flex">
                        <div className="support-option__wrapper">
                            <h3 className="subsetion__title support-option__title">Siepomaga</h3>
                            <p className="support-option__text">Siepomaga.pl - to portal, za pomocą którego można w prosty sposób wesprzeć darowizną organizację lub konkretną inicjatywę. Również nasza Fundacja posiad swój profil na tej stronie. Możecie wspierać nas <a href="https://www.siepomaga.pl/akcjaserducho">tutaj</a>.</p>
                            <p className="support-option__text">Istnieje możliwość dokonania jednorazowych darowizn lub regularnych - jako stały pomagacz / pomagaczka. Szczególnie zależy nam na regularnym wsparciu. Pomoże nam to bowiem w planowaniu naszych działań.</p>
                        </div>
                        <a href='https://www.siepomaga.pl/akcjaserducho' title='Siepomaga.pl - zbiórki charytatywne'>
                            <iframe frameBorder='0' height='200px' src='https://www.siepomaga.pl/organizacja/akcjaserducho/banner' width='100%'></iframe>
                        </a>
                    </section>

                    <section className="subsection support-option-flex">
                        <div className="support-option__wrapper">
                            <h3 className="subsetion__title support-option__title">Fanimani</h3>
                            <p className="support-option__text">
                            Fanimani.pl to portal, dzięki któremu pomagasz dokonując zakupów przez Internet. Wystarczy, ze założysz konto na stronie <a href="https://fanimani.pl/">fanimani.pl</a>, wybierzesz naszą organizację jako te, której chcesz pomagać. Możesz również zainstalować w swojej przeglądarce przypominajkę, która w momencie realizowania zakupów na stronie sklepu, przypomni Ci o dokonaniu darowizny.
                            </p>
                        </div>
                        <div className="support-option__object">
                            <a href="https://fanimani.pl/akcjaserducho/">
                                <img src={fanimaniIMG} alt="fanimani.pl/akcjaserducho"/>
                            </a>
                        </div>
                    </section>

                    <section className="subsection support-option">
                        <h3 className="subsetion__title support-option__title">Zostań Serduchowym św. Mikołajem</h3>
                        <p className="support-option__text">Jest to akcja, którą realizujemy przed świętami Bożego Narodzenia. Nasi podopieczni piszą listy do św. Mikołaja, a my poszukujemy osób, które tymi świętymi Mikołajami zostaną Wówczas przekazujemy list i prosimy o odpowiedź, zarówno w postaci prezentu, jak i w postaci listu do naszych podopiecznych.</p>
                        <Link to="/kontakt" className="btn">Skontaktuj się z nami</Link>
                    </section>

                    {/* <section className="subsection support-option">
                        <h3 className="subsetion__title support-option__title"></h3>
                        <p className="support-option__text"></p>
                    </section> */}
                </article>

            </main>
        </Layout>
    )
}

export default support;

export const query = graphql`
query{
	supportHeaderBg:file(relativePath:{eq:"support-header-bg2.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:2000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;
