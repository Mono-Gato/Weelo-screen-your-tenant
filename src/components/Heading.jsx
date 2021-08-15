import React from 'react';

import '../assets/styles/components/Heading.scss';

class Heading extends React.Component {
  render() {
    return (
      <section className='heading container'>
        <h1>
          the most extensive
          tenant report
        </h1>
        <p className='heading__price'>
          for just
          {' '}
          <b>$9.99</b>
          {' '}
          | $30.00
        </p>
      </section>
    );
  }
}

export default Heading;
