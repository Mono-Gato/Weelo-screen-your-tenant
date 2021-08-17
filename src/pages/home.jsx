import React from 'react';

import ScreenTenant from '../components/ScreenTenant';
import Heading from '../components/Heading';

const GooglePlayURL = 'https://play.google.com/store';
const AppStoreURL = 'https://www.apple.com/co/app-store/';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className='mainBackground' />
        <main>
          <Heading />
          <ScreenTenant
            GoogleURL={GooglePlayURL}
            AppleURL={AppStoreURL}
          />
        </main>
      </>
    );
  }
}

export default Home;
