import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadUsers } from './actions/users/'

class App extends Component {

  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    return (
      <div className="App">
          {/* <h1 className="App-title">Welcome to React</h1> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(loadUsers())
})

export default connect(null, mapDispatchToProps)(App);
