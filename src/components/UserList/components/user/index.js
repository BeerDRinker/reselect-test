import React from 'react';

import './index.css'

const User = (props) => {
  return (
    <div>
      {props.user.gender}
    </div>
  );
};

export default User;