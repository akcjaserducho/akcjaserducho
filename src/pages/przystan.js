import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import '../scss/harbor-header.scss';
import '../scss/harbor.scss';
import BgImg from '../components/BgImg';
import {graphql} from 'gatsby';
import SEO from '../components/SEO';

const harbor = ({data}) => {
    return (
        <Layout>
          <SEO title="Przystań" description="Przystań to centrum młodzieżowe, w któym każdy może znaleźć dla siebie miejsce. Organizujemy spotkania, warsztaty, wcieczki." />
            <main className="page, harbor">

            <header className="page__header harbor-header">
                <div className="harbor-header__box1">
                    <h1 className="header__title harbor-header__title">Prowadzimy Centrum Młodzieżowe "Przystań"</h1>
                        <p className="header__text harbor-header__text">Miejsce odkrywania siebie, swoich zainteresowań, miejsce rozwoju, kształtowania poczucia własnej wartości, miejsce nadziei i pewnego spoglądania w przyszłość! Miejsce bezpieczne, życzliwe, kreatywne!</p>
                    </div>
                <div className="harbor-header__box2">
                    <BgImg className="harbor-header__box2-bg" img={data.harborHeaderBg.childImageSharp.fluid}/>
                </div>
            </header>

            <section className="section harbor-about">
                <h2 className="section__title harbor-about__title">To jest właśnie "Przystań"!</h2>
                <p className="section__text harbor-about__text">Pracujemy codziennie w godzinach popołudniowych. Oferując młodzieży możliwość uczestnictwa w spotkaniach, warsztatach, wyjściach czy wyjazdach pragniemy rozwijać ich pasje, zainteresowania, uczyć ich wzajemnego szacunku i otwartości na drugiego człowieka, a jednocześnie wspierać ich w codziennych zmaganiach zwłaszcza w szkole (pomoc w nauce).
                </p>
                {/* <a href="https://pl-pl.facebook.com/pages/category/Nonprofit-Organization/Akcja-Serducho-1615710775391633/" className="btn harbor-about__btn">Obserwuj nas na Facebooku</a> */}

                <div className="main-gallery harbor-gallery">
                        <div className="main-gallery__img-box">
                        <BgImg className="harbor-gallery__img1" img={data.harborImg1.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="harbor-gallery__img2" img={data.harborImg2.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="harbor-gallery__img3" img={data.harborImg3.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="harbor-gallery__img4" img={data.harborImg4.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="harbor-gallery__img5" img={data.harborImg5.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="harbor-gallery__img6" img={data.harborImg6.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="harbor-gallery__img7" img={data.harborImg7.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__btn-box">
                            <a href="https://pl-pl.facebook.com/pages/category/Nonprofit-Organization/Akcja-Serducho-1615710775391633/" className="btn-second harbor-gallery__btn">
                            Obserwuj nas na Facebooku
                            <span className="btn-second__span"></span>
                            <span className="btn-second__span"></span>
                            <span className="btn-second__span"></span>
                            <span className="btn-second__span"></span>
                            </a>
                        </div>
                </div>

                <p className="section__text harbor-about__text">Podopieczni w "Przystani" uczestniczą m. in. w: warsztatach twórczych, fotograficznych, zajęciach sportowych i relaksacyjnych, spotkaniach filmowych (DKF), zajęciach profilaktycznych. Nasza młodzież współtworzy PRZYSTAŃ ucząc się odpowiedzialności za miejsce, w którym się ona mieści, np. projektując jej wystrój.
                </p>
                <p className="section__text harbor-about__text">Działania Centrum Młodzieżowego "Przystań" wspiera grupa najwspanialszych na świecie wolontariuszy.
                </p>
            </section>

            <div className="section our-talents">
                    <h2 className="section__title our-talents__title">Talenty Serducha</h2>
                    <p className="our-talents__text">Prace Marka Słodzińskiego (technika: spray). Tymi pracami Marek zaskoczył nas wszystkich i trzeba przyznać - oczarował. Pewnego dnia po prostu je przyniósł w teczce, nie mówiąc nic… Naszym oczom ukazały się takie oto dzieła:</p>
                    <div className="main-gallery our-talents-gallery">
                        <div className="main-gallery__img-box">
                        <BgImg className="our-talents-gallery__img1" img={data.ourTalentsImg1.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="our-talents-gallery__img2" img={data.ourTalentsImg2.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="our-talents-gallery__img3" img={data.ourTalentsImg3.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="our-talents-gallery__img4" img={data.ourTalentsImg4.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="our-talents-gallery__img5" img={data.ourTalentsImg5.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="our-talents-gallery__img6" img={data.ourTalentsImg6.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                        <BgImg className="our-talents-gallery__img7" img={data.ourTalentsImg7.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__btn-box">
                            <Link to="/wesprzyj-nas" className="btn-second our-talents__btn">
                            Wesprzyj nas
                            <span className="btn-second__span"></span>
                            <span className="btn-second__span"></span>
                            <span className="btn-second__span"></span>
                            <span className="btn-second__span"></span>
                            </Link>
                        </div>
                    </div>
            </div>

            <div className="location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9507.363664914763!2d14.525608155484584!3d53.435552641674924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa094062be6965%3A0x48116fd286ff4262!2sAleja%20Papie%C5%BCa%20Jana%20Paw%C5%82a%20II%2027%2C%2070-413%20Szczecin!5e0!3m2!1spl!2spl!4v1573238830268!5m2!1spl!2spl" width="100%" height="400" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                </div>

            </main>
        </Layout>
    )
}

export default harbor;

export const query = graphql`
query{
	harborHeaderBg:file(relativePath:{eq:"harbor-header-bg.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:2000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  harborImg1:file(relativePath:{eq:"harbor-images/img1.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  harborImg2:file(relativePath:{eq:"harbor-images/img2.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  harborImg3:file(relativePath:{eq:"harbor-images/img4.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  harborImg4:file(relativePath:{eq:"harbor-images/img5.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  harborImg5:file(relativePath:{eq:"harbor-images/img6.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  harborImg6:file(relativePath:{eq:"harbor-images/img7.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  harborImg7:file(relativePath:{eq:"harbor-images/img8.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  ourTalentsImg1:file(relativePath:{eq:"our-talents-images/img1.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  ourTalentsImg2:file(relativePath:{eq:"our-talents-images/img2.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  ourTalentsImg3:file(relativePath:{eq:"our-talents-images/img3.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  ourTalentsImg4:file(relativePath:{eq:"our-talents-images/img4.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  ourTalentsImg5:file(relativePath:{eq:"our-talents-images/img5.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  ourTalentsImg6:file(relativePath:{eq:"our-talents-images/img6.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  ourTalentsImg7:file(relativePath:{eq:"our-talents-images/img7.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;
