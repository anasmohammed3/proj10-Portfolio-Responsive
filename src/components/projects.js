import React from "react";
import { Container , Row , Col, Tab , Nav } from "react-bootstrap";
import proj1 from "../img/8.png"
import proj2 from "../img/9.png"
import proj3 from "../img/10.png"
import proj4 from "../img/11.png"
import proj5 from "../img/12.png"
import proj6 from "../img/13.png"
import proj7 from "../img/14.png"
import proj8 from "../img/15.png"
import proj9 from "../img/16.png"
import proj10 from "../img/17.png"
import proj11 from "../img/18.png"
import proj12 from "../img/19.png"
import ProjectImages from "./projectsImages"

const Projects = () => {
    const projects = [
        { title: "watch website", imageUrl: proj1 , description:"Design & Development" },
        { title: "halloween website", imageUrl: proj2 , description:"Design & Development" },
        { title: "portfolio website", imageUrl: proj3 , description:"Design & Development"},
        { title: "cart shopping website ", imageUrl: proj4 , description:"Design & Development"},
        { title: "winter website", imageUrl: proj5 , description:"Design & Development"},
        { title: "advice generator app", imageUrl: proj6 , description:"Design & Development"},
        { title: "body Mass Index calculator", imageUrl: proj7 , description:"Design & Development"},
        { title: "Space tourism", imageUrl: proj8 , description:"Design & Development"},
        { title: "News homepage", imageUrl: proj9 , description:"Design & Development"},
        { title: "cart shopping website", imageUrl: proj10 , description:"Design & Development"},
        { title: "netflix website", imageUrl: proj11 , description:"Design & Development"},
        { title: "gym website", imageUrl: proj12 , description:"Design & Development"},
    ];

    return (
        <section className="theProjects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>My Projects</h2>
                        <p>This projects represents a significant milestone in my frontend development journey</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">1st Section</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2nd Section</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">3rd Section</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectImages
                                                key={index}
                                                title={project.title}
                                                description={project.description}
                                                imageUrl={project.imageUrl}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"></Tab.Pane>
                                <Tab.Pane className="thirdSec" eventKey="third">This projects represents a significant milestone in my frontend development journey</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
