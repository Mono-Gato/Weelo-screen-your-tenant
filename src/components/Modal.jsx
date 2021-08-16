/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import '../assets/styles/components/modal.scss';

function Modal() {

  return ReactDOM.createPortal(
    <div className='modal fade' id='loginModal' tabIndex='-1' aria-labelledby='loginModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='loginModalLabel'>login</h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>
                  email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>
                  password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <div className='form-footer'>
                <button
                  type='submit'
                  className='btn btn-primary'
                  data-dismiss='modal'
                >
                  login
                </button>
                <Link
                  to='/forgotPassForm'
                  type='button'
                  className='btn btn-secondary'
                >
                  forgot password?
                </Link>
              </div>

            </form>
          </div>
          <div className='modal-footer'>
            <Link
              to='/'
              type='button'
              className=''
            >
              dont have account?
              {' '}
              <span>Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
}

export default Modal;
