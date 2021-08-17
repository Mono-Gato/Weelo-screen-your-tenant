import React from 'react';
import { Link } from 'react-router-dom';

import NF404 from '../assets/images/bot/Bot-404.svg';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className='NotFound'>
          <img src={NF404} alt='Opps! 404 Not Found' className='img-fluid' />
          <div className='NotFound__anchor'>
            <Link to='/'>
              Go to
              <b>Home</b>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
