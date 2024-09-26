import React, { useState } from 'react';
import './otp.css';
import OTPInput from 'react-otp-input';
import EButtons from '../../components/Buttons/EButtons';
import ArrowRight from '../../assets/svg/icons/ArrowRight.svg'
import { Link } from 'react-router-dom';

export default function Otp() {
    const [otp, setOtp] = useState('');
    return (
        <div className='otp-container'>
            <div className="otp-form">
                <div className='otp-head'>
                    <span className='otp-text'>Please enter the </span>
                    <span className='otp-text'>OTP sent to your mail.</span>
                </div>
                <div className='otp-details'>
                    <div className="otp-heading">
                        <div className='email-details'>
                            <span>
                                Enter the code from the sms we sent
                            </span>
                            <span>
                                to <a href="">
                                    yourmail@gmail.com
                                </a>
                            </span>
                        </div>
                        <div className="otp-timer">
                            <span>02:32</span>
                        </div>
                        <div className="otp-input-container">
                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={5}
                                renderSeparator={<span style={{ margin: '0 5px' }}></span>}
                                renderInput={(props) => <input {...props} />}
                                inputStyle={{
                                    border: 'none',
                                    padding: 15,
                                    borderRadius: 10,
                                    outline: 'none',
                                    boxShadow: '1px 2px 1px .5px rgba(245, 130, 41, 0.16)',
                                }}
                            />
                        </div>
                        <div className="otp-recieve">
                            <span>I didn't receive any code. <a href="">RESEND</a></span>
                        </div>
                        <div className="otp-button">
                            <Link to='/Home'>
                                <EButtons name='Submit' icon={ArrowRight} />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <div className='sign-up'>
                <span>Back to login ?</span>
                <Link to='/auth/signup'>
                    Login
                </Link>
            </div>
        </div>
    )
}
