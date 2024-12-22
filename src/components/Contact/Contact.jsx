import React from "react";
import { Container } from "react-bootstrap";
import "../Contact/css/contact.css";
import ContactDetails from "./ContactDetails"; // Import the new component

const Contact = () => {
    return (
        <>
            <div className="main-contact-section">
                <section>
                    <div className="contact-section">
                        <Container fluid className="p-0">
                            <div className="heading-container">
                                <h1 className="bottom-heading">
                                    HONORING MEMORIES <br /> PRESERVING LEGACIES
                                </h1>
                            </div>
                        </Container>
                    </div>
                </section>
                <ContactDetails /> {/* Use the new ContactDetails component */}
            </div>
        </>
    );
};

export default Contact;
