import React from 'react';

import './index.css'

const User = (props) => {
  const { picture, name, location, phone, cell } = props.user
  return (
    <li className="user-list-item">
      <div className="user-rapper">
        <div className="user-image">
          <img src={picture.medium} alt={`${name.title} ${name.first} ${name.last}`}/>
        </div>
        <div className="user-details">
          <h3 className="user-name">{`${name.title} ${name.first} ${name.last}`}</h3>
          <p className="user-location">{`${location.street}, ${location.city}, ${location.state}`}</p>
          <p className="user-contacts">{`Phone: ${phone}, Cell:${cell}`}</p>
        </div>
      </div>
    </li>
  );
};

export default User;