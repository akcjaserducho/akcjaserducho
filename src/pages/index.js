import React from "react"
import Layout from "../components/Layout"
import Cooperation from "../components/Cooperation"
import Founders from "../components/Founders"
import "../scss/hero.scss"
import "../scss/how-we-help.scss"
import "../scss/need-help.scss"
import "../scss/trust-us.scss"
import "../scss/cooperation.scss"
import BgImg from "../components/BgImg"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const index = ({ data }) => {
  return (
    <Layout>
      <SEO />

      <main className="homepage page">
        <header className="hero">
          <div className="hero-box1">
            <div className="hero-box1__inner">
              <h1 className="hero__title header__title">Akcja Serducho</h1>
              <p className="hero__text header__text">Serce, pasja, rozwój!</p>
              <p className="hero__text header__text">
                Osoby z wielkimi sercami podejmują sie pracy z młodzieżą i ich
                rodzinami, którzy w swoim życiu doświadczyli wielu trudności.
              </p>
            </div>
          </div>

          <div className="hero-box2">
            <div className="hero-box2__inner"></div>
          </div>

          <div className="hero-box3">
            <div className="hero-box3__inner"></div>
          </div>

          <div className="hero-box4">
            <div className="hero-box4__inner">
              <a href="/wesprzyj-nas" className="btn hero__btn">
                Zobacz, jak możesz pomóc
              </a>
            </div>
          </div>
        </header>

        <section className="section how-we-help">
          <div className="how-we-help__box1">
            <h2 className="section__title how-we-help__title">Jak pomagamy?</h2>
          </div>
          <div className="how-we-help__box2">
            <BgImg
              className="how-we-help__box2-bg"
              img={data.howWeHelpImg1.childImageSharp.fluid}
            />
          </div>
          <div className="how-we-help__box3">
            <BgImg
              className="how-we-help__box3-bg"
              img={data.howWeHelpImg2.childImageSharp.fluid}
            />
          </div>
          <div className="how-we-help__box4">
            <BgImg
              className="how-we-help__box4-bg"
              img={data.howWeHelpImg3.childImageSharp.fluid}
            />
          </div>
          <div className="how-we-help__box5">
            <BgImg
              className="how-we-help__box5-bg"
              img={data.howWeHelpImg4.childImageSharp.fluid}
            />
          </div>
          <div className="how-we-help__box6">
            <p className="section__text how-we-help__text">
              Działamy dla młodzieży i z młodzieżą. Prowadzimy Centrum
              Młodzieżowe „Przystań” - miejsce, które żyje i cały czas się
              tworzy, miejsce, w którym bije nasze serce. Krok po kroku, z
              ogromną pokorą i cierpliwością idziemy do przodu budując naszą
              Przystań, uwalniamy nasze myśli, uruchamiamy kreatywność, by
              wyglądało i funkcjonowało tak, jak tego pragniemy - by było
              bezpieczne, otwarte, zapewniało pomoc i wsparcie, pozwalało być
              sobą, umożliwiało poznawanie siebie i rozwój. Przystań to miejsce
              ogromnej wiary w każdego człowieka.
            </p>
          </div>
          <div className="how-we-help__box7">
            <a href="/o-fundacji" className="btn-second how-we-help__btn">
              Dowiedz się więcej
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
            </a>
          </div>
          <div className="how-we-help__box8">
            <a href="/przystan" className="btn-second how-we-help__btn">
              Poznaj "Przystań"
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
            </a>
          </div>
        </section>

        <section className="section need-help">
          <div className="need-help__box1">
            <h2 className="section__title need-help__title">
              Potrzebujesz pomocy?
            </h2>
          </div>
          <div className="need-help__box2">
            <p className="section__text need-help__text">
              Nasze działania kierujemy do dzieci i młodzieży od 12 lat wzwyż.
              Nie dzielimy, nie segregujemy na lepszych i gorszych… Jeśli
              stwierdzisz, że to może być miejsce dla Ciebie - po prostu do nas
              napisz… Jeśli jako rodzic czujesz, że Twoje dziecko potrzebuje
              dobrych i motywujących relacji - zgłoś się do nas… Naszym celem
              jest poczucie bezpieczeństwa dzieci i młodzieży… bo wierzymy, że
              wówczas mają szansę rozkwitnąć. Zapraszamy do kontaktu.
            </p>
          </div>
          <div className="need-help__box3">
            <a href="/kontakt" className="btn-second">
              Skontaktuj się z nami
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
            </a>
          </div>
          <div className="need-help__box4">
            <BgImg
              className="need-help__box4-bg"
              img={data.needHelpImg1.childImageSharp.fluid}
            />
          </div>
          <div className="need-help__box5">
            <BgImg
              className="need-help__box5-bg"
              img={data.needHelpImg2.childImageSharp.fluid}
            />
          </div>
          <div className="need-help__box6">
            <BgImg
              className="need-help__box6-bg"
              img={data.needHelpImg3.childImageSharp.fluid}
            />
          </div>
        </section>

        <section className="section trust-us">
          <div className="trust-us__box1">
            <h2 className="section__title trust-us__title">
              Dlaczego możesz nam zaufać?
            </h2>
          </div>
          <div className="trust-us__box2">
            <p className="section__text trust-us__text">
              Łączymy dobre serca z profesjonalizmem, szanujemy indywidualność i
              wyjątkowość każdego człowieka, poznajemy i rozmawiamy. Pracujemy
              na zaufaniu i relacjach. A przede wszystkim wszyscy cały czas się
              rozwijamy i pracujemy nad sobą. Spotkanie z drugim człowiekiem
              jest dla nas darem życia, odkrywaniem piękna tego świata,
              możliwości, które nieraz są głęboko zasypane trudnymi
              doświadczeniami. Wspólnymi siłami wydobywamy dobro na światło
              dzienne.
            </p>
          </div>
          <div className="trust-us__box3">
            <a to="/zespol" className="btn-second">
              Poznaj nasz zespół
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
              <span className="btn-second__span"></span>
            </a>
          </div>
          <div className="trust-us__box4">
            <BgImg
              className="trust-us__box4-bg"
              img={data.trustUsImg1.childImageSharp.fluid}
            />
          </div>
          <div className="trust-us__box5">
            <BgImg
              className="trust-us__box5-bg"
              img={data.trustUsImg2.childImageSharp.fluid}
            />
          </div>
          <div className="trust-us__box6">
            <BgImg
              className="trust-us__box6-bg"
              img={data.trustUsImg3.childImageSharp.fluid}
            />
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Z kim współpracujemy?</h2>
          <Cooperation />
        </section>

        <section className="section">
          <h2 className="section__title">Kto nas wspiera?</h2>
          <Founders />
        </section>
      </main>
    </Layout>
  )
}

export default index

export const query = graphql`
  query {
    howWeHelpImg1: file(relativePath: { eq: "how-we-help-images/img1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    howWeHelpImg2: file(relativePath: { eq: "how-we-help-images/img2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    howWeHelpImg3: file(relativePath: { eq: "how-we-help-images/img3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    howWeHelpImg4: file(relativePath: { eq: "how-we-help-images/img4.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    needHelpImg1: file(relativePath: { eq: "need-help-images/img1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    needHelpImg2: file(relativePath: { eq: "need-help-images/img2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    needHelpImg3: file(relativePath: { eq: "need-help-images/img3.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    trustUsImg1: file(relativePath: { eq: "trust-us-images/img1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    trustUsImg2: file(relativePath: { eq: "trust-us-images/img2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    trustUsImg3: file(relativePath: { eq: "trust-us-images/img3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
