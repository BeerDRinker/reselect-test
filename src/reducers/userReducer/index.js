import * as ActionsTypes from '../../actions/users/types'

const initialState = {
  loading: false,
  users: [],
  error: '',
  filterKeyWord: 'clear'
}

const users = (state = initialState, action) => {
  switch(action.type) {

    case ActionsTypes.LOAD_USERS_REQUEST:
      return { ...state, loading: true }

    case ActionsTypes.LOAD_USERS_SUCCESS:
      return { ...state, loading: false, users: action.data }

    case ActionsTypes.LOAD_USERS_FAILURE:
      return { ...state, loading: false, error: action.error }

    case ActionsTypes.SET_USER_FILTER:
      return { ...state, filterKeyWord: action.keyWord }

    default:
      return state
  }
}

export default users