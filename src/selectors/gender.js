import { createSelector } from 'reselect'
import * as R from 'ramda'

const usersSelector = state => state.users.users
const selectedFilter = state => state.users.filterKeyWord

const filterUsers = (users, keyWord) => {
  if (keyWord === 'clear') {
    return users
  }
  const keyProp = R.propEq('gender', keyWord)
  const filteredUsers = R.filter(keyProp, users)
  return filteredUsers
}

export default createSelector(
  usersSelector,
  selectedFilter,
  filterUsers
)