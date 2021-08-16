/* eslint-disable react/destructuring-assignment */
import React from 'react';

import '../assets/styles/components/Footer.scss';

import Logo from '../assets/images/weelo-logo.svg';
import DownloadAppStore from './DownloadAppStore';
import Social from './Social';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__logo'>
          <img
            className='img-fluid'
            src={Logo}
            alt='weelo a technology group'
          />
        </div>
        <div className='footer__anchors'>
          <a
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li>our services</li>
          </a>
          <a
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li>about</li>

          </a>
          <a
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li>term of use</li>

          </a>
          <a
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li>privacy policy</li>

          </a>
        </div>
        <div className='footer__social'>
          <Social
            TwitterURL={this.props.TwitterURL}
            LinkedInURL={this.props.LinkedInURL}
            InstagramURL={this.props.InstagramURL}
            TiktokURL={this.props.TiktokURL}
            YoutubeURL={this.props.YoutubeURL}
            FacebookURL={this.props.FacebookURL}
          />
        </div>
        <DownloadAppStore
          GoogleURL={this.props.GoogleURL}
          AppleURL={this.props.AppleURL}
        />
        <span>
          Copyright 2021 © weelo. All rights reserved
        </span>
      </footer>
    );
  }
}

export default Footer;
