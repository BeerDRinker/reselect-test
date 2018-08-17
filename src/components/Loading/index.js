import React from 'react';

import './index.css'
import loadingIcon from '../../assets/loader.gif'

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <img src={loadingIcon} alt="Loading..."/>
    </div>
  );
};

export default Loading;