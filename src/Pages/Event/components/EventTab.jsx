import React, { useState } from 'react';
import EButtons from '../../../components/Buttons/EButtons';
import plus from '../../../assets/svg/icons/Plus.svg';
import Card from '../../../assets/svg/icons/Card.svg';
import List from '../../../assets/svg/icons/List.svg';
import './EventComponent.css';

export default function EventTab() {
  const [activeStatus, setActiveStatus] = useState('LIVE');

  const statuses = ['LIVE', 'DRAFTS', 'PAST', 'CANCELLED', 'ALL', 'TRASH'];

  return (
    <div className="event-tab-container">
      <div className="event-tab-left">
        <EButtons name="Create Event" icon={plus} />
        <div className="event-status-group">
          {statuses.map((status) => (
            <span
              key={status}
              className={activeStatus === status ? 'active-status' : ''}
              onClick={() => setActiveStatus(status)}
            >
              {status}
            </span>
          ))}
        </div>
      </div>
      <div className="event-tab-right">
        <div className="icon-button">
          <img src={Card} alt="Card View" />
        </div>
        <div className="list-button">
          <img src={List} alt="List View" />
        </div>
      </div>
    </div>
  );
}
