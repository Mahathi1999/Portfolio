import React, { Component } from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              My name is <b>MAHATHI PERIYA</b> and I am currently working as{" "}
              <b>ML Data Associate</b> at
              <b>
                {" "}
                <a
                  className={classes.link}
                  target="_blank"
                  href="https://www.amazon.jobs/en/landing_pages/amazon-aachen-development-center"
                   rel="noopener noreferrer"
                >
                  Amazon Development Centre
                </a>
              </b>
              . I completed my degree in B.C.A- Bachelor of Computer Applications from P.B. Siddhartha College of Arts and Science. I am much interested in developing new
              things which excite me a lot. &#128516;
            </p>
            <p className={classes.br}>
              I love exploring new technologies and being a practitioner, I like
              to stay on top of latest trends. I try to leave every line of code
              I write more readable, accessible, and modular.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
