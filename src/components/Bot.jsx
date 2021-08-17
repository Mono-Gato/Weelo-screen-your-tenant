/* eslint-disable react/destructuring-assignment */
import React from 'react';

import '../assets/styles/components/Bot.scss';

class Bot extends React.Component {
  render() {
    return (
      <a
        href={this.props.WhatsappURL}
        target='_blank'
        className='bot'
        rel='noreferrer'
      >
        <span className='bot__message'>
          can i help you?
        </span>
        <div className='bot__image' />
      </a>
    );
  }
}

export default Bot;
