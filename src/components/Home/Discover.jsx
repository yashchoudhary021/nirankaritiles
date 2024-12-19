import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./css/Discover.css";

const Discover = () => {
    return (
        <section className="Discover-section">
            <Container fluid className="p-0"> 
                <Row>
                    <Col className="Discover-background">
                        {/* Overlay */}
                        <div className="Discover-overlay">
                            <div className="Discover-content">
                                <p className="Discover-subtitle">New Arrival</p>
                                <h1 className="Discover-title">Discover Our New Collection</h1>
                                <Button variant="dark" id="discover-btn" className="Discover-button">
                                    EXPLORE
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Discover;
