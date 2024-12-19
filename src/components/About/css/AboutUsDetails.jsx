import { Container, Row, Col } from 'react-bootstrap';
import '../css/aboutusdetails.css';

const AboutUsDetails = () => {
    return (
        <section className='aboutusDetails-section'>
            <Container>
                <Row>
                    <Col lg="6">
                        <h1 className="about-title">About Us</h1>
                        <p className="about-subtitle"><strong>Nirankari Tiles: Years of Excellence</strong></p>
                        <p className="about-text">
                            Founded 21 years ago by Mr. Vimal Ranwa, Nirankari Tiles began with a commitment to providing high-quality tiles, stones, and sanitary products. Over the years, the company earned a reputation for reliability and exceptional service, expanding its offerings to meet the needs of every project. Today, Nirankari Tiles is a trusted brand, delivering top-tier building materials with a focus on quality and customer satisfaction.
                        </p>
                    </Col>
                    <Col lg="1"></Col>
                    <Col lg="4">
                        <img
                            src="/assets/about/factory.jpg"
                            className="about-image"
                            alt="factory"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutUsDetails;
