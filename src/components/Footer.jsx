/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link
            to={this.props.OurServicesPath}
            target='_blank'
            rel='noopener noreferrer'
          >
            <li>our services</li>
          </Link>
          <Link
            to={this.props.AboutPath}
            target='_blank'
            rel='noopener noreferrer'
          >
            <li>about</li>

          </Link>
          <Link
            to={this.props.TermOfUsePath}
            target='_blank'
            rel='noopener noreferrer'
          >
            <li>term of use</li>

          </Link>
          <Link
            to={this.props.PrivacyPolicyPath}
            target='_blank'
            rel='noopener noreferrer'
          >
            <li>privacy policy</li>

          </Link>
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
