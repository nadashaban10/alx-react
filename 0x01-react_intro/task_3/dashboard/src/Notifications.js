import React from 'react';

import closeIcon from './close1437.jpg';


function Notifications() {
  return (
    <div className="Notifications">
      
      <p>Here is the list of notifications</p>
      <button style={{ position: 'absolute', right: '20px', top: '20px'}} aria-label='Close'
      onClick={() => console.log('Close button has been clicked')}>
        <img src= {closeIcon} style={{width: '20px'}} alt='close'></img>
        <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        </ul>
      </button>
    </div>
  );
}

export default Notifications;