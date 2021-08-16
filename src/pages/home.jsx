import React from 'react';

import ScreenTenant from '../components/ScreenTenant';

const GooglePlayURL = 'https://play.google.com/store';
const AppStoreURL = 'https://www.apple.com/co/app-store/';

class Home extends React.Component {
  render() {
    return (
      <>
        <ScreenTenant
          GoogleURL={GooglePlayURL}
          AppleURL={AppStoreURL}
        />
      </>
    );
  }
}

export default Home;
