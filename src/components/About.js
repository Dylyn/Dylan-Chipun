import React, { useEffect, useState } from "react";
import headshot from "../images/headshot.jpg";
import soloCruise from "../images/soloCruise.jpeg";
import guitarChubs from "../images/guitarChubs.JPG";
import snowboarding from "../images/snowboarding.jpeg";
import japanGroup from "../images/japanGroup.jpg";
import youtubeChannel from "../images/youtubeChannel.png";
import headshotNew from "../images/headshotNEW.jpg";
import hkGroup from "../images/hkGroup.jpg";


const About = () => {
  const images = [headshotNew, headshot, hkGroup]; 
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle imasges
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } /*else {
        entry.target.classList.remove('show');
      }*/
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <section id="about">
      <div className="subsection-header hidden">
        <h2>About Me</h2>
      </div>
      <div className="about-section">
        <figure className="icon-cards mt-3  hidden">
          <div className="icon-cards__content">
            {images.map((image, index) => (
              <div className="icon-cards__item d-flex align-items-center justify-content-center" key={index} style={{ background: 'none' }}>
                <img src={image} alt={`carousel-item-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
              </div>
            ))}
          </div>
        </figure>
        <div className="about-content">
          <p class="hidden">
          Hi, I'm Dylan, a fifth-year Computing student at Queen's University with a passion for software development. 
          I love solving complex problems and building innovative solutions, whether it's through coding, creative designs, 
          or exploring new ideas.
          </p>
          <p class="hidden">
            Beyond technical skills, I'm always eager to learn and take on new challenges. Whether it's diving into 
            new technologies or refining my skills, I'm committed to continuous growth.
          </p>
          <h2 className="hidden items-left">Hobbies</h2>
          <div className="about-image items-left hidden">
            <img src={snowboarding} alt="snowboarding" style={{ marginRight: '20px' }} />
            <div>
              <h2 className="hidden" style={{ fontSize: '20px' }}>Snowboarding</h2>
              <p className="hidden">
                I have always been interested with sports. I started with hockey as a kid, then began
                exploring other sports such as basketball, muay thai, and skateboarding.
              </p>
              <p className="hidden">
                Of all the sports I enjoy, snowboarding has always been my favourite. I began snowboarding 
                at the age of 9 and it has became my favourite sport ever since. One of my life goals is 
                to backcountry snowboard down the Swiss Alps!
              </p>
            </div>
          </div>
          <div className="about-image items-right hidden">
            <div>
              <h2 className="hidden" style={{ fontSize: '20px' }}>Travelling</h2>
              <p className="hidden">
                I find that travelling is one of the best ways to relax and gain new perspectives on life.
                 It provides unforgettable memories and experiences that develop my understanding of the world.
              </p>
              <p className="hidden">
                One of my most fond trips was my vacation to Japan where I spent around one month with my friends
                exploring one of my favourite cultures. 
              </p>
              </div>
              <img src={japanGroup} alt="japanGroup" style={{ marginLeft: '20px' }} />
          </div>
          <div className="about-image items-left hidden">
            <img src={youtubeChannel} alt="youtubeChannel" style={{ marginRight: '20px' }} />
            <div>
              <h2 className="hidden" style={{ fontSize: '20px' }}>Video Creating</h2>
              <p className="hidden">
                I have always had a passion for video creating growing up. Because of that, over the past 2 years
                I have been documenting my vacations and editing them with the skills I learned using the Adobe Suites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
