import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { FaArrowCircleDown } from 'react-icons/fa';
import Hello from '../images/Hello.jpg';


class CarouselImages extends Component {
  render() {
    return (
      <div className={classes.carousel_container} id='start'>
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={6000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className={classes.image_container}>
            <img className={classes.image} src={Hello} alt='myImage' />
            <div className={classes.h1}>
              <h1>I'm Mahathi Periya</h1>
              <a
                href='https://drive.google.com/file/d/1os-hsvvd99QiVsxsqQtXvpj2355KXMcB/view?usp=share_link'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default CarouselImages;
