/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import '../assets/styles/components/ScreenTenant.scss';

import Modal from './Modal';

class ScreenTenantForm extends React.Component {

  handleClick = (e) => {
    console.log('Button was Clicked');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was Submitted');
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='screenTenant__form d-flex flex-column'
      >
        <h4>
          screen your tenant
        </h4>
        <div className='form-group'>
          <label htmlFor='tenantNameInput'>
            tenant name
          </label>
          <input
            onChange={this.props.onChange}
            name='tenantName'
            type='text'
            className='form-control screenTenant__form--input'
            value={this.props.formValues.tenantName}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='tenantMobileInput'>
            tenant mobile
          </label>
          <input
            onChange={this.props.onChange}
            name='tenantNumber'
            type='number'
            className='form-control screenTenant__form--input'
            value={this.props.formValues.tenantNumber}
          />
        </div>
        <button
          onClick={this.handleClick}
          type='submit'
          className='btn screenTenant__form--button'
          data-toggle='modal'
          data-target='#loginModal'
        >
          screen tenant
        </button>
        <Modal />
      </form>
    );
  }
}

export default ScreenTenantForm;
