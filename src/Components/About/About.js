//WHEN I am presented with the About Me section
//THEN I see a recent photo or avatar of the developer and a short bio about them

import React from "react";
import "./About.css";
import "../../Terminals/Terminal.css";

const About = () => {
  return (
    <section className="main section">
      <div className="about">
        <div className="text">
          <div className="header">
            <h1>About Me</h1>
          </div>
          <p>
            My name is Kalina Boksa and I'm a web developer and designer based
            in the Chicago Area.I graduted from the University of Iowa in May of
            2020 with a B.A. in Health and Human Physiology.
            <br />⠀
          </p>
          I am looking for a career change in web development and completed A
          certificate in Fullstack web development.
          <p>
            <br />⠀
          </p>
          <p>
            Currently I'm a student at{" "}
            <a
              className="school"
              href="https://www.northwestern.edu/academics/graduate-a-to-z.html#m"
              target="_blank"
              rel="noreferrer"
            >
              Northwestern Coding Certificate
            </a>{" "}
            and spend most of my time designing websites. When I'm not busy, you
            can find me obsessing over food, cats and traveling.
            <br />⠀
          </p>
        </div>
        <div className="avatar"></div>
      </div>
    </section>
  );
};

export default About;
