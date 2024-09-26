import React, { useState } from 'react';
import './UserLayout.css';
import logo from '../../assets/svg/icons/EventXproBlack.svg';
import settings from '../../assets/svg/icons/Settings.svg';
import notification from '../../assets/svg/icons/Notification.svg';
import owner from '../../assets/svg/icons/owner.svg';
import hamburger from '../../assets/svg/icons/Hamburger.svg';
import { Link, Outlet } from 'react-router-dom';

function UserLayout() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='nav-container'>
                <div className="nav-component">
                    <div className="logo-container">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <div className={`nav-options ${menuOpen ? 'open' : ''}`}>
                    <Link to='/settings'>
                        <img className='settings-icon' src={settings} alt="Settings" />
                    </Link>
                    <div className="icon-container">
                        <img style={{ cursor: 'pointer' }} src={notification} alt="Notifications" />
                    </div>
                    <img style={{ cursor: 'pointer' }} className='owner-icon' src={owner} alt="Owner" />
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <img src={hamburger} alt="Menu" />
                </div>
            </div>
            <div className='user-outlet'>
                <Outlet />
            </div>
        </>
    );
}

export default UserLayout;

