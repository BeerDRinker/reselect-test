import { put, call, takeEvery } from 'redux-saga/effects'

import { loadUsersRequest, loadUsersSuccess, loadtUsersError  } from '../actions/users/'
import { LOAD_USERS } from '../actions/users/types'

import { getUsers } from '../API/users'


function* loadUSersAsync() {
  try {
    yield put(loadUsersRequest())
    const data = yield call(() => getUsers().then(data => data))
    yield put(loadUsersSuccess(data))
  } catch(error) {
    yield put(loadtUsersError(error))
  }
}

export const usersSaga = [
  takeEvery(LOAD_USERS, loadUSersAsync),
]