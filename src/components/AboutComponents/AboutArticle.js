import React from 'react';
// import {Link} from 'gatsby';

const AboutArticle = () => {
    return (
        <article className="section about-section">
            <div className="about-section__header">
                <h2 className="section__title">Poznaj nas bliżej</h2>
                <p className="section__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam inventore iste aliquid aspernatur vitae recusandae dolor error officia aliquam? Molestiae corporis fugiat doloribus ipsam totam soluta sapiente distinctio magnam?</p>
                <div className="gallery about-gallery">GALLERY</div>
                <a className="btn" href="https://pl-pl.facebook.com/pages/category/Nonprofit-Organization/Akcja-Serducho-1615710775391633/">Śledź nas na Facebooku</a>
            </div>

            <section className="subsection about-subsection">
                <h3 className="subsection__title about-subsection__title">Etapy działania fundacji</h3>
                <ol className="ordered-list">
                    <li className="ordered__list-item">Założenie placówki wsparcia dziennego – klubu młodzieżowego wraz kompleksową współpracą z rodzinami wychowanków – zorganizowanie miejsca dla młodzieży, w którym będzie mogła ona realizować swoje pasje, uzyskać wsparcie i pomoc w trudnych sytuacjach.</li>
                    <li className="ordered-list__item">Streetworking – praca z młodzieżą.</li>
                    <li className="ordered-list__item">Zorganizowanie profesjonalnego systemu wspierania rodziny.</li>
                    <li className="ordered-list__item">Koordynowanie procesu usamodzielniania się wychowanków placówek opiekuńczo-wychowawczych i resocjalizacyjnych poprzez przygotowanie dla nich mieszkań treningowych, w których będą mogli w bezpiecznych warunkach rozwijać samodzielność życiową.</li>
                </ol>
            </section>

            <section className="subsection about-subsection">
                <h3 className="subsection__title about-subsection__title">Plany</h3>
                <p className="subsection__text about-subsection__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quisquam iusto saepe suscipit ratione perferendis numquam. Laudantium hic reiciendis quae.</p>
            </section>
        </article>
    )
}

export default AboutArticle
