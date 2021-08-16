/* eslint-disable react/destructuring-assignment */
import React from 'react';

import '../assets/styles/components/DownloadAppStore.scss';

import AppStore from '../assets/images/appStore.svg';
import GooglePlay from '../assets/images/googlePlay.svg';

class DownloadAppStore extends React.Component {
  render() {
    return (
      <div className='store d-flex align-items-center justify-content-center'>
        <a
          href={this.props.AppleURL}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='img-fluid'
            src={AppStore}
            alt='Download on the App Store'
          />
        </a>
        <div className='store--separator' />
        <a
          href={this.props.GoogleURL}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='img-fluid'
            src={GooglePlay}
            alt='Get It On Google Play'
          />
        </a>
      </div>
    );
  }
}

export default DownloadAppStore;
