import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux'
import { loadUsers } from '../../actions/users'

import User from './components/user'

class UserList extends Component {

  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    return (
      <Fragment>
        {
          this.props.users.map((user, index) => <User key={index} user={user} />)
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
})

const mapDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(loadUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);