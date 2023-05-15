import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/maha.jpeg';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <h1>
          <Link smooth to='/#start' className='h1_links'>
            Mahathi Periya
          </Link>
        </h1>

        <img src={logo} alt="" />
        <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
          <a
            href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL'
            rel='opener noreferrer'
            target='_blank'
            className='fa fa-envelope'
          ></a>{' '}
          periya.mahathi@gmail.com
        </p>

        <ul className='sidebar-nav mb-auto'>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#projects' className='links'>
              Projects
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#about' className='links'>
              About
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#interest' className='links'>
              Interest
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#education' className='links'>
              Education
            </Link>
          </li>
          {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
        </ul>

        <div className='flip-card-back px-5'>
          <ul className='sidebar-nav d-flex justify-content-between'>
            <li className='sidebar-nav-icons'>
              <a
                href='https://github.com/Mahathi1999'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-github fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://www.linkedin.com/in/mahathi-periya-01199b158/'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-linkedin fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='mailto:periya.mahathi@gmail.com'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-envelope fa-lg'
              ></a>
            </li>
          </ul>
        </div>
        <div
          style={{
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '20px'
          }}
          className='tagtop'
        >
          Made with{' '}
          <a href='#' style={{ textDecoration: 'none' }} className='fa fas fa-heart fa-lg'></a> by
          me.
        </div>
      </div>
    );
  }
}

export default Sidebar;
