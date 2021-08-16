/* eslint-disable react/destructuring-assignment */
import React from 'react';

import '../assets/styles/components/Social.scss';

import IconTwitter from '../assets/images/social/twitter.svg';
import IconLinkedIn from '../assets/images/social/linkedIn.svg';
import IconInstagram from '../assets/images/social/instagram.svg';
import IconTiktok from '../assets/images/social/tiktok.svg';
import IconYoutube from '../assets/images/social/youtube.svg';
import IconFacebook from '../assets/images/social/facebook.svg';

class Social extends React.Component {
  render() {
    return (
      <div className='menu__list--footer--social'>
        <a href={this.props.TwitterURL} target='_blank' rel='noreferrer'>
          <img className='img-fluid' src={IconTwitter} alt='twitter logo' />
        </a>
        <a href={this.props.LinkedInURL} target='_blank' rel='noreferrer'>
          <img className='img-fluid' src={IconLinkedIn} alt='linkedIn logo' />
        </a>
        <a href={this.props.InstagramURL} target='_blank' rel='noreferrer'>
          <img className='img-fluid' src={IconInstagram} alt='instagram logo' />
        </a>
        <a href={this.props.TiktokURL} target='_blank' rel='noreferrer'>
          <img className='img-fluid' src={IconTiktok} alt='tiktok logo' />
        </a>
        <a href={this.props.YoutubeURL} target='_blank' rel='noreferrer'>
          <img className='img-fluid' src={IconYoutube} alt='youtube logo' />
        </a>
        <a href={this.props.FacebookURL} target='_blank' rel='noreferrer'>
          <img className='img-fluid' src={IconFacebook} alt='facebook logo' />
        </a>
      </div>
    );
  }
}

export default Social;
