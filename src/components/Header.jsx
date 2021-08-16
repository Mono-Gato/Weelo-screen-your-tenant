/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
//import { Link } from 'react-router-dom';

import Logo from '../assets/images/weelo-logo.svg';
import IconTriangle from '../assets/images/triangle.svg';
import IconWeeloApp from '../assets/images/weelo-icon-app.svg';
import IconUser from '../assets/images/user.svg';

import Social from './Social';

import '../assets/styles/components/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className='header d-flex flex-row align-items-center justify-content-between'>
        <div className='header__logo'>
          <img
            className='header__logo--image img-fluid'
            src={Logo}
            alt='weelo a technology group'
          />
        </div>

        <div
          className='header__navigation d-flex align-item-center justify-content-end'
          id='menu-modal-inject'
        >
          <nav
            className='navigation__menu'
            role='navigation'
          >
            <input
              type='checkbox'
              className='navigation__menu--input d-none'
              id='menu-toggle'
            />
            <label
              htmlFor='menu-toggle'
              className='navigation__menu--label d-flex align-items-end justify-content-between'
            >
              <span className='navigation__menu--label--bar navigation__menu--label--bar1' />
              <span className='navigation__menu--label--bar navigation__menu--label--bar2' />
              <span className='navigation__menu--label--bar navigation__menu--label--bar3' />
            </label>
            <ul className='navigation__menu--list d-flex justify-content-between'>
              <div className='menu__list--user d-flex flex-column align-items-center'>
                <a href='/' className='menu__list--user--app d-flex align-items-center'>
                  <img className='img-fluid' src={IconWeeloApp} alt='icon app weelo' />
                  <span>get the app</span>
                </a>
                <a href='/' className='menu__list--user--signIn d-flex align-items-center'>
                  <img className='img-fluid' src={IconUser} alt='icon user' />
                  sign in
                </a>
              </div>
              <div className='menu__list--container'>
                <li className='menu__list--item'>
                  <a
                    href='/'
                    className='menu__list--item--anchor d-flex align-items-center'
                    type='button'
                    data-toggle='collapse'
                    data-target='#collapseExample'
                    aria-expanded='false'
                    aria-controls='collapseExample'
                  >
                    our services
                    <i
                      className='icon__triangle '
                      style={{ backgroundImage: `url(${IconTriangle})` }}
                    />
                  </a>
                  <ul className='collapse' id='collapseExample'>
                    <li className='menu__list--item dropdown-item '>
                      <a
                        href='/'
                        className='menu__list--item--anchor '
                        type='button'
                      >
                        tenant screening
                      </a>
                    </li>
                    <li className='menu__list--item dropdown-item '>
                      <a
                        href='/'
                        className='menu__list--item--anchor '
                        type='button'
                      >
                        collect rent online
                      </a>
                    </li>
                    <li className='menu__list--item dropdown-item '>
                      <a
                        href='/'
                        className='menu__list--item--anchor '
                        type='button'
                      >
                        pay rent online
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='menu__list--item'>
                  <a
                    href='/'
                    className='menu__list--item--anchor d-flex'
                    type='button'
                  >
                    about
                  </a>
                </li>
              </div>

              <div className='menu__list--footer d-flex flex-column justify-content-center align-items-center'>
                <Social
                  TwitterURL={this.props.TwitterURL}
                  LinkedInURL={this.props.LinkedInURL}
                  InstagramURL={this.props.InstagramURL}
                  TiktokURL={this.props.TiktokURL}
                  YoutubeURL={this.props.YoutubeURL}
                  FacebookURL={this.props.FacebookURL}
                />
                <span>Copyright 2021 © weelo. All rights reserved</span>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
