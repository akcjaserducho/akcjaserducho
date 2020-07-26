import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import '../scss/contact.scss';
import SEO from '../components/SEO';

const contact = () => {
    return (
        <Layout>
            <SEO title="Kontakt - pedagog"/>
            <main className="page contact-page contact-pedagogue-page">

            <header className="contact-page__header contact-pedagogue__header">
                <h1 className="header__title">Skontaktuj się z pedagogiem</h1>
            </header>

            <div className="contact-wrapper">

                    <ContactInfo name="dr Basia Chojnacka - Prezes Fundacji" tel="+48697875431" telLink="697 875 431" email="basia.chojnacka@gmail.com" />

                    <section className="contact-page__form">
                        <h2 className="section__title contact-form-title">Napisz wiadomość</h2>
                        <ContactForm emailAddress="basia.chojnacka@gmail.com" />
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