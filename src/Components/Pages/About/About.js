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
                        <p>Millions of people have used Kingster to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone</p>
                        <Link to="/services">
                            <Button variant="primary">Appoinment</Button>
                        </Link>
                    </Col>
                </Row>
                {/* become instuctor */}
                <Row className=" py-5">
                    <Col xs={12} md={6}>
                        <h2 className="fw-bold">Become an Doctore</h2>
                        <p className="fs-4">The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people</p>
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