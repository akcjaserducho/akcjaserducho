import React from 'react'

const ContactInfo = ({name, tel, telLink, email}) => {
    return (
        <section className="contact-info">
            <h2 className="contact-info__name">{name}</h2>
            <address className="contact-info__data">
                {tel ? <a className="contact-info__link" href={`tel:${tel}`}>{telLink}</a> : ''}
                <a className="contact-info__link" href={`mailto:${email}`}>{email}</a>
        </address>
        </section>
        
    )
}

export default ContactInfo
