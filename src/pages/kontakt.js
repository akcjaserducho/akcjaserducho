import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactInfo"
import "../scss/contact.scss"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Skontaktuj się z nami. Fundacja Akcja Serducho. "
      />
      <main className="page contact-page contact-main-page">
        <header className="contact-page__header contact-main__header">
          <h1 className="header__title">Kontakt</h1>
          {/* <p className="header__text">Możesz skontakować się z nami telefonicznie lub mailowo, albo skorzystać z formularza kontaktowego.</p> */}
        </header>

        <div className="contact-wrapper">
          <ContactInfo
            name="Fundacja Akcja Serducho"
            tel="+48697875431"
            telLink="697 875 431"
            email="akcjaserducho@gmail.com"
          />

          <section className="contact-page__form">
            <h2 className="section__title contact-form-title">Napisz do nas</h2>
            <ContactForm emailAddress="akcjaserducho@gmail.com" />
          </section>

          <div className="contact-links">
            <p className="contact-links__text">
              Możesz skontaktować się również bezpośrednio z naszym psychologiem
              lub pedagogiem
            </p>
            <a className="btn" href="/kontakt-psycholog">
              Kontakt - psycholog
            </a>
            <a className="btn" href="/kontakt-pedagog">
              Kontakt - pedagog
            </a>
          </div>
        </div>

        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9507.363664914763!2d14.525608155484584!3d53.435552641674924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa094062be6965%3A0x48116fd286ff4262!2sAleja%20Papie%C5%BCa%20Jana%20Paw%C5%82a%20II%2027%2C%2070-413%20Szczecin!5e0!3m2!1spl!2spl!4v1573238830268!5m2!1spl!2spl"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        </div>
      </main>
    </Layout>
  )
}

export default contact
