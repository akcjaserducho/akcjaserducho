import React from 'react';
import Layout from '../components/Layout';
// import AboutCalendar from '../components/AboutComponents/AboutCalendar';
// import AboutProjects from '../components/AboutComponents/AboutProjects';
import AboutDocuments from '../components/AboutComponents/AboutDocuments';
import '../scss/about-header.scss';
import '../scss/about.scss';
import BgImg from '../components/BgImg';
import {graphql} from 'gatsby';
import SEO from '../components/SEO';
 
const about = ({data}) => {
    return (
        <Layout>
          <SEO title="O fundacji" description="Poznaj szczecińską fundację Akcja Serducho. Pomagamy młodzieży, wierząc, że nasi podopieczni mają ogromny potencjał." />
           <main className="page about">
                <header className="page__header about-header">
                    <div className="about-header__box2">
                        <h1 className="header__title about-header__title">Fundacja</h1>
                        <p className="about-header__text"> Wierzymy, że ci, do których chcemy wyjść i o których pragniemy powalczyć mają w sobie ogromny potencjał, który jest jednak zasłonięty cierpieniem, wyuczoną bezradnością, poczuciem beznadziejności czy brakiem wiary w siebie.</p>
                    </div>
                    <div className="about-header__box1">
                        <BgImg className="about-header__box1-bg" img={data.aboutHeaderBg.childImageSharp.fluid}/>
                    </div>
                </header>

                <article className="section about-article">
                        <h2 className="section__title">Poznaj nas bliżej</h2>
                        <div className="section__text">
                          <p>Fundacja Akcja Serducho powstała w 2016 roku z inicjatywy osób z wielkimi sercami, które dostrzegły potrzebę pracy z młodzieżą i ich rodzinami, którzy w swoim życiu doświadczyli wielu trudności. Fundatorami są widoczni na zdjęciu Cezary Figurski oraz Andrzej Beyger.</p>
                          <p>Prezesem Fundacji jest Basia Chojnacka, adiunkt w Instytucie Pedagogiki Uniwersytetu Szczecińskiego, osoba z ogromnym doświadczeniem w pracy z dziećmi i młodzieżą w placówkach wsparcia dziennego, której działaniom przyświeca przede wszystkim wiara w drugiego człowieka. Działania fundacji wspierają psycholog (Kasia Buluk), wychowawca (Ania Zbyszyńska) oraz grupa wspaniałych wolontariuszy (studenci i absolwenci pracy socjalnej, pedagogiki, socjologii).</p>
                        </div>
                        <div className="about-article__img-box">
                          <BgImg className="about-article__img" img={data.foundersImg.childImageSharp.fluid}/>
                        </div>
                        
                </article>

                <div className="main-gallery about-gallery">
                        <div className="main-gallery__img-box">
                            <BgImg className="main-gallery__img1" img={data.aboutImg1.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                            <BgImg className="main-gallery__img2" img={data.aboutImg2.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                            <BgImg className="main-gallery__img3" img={data.aboutImg3.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                            <BgImg className="main-gallery__img4" img={data.aboutImg4.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                            <BgImg className="main-gallery__img5" img={data.aboutImg5.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                            <BgImg className="main-gallery__img6" img={data.aboutImg6.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                            <BgImg className="main-gallery__img7" img={data.aboutImg7.childImageSharp.fluid}/>
                        </div>
                        <div className="main-gallery__img-box">
                            <BgImg className="main-gallery__img8" img={data.aboutImg8.childImageSharp.fluid}/>
                        </div>
                </div>

                <section className="section mission">
                    <h2 className="section__title mission__title">Misja Fundacji</h2>
                    <ul className="mission__list">
                        <li className="mission__list-item">
                        Kompleksowa praca z młodzieżą i rodzinami - zorganizowanie miejsca dla młodzieży, w którym będzie mogła ona realizować swoje pasje, uzyskać wsparcie i pomoc w trudnych sytuacjach.
                        </li>
                        <li className="mission__list-item">
                        Stworzenie systemu opieki i pomocy psychologicznej i pedagogicznej dla młodzieży i rodzin.
                        </li>
                        <li className="mission__list-item">
                        Zorganizowanie profesjonalnego systemu wspierania rodziny.
                        </li>
                        <li className="mission__list-item">
                        Koordynowanie i wspieranie procesu rozwoju osobistego, kształcenia i usamodzielnienia podopiecznych.
                        </li>
                        <li className="mission__list-item">
                        Stworzenie programu organizacji pracy wolontariuszy i ich rozwoju.
                        </li>
                        <li className="mission__list-item">
                        Animacja, aktywizacja i motywacja podopiecznych, ich rodzin i środowisk do działania na rzecz społeczności, samopomocy i rozwoju.
                        </li>
                        <li className="mission__list-item">
                        Edukacja bezpośrednich beneficjentów działań Fundacji oraz szerszej społeczności w zakresie szacunku, solidarności, integracji społecznej - odpowiadanie na potrzeby osób wykluczonych, zagrożonych wykluczeniem i marginalizacją - szeroko pojęte działania profilaktyczne.
                        </li>
                    </ul>
                </section>

                {/* <AboutCalendar /> */}
                {/* <AboutProjects /> */}
                <AboutDocuments />
           </main>
        </Layout>
    )
}

export default about

export const query = graphql`
query{
	aboutHeaderBg:file(relativePath:{eq:"about-header-bg.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:2000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  aboutImg1:file(relativePath:{eq:"about-gallery/img1.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  aboutImg2:file(relativePath:{eq:"about-gallery/img2.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  aboutImg3:file(relativePath:{eq:"about-gallery/img3.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  aboutImg4:file(relativePath:{eq:"about-gallery/img4.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  aboutImg5:file(relativePath:{eq:"about-gallery/img5.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  aboutImg6:file(relativePath:{eq:"about-gallery/img6.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  aboutImg7:file(relativePath:{eq:"about-gallery/img7.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  aboutImg8:file(relativePath:{eq:"about-gallery/img8.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:1000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  foundersImg:file(relativePath:{eq:"founders.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;
