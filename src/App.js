import React, { Component, Fragment } from 'react';

import './App.css'
import UserList from './components/UserList'
import Header from './components/Header'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <div className="App-wrapper">
          <UserList />
        </div>
      </Fragment>
    );
  }
}

export default App