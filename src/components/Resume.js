import React from "react";
import resume from "../images/resume.jpg";
import resumepdf from "../images/resumepdf.pdf";

const Resume = () => {
  return (
    <section id="resume">
      <h1>Resume</h1>
    <a href={resumepdf} target="_blank" rel="noopener noreferrer">
      <img src={resume} alt="Resume" style={{ width: "300px", height: "auto" }} />
    </a>
    </section>
  );
};

export default Resume;
