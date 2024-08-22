import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const firstTabExperience = [
    {
      title: "3D Web Developer",
      company: "Jumpstart",
      description: "Contributed to developing an interactive 3D website for Freedom Company and the Fab Lab at Vanderbilt University using React, Three.js, and Node.js.",
      date: "June 2024 - August 2024"
    },
    {
      title: "Cybersecurity Analyst",
      company: "Resilience Inc",
      description: "Assisted with implementing proper security measures company-wide for 7 months.",
      date: "January 2024 - July 2024"
    },
    {
      title: "Vice President",
      company: "Belmont University's Cybersecurity Club",
      description: "Led a group of students through learning about cybersecurity and training for security competitions.",
      date: "Spring 2024 - December 2025"
    }
  ];

  return (
    <section className="experience" id="experiences">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Experience</h2>
              <Row>
                {
                  firstTabExperience.map((experience, index) => {
                    return (
                      <ProjectCard
                        key={index}
                        {...experience}
                      />
                    )
                  })
                }
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
