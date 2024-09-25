import React from 'react'
import './EButton.css'
export default function EButtons({ name,icon }) {
  return (
    <button>
      {name}
      {icon && <img src={icon} alt="" />}
    </button>
  )
}
