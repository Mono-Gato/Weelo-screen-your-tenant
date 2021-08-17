import React from 'react';
import { Link } from 'react-router-dom';

import NF404 from '../assets/images/bot/404Error.svg';

import '../assets/styles/components/NotFound.scss';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className='notFound'>
          <img src={NF404} alt='opps! 404 not found' className='img-fluid' />

          <Link
            to='Weelo-screen-your-tenant/'
            className='notFound__anchor'
          >
            Go to
            {' '}
            <b>Home</b>
          </Link>

        </div>
      </>
    );
  }
}

export default Home;
