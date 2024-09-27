import React from 'react'
import './CustomTimePicker.css'
import timer from '../../assets/svg/icons/Clock.svg'
export default function CustomTimePicker({name}) {
    return (
        <div className="time-picker">
            <span>{name}</span>
            <div style={{width:"100%",display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
            <select>
                <option value="english">01:00 AM</option>
                <option value="spanish">02:00 AM</option>
                <option value="english">03:00 AM</option>
                <option value="spanish">04:00 AM</option>
                <option value="english">05:00 AM</option>
                <option value="spanish">06:00 AM</option>
                <option value="english">07:00 AM</option>
                <option value="spanish">08:00 AM</option>
                <option value="english">09:00 AM</option>
                <option value="spanish">10:00 AM</option>
                <option value="english">11:00 AM</option>
                <option value="spanish">12:00 AM</option>
                <option value="english">01:00 PM</option>
                <option value="spanish">02:00 PM</option>
                <option value="english">03:00 PM</option>
                <option value="spanish">04:00 PM</option>
                <option value="english">05:00 PM</option>
                <option value="spanish">06:00 PM</option>
                <option value="english">07:00 PM</option>
                <option value="spanish">08:00 PM</option>
                <option value="english">09:00 PM</option>
                <option value="spanish">10:00 PM</option>
                <option value="english">11:00 PM</option>
                <option value="spanish">12:00 PM</option>

                
              
            </select>
            <img src={timer} alt="" /> 
            </div>
           
            
        </div>
    )
}
