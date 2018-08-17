import React from 'react';
import { connect } from 'react-redux'

import { setUserFilter } from '../../actions/users/'

import './index.css'

const Header = (props) => {

  const hrndleOnFilterCkick = (e, keyWord) => {
    e.preventDefault()
    props.setUserFilter(keyWord)
  }

  return (
    <div className="header">
      <h2 className="header-title">Filters: </h2>
      <ul className="filters-list">
        <li className="filters-list-item" onClick={(e) => hrndleOnFilterCkick(e, 'clear')} >No filter</li>
        <li className="filters-list-item" onClick={(e) => hrndleOnFilterCkick(e, 'male')} >Male</li>
        <li className="filters-list-item" onClick={(e) => hrndleOnFilterCkick(e, 'female')} >Female</li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUserFilter: (keyWord) => dispatch(setUserFilter(keyWord))
})

export default connect(null, mapDispatchToProps)(Header);