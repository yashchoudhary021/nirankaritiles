import React from "react";
import { Container } from "react-bootstrap";
import "../Contact/css/contact.css";
import { Row, Col } from 'react-bootstrap';

const ContactDetails = () => {
    const handleClick = () => {
        window.open("https://www.google.com/maps/place/Nirankari+tiles+and+building+material+Kalwar+road+govindpura+jaipur/@26.9516908,75.6994867,16.63z/data=!4m6!3m5!1s0x396c4cd82ab19765:0xda152b2ac918c25f!8m2!3d26.952286!4d75.7021492!16s%2Fg%2F11gfh9nzy4?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D", "_blank");
    };
    return (
        <section className="contact-details-section">
            <Container fluid className="p-0">
                <div className="contact-heading">
                    <h1>Contact Us</h1>
                    <h2>JAIPUR</h2>
                </div>
                <Row>
                    <Col lg={6}>
                        <div className="map-container" onClick={handleClick}>
                            <img
                                src="/assets/contact/govindpuramap.jpg"
                                alt="Map showing location"
                                className="map-image"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="details-container">
                            <h3>CONTACT DETAILS</h3>
                            <p>
                                <strong>Office in Jaipur</strong>
                                <br />
                                Nirankari tiles and building material
                                <br />
                                Kalwar road, Govindpura, Jaipur
                            </p>
                            <p>
                                <strong>Phone:</strong> 099292 32125
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactDetails;
