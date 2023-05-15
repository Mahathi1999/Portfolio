import React from 'react';
import classes from './Projects.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import tactoe from "../images/tictactoe.png"
import pagination from "../images/pagination.png"
import paintApp from "../images/Paint.png"

// Web projects
const cardItem = [
  {
    link: 'https://incredible-beijinho-03812d.netlify.app/',
    title: 'Tic-Tac-Toe',
    techStack: 'Tech Stack:  HTML, CSS, Javascript',
    desc: 'Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players.',
    image: tactoe
  },
  {
    link:'https://sweet-klepon-80274a.netlify.app/',
    title: 'Pagination with different tables',
    techStack: 'Tech Stack:  MERN Stack',
    desc: 'It is sample pagination Application',
    image: pagination
  },
  {
    link:'https://luminous-peony-936b2f.netlify.app/',
    title: 'Simple Paint APP with HTMLS canvas',
    techStack: 'Tech Stack: HTML, CSS, Javascript',
    desc: 'It is simple paint Application using HTML5 canvas feature',
    image: paintApp
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank'  rel="noopener noreferrer">
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
      </ScrollAnimation>
    </div>
  );
}
