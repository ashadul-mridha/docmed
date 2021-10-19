import React from 'react';
import { Col, Container, Row , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutImg from '../../../images/about.jpg';

const About = () => {
    return (
        <div>
        <div className="about-us">
            <Container>
                {/* explore course section  */}
                <Row className="d-flex align-items-center py-5">
                    <Col xs={12} md={5}>
                        <div className="w-100">
                            <img src={aboutImg} width="100%" height="450px" alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={7}>
                        <h2>The world’s Best Hospital </h2>
                        <p className="fs-5">For over three decades, we have specialised in specific areas of medicine - mental health, orthopaedics, neurology, surgery and general medicine. This approach has given us an in-depth understanding of specific disorders and their treatments, enabling us to focus on providing the best treatment options and care for our patients. Each year, our 10,500 employees treat and care for around 320,000 patients at currently 26 locations in Asia And Europe</p>
                        <Link to="/services">
                            <Button variant="primary">Appoinment</Button>
                        </Link>
                    </Col>
                </Row>
                {/* become instuctor */}
                <Row className=" py-5">
                    <Col xs={12} md={6}>
                        <h2 className="fw-bold">How Become an Doctore</h2>
                        <p className="fs-4">Developing the skills and knowledge necessary to practice medicine requires a great deal of time and effort, so it is important to research the training process before taking the plunge. The following section outlines how physicians prepare for their careers.</p>
                        <Button variant="primary" className="me-2">Become a Doctore</Button>
                        <Button variant="danger">Watch Video </Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={'https://i.ibb.co/YB5CQ59/x3-png-pagespeed-ic-Shb-XP-lpv-J.webp'} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default About;