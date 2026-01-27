import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medscan from "../../Assets/Projects/medscan.jpeg";
import legaldoc from "../../Assets/Projects/legaldoc.jpeg";
import diet from "../../Assets/Projects/diet.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medscan}
              isBlog={false}
              title="Mediscan"
              description="Personal Prescription scanner which really useful for the patients to store their prescriptions and access them easily."
              ghLink="https://github.com/mridulas20/Mediscan-webapplication"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={legaldoc}
              isBlog={false}
              title="Generative AI for Demystifying Legal Documents "
              description="An AI-powered application that uses Generative AI to demystify legal documents and make them more accessible to the public."
              ghLink="https://github.com/mridulas20/Generative-AI-for-Demystifying-Legal-Documents"
               />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diet}
              isBlog={false}
              title="Diet Recommendation System"
              description="An AI-powered application that uses Generative AI to demystify legal documents and make them more accessible to the public."
              ghLink="https://github.com/mridulas20/Diet-Recommendation-System"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
