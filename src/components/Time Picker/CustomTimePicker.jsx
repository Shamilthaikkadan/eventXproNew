import React, { useState } from 'react';
import './CustomTimePicker.css';
import timer from '../../assets/svg/icons/Clock.svg';

export default function CustomTimePicker({ name }) {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [period, setPeriod] = useState('AM'); // For AM/PM

    const handleHourChange = (e) => {
        let value = e.target.value;
        if (value > 12) value = 12;
        if (value < 1) value = 1;
        setHours(value);
    };

    const handleMinuteChange = (e) => {
        let value = e.target.value;
        if (value > 59) value = 59;
        if (value < 0) value = 0;
        setMinutes(value);
    };

    const handlePeriodChange = (e) => {
        setPeriod(e.target.value);
    };

    return (
        <div className="time-picker">
            <span>{name}</span>
            <div className="time-picker-inputs">
                <div>
                    <input
                        type="number"
                        className="hour-input"
                        value={hours}
                        onChange={handleHourChange}
                        placeholder="HH"
                        max={12}
                        min={1}
                    />
                    <span className="separator">:</span>
                    <input
                        type="number"
                        className="minute-input"
                        value={minutes}
                        onChange={handleMinuteChange}
                        placeholder="MM"
                        max={59}
                        min={0}
                    />
                    <select className="period-select" value={period} onChange={handlePeriodChange}>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </div>
                <div>

                    <img src={timer} alt="clock" className="clock-icon" />
                </div>
            </div>

        </div>
    );
}
