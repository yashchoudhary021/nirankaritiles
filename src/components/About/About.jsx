import { Container } from "react-bootstrap";
import "./css/about.css";
import AboutUsDetails from "./css/AboutUsDetails";

const About = () => {
    return (
        <>
            <section className="about-main-section">
                <div className="about-section">
                    <Container fluid className="p-0">
                        <h1 className="about-heading">
                            Tiles That Endure, <br />
                            A Legacy That <br />Grows.
                        </h1>
                    </Container>
                </div>
                <AboutUsDetails />
            </section>
        </>
    );
};

export default About;
