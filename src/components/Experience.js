import React from "react";
import headshot from "../images/headshot.jpg";

const Experience = () => {
  return (
    <section id="experience">
      <div className="subsection-header">
        <h2>Experience</h2>
      </div>
      <div className="about-section">
        <div className="about-image">
          <img src={headshot} alt="headshot" />
        </div>
        <div className="about-content">
          <p>
            Yodfes you as a software developer.
          </p>
          <p>
            Additional paragdfsdfsdfsdfsdfe to provide more details about
            your experience, interests, or goals.
          </p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-content">
          <p>
            Your abosdfsdfsdfsdf you as a software developer.
          </p>
          <p>
            Additional paragraphs can be added here to provide more details about
            your experience, sdfsdfsdfsd, or goals.
          </p>
        </div>
        <div className="about-image">
          <img src={headshot} alt="headshot" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
