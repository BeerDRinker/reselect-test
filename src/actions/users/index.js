import * as ActionsTypes from './types'

export const loadUsersRequest = () => ({
  type: ActionsTypes.LOAD_USERS_REQUEST
})

export const loadUsersSuccess = (data) => ({
  type: ActionsTypes.LOAD_USERS_SUCCESS,
  data
})

export const loadtUsersError = (error) => ({
  type: ActionsTypes.LOAD_USERS_FAILURE,
  error
})

export const loadUsers = () => ({
  type: ActionsTypes.LOAD_USERS
})

export const setUserFilter = (keyWord) => {
  return {
  type: ActionsTypes.SET_USER_FILTER,
  keyWord
  }
}