import React from "react";
import Layout from "../components/Layout";
import SEO from '../components/SEO';
import '../scss/taxes.scss';

const Taxes = () => {
  return (
    <Layout>
        <SEO title="Darowizna a podatki"/>
            <main className="page">

                <header className="contact-page__header contact-psychologist__header">
                    <h1 className="header__title">Darowizna a podatki</h1>
                </header>

                <section className="section taxes-section">
                    <h2 className="section__title taxes-section__title">Darowizny od osób prawnych</h2>
                    <p className="taxes-section__text">Odlicz do 10% w skali roku. Wszystkie osoby prawne, które zechcą przekazać część swojego dochodu na rzecz Fundacji Akcja Serducho mogą skorzystać z odliczenia podatkowego od dochodu za rok {new Date().getFullYear()}. Ustawa o podatku od osób prawnych w art. 18 ust. 1 pkt 1 i 7 określa zasady dotyczące możliwości odliczenia darowizny od podatku dochodowego. Zgodnie z tym przepisem można odliczyć darowizny:</p>
                    <ol>
                        <li>Przekazane na cele zawierające się w sferze zadań publicznych (określne w art. 4 ustawy z dnia 24 kwietnia 2003 r. o działalności pożytku publicznego i wolontariacie) organizacjom (m.in. fundacjom), o których mowa a art. 3 ust. 2 i 3 tej ustawy, prowadzącym działalność pożytku publicznego w sferze zadań publicznych (niekoniecznie posiadającym status organizacji pożytku publicznego) określonych w tej ustawie.</li>
                        <li>Przekazanie na cele kultu religijnego.</li>
                    </ol>
                    <p className="taxes-section__text">Od podstawy opodatkowania można odliczyć darowizny w kwocie nie wyższej niż 10% uzyskanego dochodu (art. 18 ust 1 pkt 1 i 7 ust. o podatku dochodowym od osób prawnych).</p>
                    <p className="taxes-section__text">Należy pamiętać, iż w przypadku, gdy przedmiotem darowizny są pieniądze, to powinna ona być udokumentowana dowodem wpłaty na rachunek bankowy Fundacji Akcja Serducho. Zaś w przypadku darowania rzeczy lub usług - dokumentem potwierdzającym przekazanie tej darowizny oraz dokumentami potwierdzającymi faktyczne wydatki związane z tą darowizną.</p>
                    <p className="taxes-section__text">Nie ma znaczenia, czy darowiznę odliczamy od dochodu (podatek dochodowy albo podatek tonażowy) czy od przychodu (ryczałt ewidencjonowany). Możemy odliczać nawet część darowizny w jednym zeznaniu, część w innym. Ważne, by tej samej kwoty nie odliczyć dwukrotnie. W zeznaniu wykazujemy, komu i ile przekazaliśmy tytułem darowizny.</p>

                </section>
                <section className="section taxes-section">
                    <h2 className="section__title taxes-section__title">Darowizny od osób prawnych</h2>
                    <p className="taxes-section__text">Odlicz do 6% w skali roku. Wszystkie osoby fizyczne, które zechcą przekazać część swojego dochodu na rzecz Fundacji Akcja Serducho, mogą skorzystać z odliczenia podatkowego od dochodu za {new Date().getFullYear()} rok. Ustawa o podatku od osób fizycznych w art. 26 ust. 1 pkt 9 określa zasady dotyczące możliwości odliczenia darowizny od podatku dochodowego.</p>
                    <p className="taxes-section__text">Od podstawy opodatkowania można odliczyć darowizny w kwocie nie wyższej niż 6% uzyskanego dochodu (art. 26 ust. 1 pkt 9 ust. o podatku dochodowym od osób fizycznych). Ulga w danym roku dotyczy darowizn dokonanych w okresie od 1 stycznia do 31 grudnia danego roku.</p>
                    <p className="taxes-section__text">Należy pamiętać, iż w przypadku, gdy przedmiotem darowizny są pieniądze, to powinna ona być udokumentowana dowodem wpłaty na rachunek bankowy Fundacji Akcja Serducho. Zaś w przypadku darowania rzeczy lub usług - dokumentem potwierdzającym przekazanie tej darowizny oraz dokumentami potwierdzającymi faktyczne wydatki związane z tą darowizną.</p>
                    <p className="taxes-section__text">Nie ma znaczenia, czy darowiznę odliczamy od dochodu (podatek dochodowy albo podatek tonażowy) czy od przychodu (ryczałt ewidencjonowany). Możemy odliczać nawet część darowizny w jednym zeznaniu, część w innym. Ważne, by tej samej kwoty nie odliczyć dwukrotnie. W zeznaniu wykazujemy, komu i ile przekazaliśmy tytułem darowizny.</p>
                </section>
                

            </main>
    </Layout>
)
}

export default Taxes