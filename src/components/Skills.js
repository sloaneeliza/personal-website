import React from "react";

export const Skills = () => {
  const skills = [
    "Java",
    "Python",
    "Three.js",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Git",
    "Bootstrap",
    "SQL"
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <p>Here are some skills that I have experience with:</p>
        <div className="skill-bx">
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <p>Outside of computer science, I enjoy gaming, reading, and playing with my cat, Tulip.</p>
      </div>
    </section>
  );
};
