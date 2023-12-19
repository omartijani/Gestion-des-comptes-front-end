
import React from 'react';
import '../style/Contact.css'; 

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-heading">
                Contactez Lydec
            </h1>
            <div className="contact-info">
                <div className="contact-section">
                    <h2 className="contact-subheading">Coordonnées</h2>
                    <p className="contact-detail">Téléphone: 0522312020</p>
                    <p className="contact-detail">Email: lydec@gmail.com</p>
                </div>
                <div className="contact-section">
                    <h2 className="contact-subheading">Sites Web</h2>
                    <p className="contact-detail">
                        Site principal: <a href="https://www.lydec.ma">www.lydec.ma</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
