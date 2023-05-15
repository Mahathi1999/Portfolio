import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                           Work Experience 
                          </h2>
                          <h6>April(2022)-Present</h6>
                          <p>
                            I am currently working as <b>ML Data Associate</b> at{' '}
                           
                              <b>Amazon Development Centre</b>
                         
                            <i>
                            is basically where most of the core operations related to Software, Support services, Retail services etc takes place. It is the backbone which earns the bread and butter for the company.
                            </i>{' '}
                            
                          </p>
                          <h6>February(2020)-April(2022)</h6>
                          <p>
                            I had worked as a <b>Research Associate</b> at{' '}
                           
                              <b>RR Donnelley</b>
                         
                            <i>
                            is an American integrated communications company that provides marketing and business communications, commercial printing, and related services. Its corporate headquarters are located in Chicago, Illinois, United States.
                            </i>{' '}
                            
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                          Bachelors at P.B. Siddhartha College of Arts and Science <span>2016-2019</span>
                          </h2>
                          <p>
                            I completed my Bachelors in B.C.A (Bachelors's in Computer Application)
                            from P.B. Siddhartha College of Arts and Science  with overall 76%.
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
