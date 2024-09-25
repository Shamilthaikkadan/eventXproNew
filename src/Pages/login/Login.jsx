import React from 'react';
import './Login.css';
import openEye from '../../assets/svg/icons/OpenEye.svg'
import EButtons from '../../components/Buttons/EButtons';
import ArrowRight from '../../assets/svg/icons/ArrowRight.svg'
function Login() {
  return (
    <div className='login-container'>
      <div className="login-form">
        <div className='login-head'>
          <span className='login-text'>Login</span>
          <span className='welcome-text'>Welcome Back ! please enter your details.</span>
        </div>
        <div className='form-details'>
          <div className="username">
            <span className='username-text'>Username</span>
            <input className='user-input' type="text" />
          </div>
          <div className="Password">
            <div className='password-eye'>
              <span className='username-text'>Password</span>
              <img src={openEye} alt="" />
            </div>
            <div>
              <input className='user-input' type="password" />
            </div>
          </div>
          <div className='forgot-password'>
            <div className='check-box'>

              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <a href="" className='forgot-pass-text'>Forgot password?</a>
          </div>
          <EButtons name='Login' icon={ArrowRight} />
        </div>
      </div>
      <div className='sign-up'>
        <span>Don't have an account ?</span>
        <a href="">Signup now</a>
      </div>
    </div>
  )
}

export default Login
