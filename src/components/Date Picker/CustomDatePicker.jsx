import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './CustomDatePicker.css';  
import Calender from '../../assets/svg/icons/Calender.svg'
const CustomDatePicker = ({name}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="date-picker-container">
      <label className="date-picker-label">{name}</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MMM dd, yyyy"
        placeholderText="Select a date"
        customInput={
          <div className="custom-input-container">
            <input
              type="text"
              value={selectedDate ? selectedDate.toLocaleDateString() : ''}
              readOnly
              className="date-input"
            />
            <img src={Calender} alt="" />
          </div>
        }
      />
    </div>
  );
};

export default CustomDatePicker;
