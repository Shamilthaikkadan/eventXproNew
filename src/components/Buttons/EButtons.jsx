import React from 'react';
import './EButton.css';

export default function EButtons({ name, icon, isAccent, isDefault, width, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`e-button ${isAccent ? 'is-accent' : isDefault ? 'is-default' : ''}`}
            style={{ width: width }}  
        >
            <span className="e-button-text">{name}</span>
            {icon && <img src={icon} alt="" className="e-button-icon" />}
        </button>
    );
}
