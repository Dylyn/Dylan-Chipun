import React, { useEffect, useState } from "react";
import headshot from "../images/headshot.jpg";
import soloCruise from "../images/soloCruise.jpeg";
import guitarChubs from "../images/guitarChubs.JPG"


const About = () => {
  const images = [soloCruise, headshot, guitarChubs]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]); // Dependency array to avoid stale closures

  return (
    <section id="about">
      <div className="subsection-header">
        <h2>About Me</h2>
      </div>
      <div className="about-section">
        <div className="gallery">
          <div className="gallery-container">
            {images.map((image, index) => (
              <img
                key={index}
                className={`gallery-item gallery-item-${index + 1} ${index === currentIndex ? 'active' : ''}`}
                src={image}
                alt={`gallery-${index}`}
                style={{
                  opacity: index === currentIndex ? 1 : 0.5,
                  transform: index === currentIndex ? 'translateX(0)' : index < currentIndex ? 'translateX(-100%)' : 'translateX(100%)',
                  transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                }}
              />
            ))}
          </div>
          <div className="gallery-controls"></div>
        </div>
        <div className="about-content">
          <p>
          Hi, I'm Dylan, a fifth-year Computing student at Queen's University with a passion for software development. 
          I love solving complex problems and building innovative solutions, whether it's through coding, creative designs, 
          or exploring new ideas.
          </p>
          <p>
          I have experience working as a software developer at RBC and will be returning as a new graduate in 2025–2026. 
          My time in both academic and professional settings has strengthened my ability to think critically, adapt quickly,
           and collaborate effectively.
          </p>
          <p>Beyond technical skills, I'm always eager to learn and take on new challenges. Whether it's diving into 
            new technologies or refining my skills, I'm committed to continuous growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
