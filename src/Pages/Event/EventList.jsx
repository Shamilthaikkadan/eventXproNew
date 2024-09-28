import React from 'react';
import calender from '../../assets/svg/icons/WhiteCalender.svg';
import more from '../../assets/svg/icons/More.svg';
import location from '../../assets/svg/icons/Location.svg';
import admin from '../../assets/svg/icons/User.svg';
import timer from '../../assets/svg/icons/Clock.svg';
import members from '../../assets/svg/icons/Users.svg';
import './Event.css';

export default function EventList() {
  const data = [
    {
      id: 1,
      eventName: 'Event - 1',
      location: 'Calicut',
      attendeesCount: 4,
      membersCount: 8,
      startDate: '29 Aug 2024',
      duration: 'Aug 29 to 30, 2024',
      time: '10:30 AM',
    },
    {
      id: 2,
      eventName: 'Event - 2',
      location: 'Kochi',
      attendeesCount: 6,
      membersCount: 15,
      startDate: '3 Sept 2024',
      duration: 'Sept 3 to 5, 2024',
      time: '10:00 AM',
    },
    {
      id: 3,
      eventName: 'Event - 3',
      location: 'Kannur',
      attendeesCount: 10,
      membersCount: 25,
      startDate: '10 Sept 2024',
      duration: 'Sept 10 to 15, 2024',
      time: '09:00 AM',
    },
    {
      id: 4,
      eventName: 'Event - 4',
      location: 'Chennai',
      attendeesCount: 6,
      membersCount: 14,
      startDate: '20 Sept 2024',
      duration: 'Sept 20 to 23, 2024',
      time: '09:30 AM',
    },
    {
      id: 5,
      eventName: 'Event - 5',
      location: 'Bangalore',
      attendeesCount: 20,
      membersCount: 50,
      startDate: '30 Sept 2024',
      duration: 'Sept 30 to 05, 2024',
      time: '10:00 AM',
    },
    {
      id: 5,
      eventName: 'Event - 5',
      location: 'Bangalore',
      attendeesCount: 20,
      membersCount: 50,
      startDate: '30 Sept 2024',
      duration: 'Sept 30 to 05, 2024',
      time: '10:00 AM',
    },
    {
      id: 5,
      eventName: 'Event - 5',
      location: 'Bangalore',
      attendeesCount: 20,
      membersCount: 50,
      startDate: '30 Sept 2024',
      duration: 'Sept 30 to 05, 2024',
      time: '10:00 AM',
    },
    {
      id: 5,
      eventName: 'Event - 5',
      location: 'Bangalore',
      attendeesCount: 20,
      membersCount: 50,
      startDate: '30 Sept 2024',
      duration: 'Sept 30 to 05, 2024',
      time: '10:00 AM',
    },
    {
      id: 5,
      eventName: 'Event - 5',
      location: 'Bangalore',
      attendeesCount: 20,
      membersCount: 50,
      startDate: '30 Sept 2024',
      duration: 'Sept 30 to 05, 2024',
      time: '10:00 AM',
    },
    {
      id: 5,
      eventName: 'Event - 5',
      location: 'Bangalore',
      attendeesCount: 20,
      membersCount: 50,
      startDate: '30 Sept 2024',
      duration: 'Sept 30 to 05, 2024',
      time: '10:00 AM',
    },
  ];

  return (
    <div className="event-list-container">
      {data.map((itm, i) => (
        <div className="event-item">
          <div key={i} className="event-date-container">
            <div style={{
              display: "flex",
              alignItems: 'center',
              justifyContent: "flex-end"
            }}>
              <img src={more} alt="" />
            </div>
            <div className="event-icons">
              <img src={calender} alt="Calendar" />
            </div>
            <div className="hr"></div>
            <div className="event-date-info">
              <span className="start-date">{itm.startDate}</span>
              <span className="date-upto">{itm.duration}</span>
            </div>
          </div>
          <div className="event-details-container">
            <h1>{itm.eventName}</h1>
            <div className="event-location">
              <img src={location} alt="Location" />
              <span>{itm.location}</span>
            </div>
            <div className="event-location">
              <img src={admin} alt="Admin" />
              <span>Attendees</span>
              <div className="attendees-count">
                <span>{itm.attendeesCount}</span>
              </div>
              <div className="vr"></div>
              <img src={members} alt="Admin" />
              <div className="members-count">
                <span>{itm.membersCount}</span>
              </div>
              <span>Members</span>
            </div>
            <div className="event-time">
              <img src={timer} alt="Time" />
              <span>{itm.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
const data = [
  {
    id: 1,
    eventName: 'Event - 1',
    location: 'Calicut',
    attendeesCount: 4,
    membersCount: 8,
    startDate: '29 Aug 2024',
    duration: 'Aug 29 to 30, 2024',
    time: '10:30 AM',
  },
  {
    id: 2,
    eventName: 'Event - 2',
    location: 'Kochi',
    attendeesCount: 6,
    membersCount: 15,
    startDate: '3 Sept 2024',
    duration: 'Sept 3 to 5, 2024',
    time: '10:00 AM',
  },
  {
    id: 3,
    eventName: 'Event - 3',
    location: 'Kannur',
    attendeesCount: 10,
    membersCount: 25,
    startDate: '10 Sept 2024',
    duration: 'Sept 10 to 15, 2024',
    time: '09:00 AM',
  },
  {
    id: 4,
    eventName: 'Event - 4',
    location: 'Chennai',
    attendeesCount: 6,
    membersCount: 14,
    startDate: '20 Sept 2024',
    duration: 'Sept 20 to 23, 2024',
    time: '09:30 AM',
  },
  {
    id: 5,
    eventName: 'Event - 5',
    location: 'Bangalore',
    attendeesCount: 20,
    membersCount: 50,
    startDate: '30 Sept 2024',
    duration: 'Sept 30 to 05, 2024',
    time: '10:00 AM',
  },
  {
    id: 5,
    eventName: 'Event - 5',
    location: 'Bangalore',
    attendeesCount: 20,
    membersCount: 50,
    startDate: '30 Sept 2024',
    duration: 'Sept 30 to 05, 2024',
    time: '10:00 AM',
  },
  {
    id: 5,
    eventName: 'Event - 5',
    location: 'Bangalore',
    attendeesCount: 20,
    membersCount: 50,
    startDate: '30 Sept 2024',
    duration: 'Sept 30 to 05, 2024',
    time: '10:00 AM',
  },
  {
    id: 5,
    eventName: 'Event - 5',
    location: 'Bangalore',
    attendeesCount: 20,
    membersCount: 50,
    startDate: '30 Sept 2024',
    duration: 'Sept 30 to 05, 2024',
    time: '10:00 AM',
  },
  {
    id: 5,
    eventName: 'Event - 5',
    location: 'Bangalore',
    attendeesCount: 20,
    membersCount: 50,
    startDate: '30 Sept 2024',
    duration: 'Sept 30 to 05, 2024',
    time: '10:00 AM',
  },
  {
    id: 5,
    eventName: 'Event - 5',
    location: 'Bangalore',
    attendeesCount: 20,
    membersCount: 50,
    startDate: '30 Sept 2024',
    duration: 'Sept 30 to 05, 2024',
    time: '10:00 AM',
  },
];