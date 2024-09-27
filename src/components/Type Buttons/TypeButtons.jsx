import React, { useState } from 'react';
import './TypeButton.css';

export default function TypeButtons({ onClick, name, icon }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive); 
        if (onClick) {
            onClick(); 
        }
    };

    return (
        <div 
            className='parent' 
            onClick={handleClick} 
            style={{ backgroundColor: isActive ? 'var(--blue)' : 'var(--platinum)' }} 
        >
            <div className='child' style={{ borderColor: isActive ? 'white' : 'rgba(128, 128, 128, 0.2)', backgroundColor:isActive ? 'var(--blue)' : 'var(--platinum)' }}>
                <div className='grand-child' style={{ backgroundColor: isActive ? 'white' : 'var(--gray)' }}></div>
            </div>
            <span style={{ color: isActive ? 'white' : 'var(--gray)' }}>{name}</span>
        </div>
    );
}
