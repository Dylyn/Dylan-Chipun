import React from "react";
import headshot from "../images/headshot.jpg";


const About = () => {
  return (
    <section id="about">
      <div className="subsection-header">
        <h2>About Me</h2>
      </div>
      <div className="about-section">
        <div className="about-image">
          <img src={headshot} alt="headshot" />
        </div>
        <div className="about-content">
          <p>
            Your about me text goes here. Write a compelling description about
            yourself, your journey, and what drives you as a software developer.
          </p>
          <p>
            Additional paragraphs can be added here to provide more details about
            your experience, interests, or goals.
          </p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-content">
          <p>
            Your about me text goes here. Write a compelling description about
            yourself, your journey, and what drives you as a software developer.
          </p>
          <p>
            Additional paragraphs can be added here to provide more details about
            your experience, interests, or goals.
          </p>
        </div>
        <div className="about-image">
          <img src={headshot} alt="headshot" />
        </div>
      </div>
    </section>
  );
};

export default About;
