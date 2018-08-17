import React, { Component } from 'react';

import { connect } from 'react-redux'
import { loadUsers } from '../../actions/users'
import genderFilter from '../../selectors/gender'

import './index.css'
import User from './components/user'
import Loading from '../../components/Loading'

class UserList extends Component {

  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    return (
      this.props.loading
      ?
      <Loading />
      :
      <ul className="user-list">
        {
          this.props.users.map((user, index) => <User key={index} user={user} />)
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  users: genderFilter(state),
  loading: state.users.loading
})

const mapDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(loadUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);