import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import SEO from '../components/SEO';

const contact = () => {
    return (
        <Layout>
            <SEO title="Kontakt - psycholog"/>
            <main className="page contact-page contact-psyhologist-page">

                <header className="contact-page__header contact-psychologist__header">
                    <h1 className="header__title">Skontaktuj się z psychologiem</h1>
                </header>

                <div className="contact-wrapper">

                    <ContactInfo name="mgr Katarzyna Buluk - psycholog" email="kasia.buluk@wp.pl" />

                    <section className="contact-page__form">
                        <h2 className="section__title contact-form-title">Napisz wiadomość</h2>
                        <ContactForm emailAddress="kasia.buluk@wp.pl" />
                    </section>

                    <div className="contact-links">
                        <Link className="btn" to="/kontakt">Wróć do kontaktu ogólnego</Link>
                    </div>
                </div>

            </main>
        </Layout>
    )
}

export default contact