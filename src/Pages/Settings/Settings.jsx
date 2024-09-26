import React from 'react'
import './Settings.css'
import logo from '../../assets/svg/icons/EventXproBlack.svg'
import edit from '../../assets/svg/icons/Edit.svg'

import user from '../../assets/svg/icons/User.svg'
import management from '../../assets/svg/icons/Management.svg'
import Otp from '../../assets/svg/icons/Otp.svg'
import configure from '../../assets/svg/icons/Configure.svg'
import Lock from '../../assets/svg/icons/Lock.svg'
import security from '../../assets/svg/icons/Security.svg'

export default function Settings() {
   const data = [ 
    {
        id:1,
        name:'User Management',
        image:user
    },
    {
        id:2,
        name:'Role Management',
        image:management
    },
    {
        id:3,
        name:'Disable OTP Authentication',
        image:Otp
    },
    {
        id:4,
        name:'Configuration',
        image:configure
    },
    {
        id:5,
        name:'Change Password',
        image:Lock
    },
    {
        id:6,
        name:'Account Security',
        image:security
    },

]
  return (
    <div className='settings-container'>
      <div className="brand-container">
        <img src={logo} alt="" />
      </div>


      {/* <div className="edit-container">
        <img src={edit} alt="" />

      </div> */}

      <div className="page-container">
        {
          data.map((itm) => (



            <div className="card">
              <img src={itm.image} alt="" />
              <span>{itm.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
