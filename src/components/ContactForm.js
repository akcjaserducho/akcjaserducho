import React, { Component } from 'react';
import '../scss/contact-form.scss';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            agreement: false,
            correct: false,
            errors: {
                emailError: false,
                messageError: false,
                agreementError: false,
            },
        }
    }

    errorMessages = {
        emailIncorrect: 'Podaj prawidłowy adres e-mail',
        messageIncorrect: 'Wpisz swoją wiadomość',
        agreementIncorrect: 'Wymagana zgoda na przetwarzanie danych osobowych'
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    handleCheck = (e) => {
        this.setState({
            agreement: e.target.checked,
        });
    }

    formValidation = () => {
        let email = false;
        let message = false;
        let agreement = false;
        let correct = false;

        if(this.state.email.length > 5 && this.state.email.indexOf('@') !== -1 && this.state.email.indexOf('.') !== -1 && this.state.email.indexOf('@') >= this.state.email.length - 1)  {
            email = true
        };

        if (this.state.message.length > 10) {
            message = true
        };

        if (this.state.agreement) {
            agreement = true
        }

        if (email && message && agreement) {
            correct = true
        };

        return ({
            email,
            message,
            agreement,
            correct
        })
    }

    handleSubmit = (e) => {
        const validation = this.formValidation();

        if(!validation.correct) {
            e.preventDefault();
            this.setState({
                errors: {
                    emailError: !validation.email,
                    messageError: !validation.message,
                    agreementError: !validation.agreement,
                }
            });
        } else {
            this.setState({
                correct: true,
            })
        }
    }

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit} action={this.state.correct ? `https://formspree.io/${this.props.emailAddress}` : ""} method={this.state.correct ? "POST" : ""}>
                <p className="contact-form__field">
                    <label className="contact-form__label" htmlFor="email">E-mail</label>
                    <input className={this.state.errors.emailError && (this.state.email.length <= 5 || this.state.email.indexOf('@') === -1 || this.state.email.indexOf('@') === (this.state.email.length - 1) || this.state.email.indexOf('.') === -1 || this.state.email.indexOf('.') === (this.state.email.length - 1) ) ? "contact-form__input contact-form__input--incorrect" : "contact-form__input"} type="email" name="email" id="email" placeholder="email@email.com" value={this.state.email} onChange={this.handleChange}/>
                    <div className="error-box">
                        {this.state.errors.emailError && (this.state.email.length <= 5 || this.state.email.indexOf('@') === -1 || this.state.email.indexOf('@') === (this.state.email.length - 1) || this.state.email.indexOf('.') === -1 || this.state.email.indexOf('.') === (this.state.email.length - 1) ) ? <span aria-live="polite" role="alert" className="contact-form__error">{this.errorMessages.emailIncorrect}</span> : ""}
                    </div>
                </p>
                <p className="contact-form__field">
                    <label className="contact-form__label" htmlFor="message">Wiadomość</label>
                    <textarea className={this.state.errors.messageError && this.state.message.length <= 10 ? "contact-form__textarea contact-form__textarea--incorrect" : "contact-form__textarea"} name="message" id="message" placeholder="Twoja wiadomość" cols="30" rows="10" value={this.state.message} onChange={this.handleChange}></textarea>
                    <div className="error-box">
                        {this.state.errors.messageError && this.state.message.length <= 10 ? <span aria-live="polite" role="alert" className="contact-form__error">{this.errorMessages.messageIncorrect}</span> : ""}
                    </div>
                </p>


                <p className="contact-form__agreement">
                    <label className="checkbox-wrapper">
                        <input className="checkbox" type="checkbox" id="contact-checkbox" checked={this.state.agreement} onChange={this.handleCheck}/>
                        <span className="checkbox-custom"></span>
                    </label>
                    
                    <label className="contact-from__checkbox-label" htmlFor="contact-checkbox">Wyrażam zgodę na przetwarzanie moich danych osobowych w związaku z wysłaniem wiadomości. Przesłanie danych jest dobrowolne, ale konieczne do przetworzenia zapytania. Przysługuje mi prawo dostępu do moich danych oraz możliwość ich poprawiania i żądania zaprzestania ich przetwarzania. Administratorem danych jest Fundacja Akcja Serducho, adres rejestracyjny ul. Marii Konopnickiej 29, 71-151 Szczecin.
                    </label>
                    <div className="error-box">
                        {this.state.errors.agreementError && !this.state.agreement ? <span aria-live="polite" role="alert" className="contact-form__error">{this.errorMessages.agreementIncorrect}</span> : ""}
                   </div>
                </p>

                <button type="submit" className="contact-form__btn btn">Wyślij</button>
            </form>
        )
    }
}
