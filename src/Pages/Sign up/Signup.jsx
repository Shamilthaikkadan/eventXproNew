import React from 'react';
import './Signup.css';
import EButtons from '../../components/Buttons/EButtons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ArrowRight from '../../assets/svg/icons/ArrowRight.svg'
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='signup-container'>
      <div className="signup-form">
        <div className="signup-head">
          <span className='signup-text'>Create Your Account</span>
          <span className='welcome-text'>Welcome Back! Please enter your details.</span>
        </div>
        <div className='form-details'>
          <div className="name">
            <span className='name-text'>Name</span>
            <input className='user-input' type="text" />
          </div>

          <div className="phone">
            <PhoneInput
              country={'in'}
              placeholder="Enter phone number"
              className='phone-input'
            />
          </div>

          <div className="name">
            <span className='name-text'>Email</span>
            <input className='user-input' type="email" />
          </div>

          <div className="name">
            <span className='name-text'>Password</span>
            <input className='user-input' type="password" />
          </div>
          <div className='forgot-password'>
            <div className='check-box'>

              <input type="checkbox" />
              <span>I agree to the <a className='terms'>Terms of service</a> and <a className='terms'>Privacy policies</a> of <br />
                Veuz concepts</span>


            </div>

          </div>
          <EButtons name='Sign Up' icon={ArrowRight} />
        </div>
      </div>
      <div className='sign-up'>
        <span>Don't have an account ?</span>
        <Link to='/auth/login'>
          Login now
        </Link>
      </div>
    </div>
  );
}
