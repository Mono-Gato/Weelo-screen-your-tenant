import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Heading from '../components/Heading';
import ScreenTenant from '../components/ScreenTenant';
import Footer from '../components/Footer';

const GooglePlayURL = 'https://play.google.com/store';
const AppStoreURL = 'https://www.apple.com/co/app-store/';

const TwitterURL = 'https://twitter.com/MillionandUp';
const LinkedInURL = 'https://www.linkedin.com/company/weelocol/';
const InstagramURL = 'https://www.instagram.com/weelo_col/';
const TiktokURL = 'https://www.tiktok.com/';
const YoutubeURL = 'https://www.youtube.com/channel/UCmnVS7FdjhQM8Xqg3WRFO3A';
const FacebookURL = 'https://www.facebook.com/weelo.col';

function App() {
  return (
    <div>
      <div className='mainBackground' />
      <Header
        TwitterURL={TwitterURL}
        LinkedInURL={LinkedInURL}
        InstagramURL={InstagramURL}
        TiktokURL={TiktokURL}
        YoutubeURL={YoutubeURL}
        FacebookURL={FacebookURL}
      />
      <main>
        <Heading />
        <ScreenTenant
          GoogleURL={GooglePlayURL}
          AppleURL={AppStoreURL}
        />
      </main>
      <Footer
        TwitterURL={TwitterURL}
        LinkedInURL={LinkedInURL}
        InstagramURL={InstagramURL}
        TiktokURL={TiktokURL}
        YoutubeURL={YoutubeURL}
        FacebookURL={FacebookURL}
        GoogleURL={GooglePlayURL}
        AppleURL={AppStoreURL}
      />
    </div>
  );
}

export default App;

