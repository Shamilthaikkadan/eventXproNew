import React from 'react';
import './Modal.css';
import calender from '../../assets/svg/icons/Calender.svg';
import Close from '../../assets/svg/icons/Close.svg';
import TypeButtons from '../Type Buttons/TypeButtons';
import CustomDatePicker from '../Date Picker/CustomDatePicker';
import CustomTimePicker from '../Time Picker/CustomTimePicker';
import EButtons from '../Buttons/EButtons';
import { Link } from 'react-router-dom';

export default function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="header">
                    <div className="calender">
                        <img src={calender} alt="" />
                        <span>Create your event</span>
                    </div>
                    <div className='close-container'>
                        <img src={Close} onClick={onClose} alt='' />
                    </div>
                </div>
                <div className="event-container">
                    <div className="event-name">
                        <span>Event name* </span>
                        <input type="text" placeholder='Enter here' />
                    </div>
                    <div className="event-lang">
                        <span>Select Language</span>
                        <select>
                            <option value="english">English</option>
                            <option value="spanish">Arabic</option>
                            <option value="french">Hindi</option>
                            <option value="german">German</option>
                            <option value="chinese">Spanish</option>
                        </select>
                    </div>

                </div>
                <div className="event-type">
                    <span>Event type</span>
                    <div className='btns'>
                        <TypeButtons name='Location Based' />
                        <TypeButtons name='Online Event' />
                        <TypeButtons name='Hybrid Event' />
                    </div>
                </div>
                <div className='date-picker'>
                    <CustomDatePicker name='Start Date' />
                    <CustomTimePicker name='Start Time' />
                    <CustomDatePicker name='End Date' />
                    <CustomTimePicker name='End Time' />
                </div>
                <div className='action-buttons'>
                    <Link to='/event'>
                    <EButtons isAccent name='Create' />
                    </Link>
                    <EButtons isDefault name='Cancel' onClick={onClose} />
                </div>
            </div>
        </div>
    );
}
