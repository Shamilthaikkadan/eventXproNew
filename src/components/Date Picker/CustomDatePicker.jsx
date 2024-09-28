import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './CustomDatePicker.css';
import Calender from '../../assets/svg/icons/Calender.svg'

const CustomDatePicker = ({ name }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="date-picker-container">
      <label className="date-picker-label">{name}</label>

      <div className="custom-input-container">
        <div style={{ width: '70%', display: "flex", alignItems: "center" }}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMM dd, yyyy"
            placeholderText="Select a date"
            className="custom-date-picker-input"
            calendarClassName="custom-calendar"
          />
          <input
            type="text"
            value={selectedDate ? selectedDate.toLocaleDateString() : ''}
            readOnly
            className="date-input"
          />
        </div>
        <img src={Calender} alt="calendar icon" />
      </div>
    </div>
  );
};

export default CustomDatePicker;
