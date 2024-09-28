import React from 'react'
import EventTab from './components/EventTab'
import EventList from './EventList'

export default function Event() {
  return (
    <div style={{
      width:"100%",
      // height:'100vh'
    }}>
      <EventTab/> 
      <EventList/>    
    </div>
  )
}
