import { apiGet, JSON_OPTS } from '../../api'
import { retrieveSession } from '../routines'
import { API_MY_USER } from '../api'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* retrieveSessionSaga() {
  try {
    const url = API_MY_USER
    yield put(retrieveSession.request())
    const { data: user } = yield call(apiGet, url, JSON_OPTS)
    yield put(retrieveSession.success(user))
  } catch (error) {
    yield put(retrieveSession.failure(error.response))
  } finally {
    yield put(retrieveSession.fulfill())
  }
}

export function* retrieveSessionRequestSaga() {
  yield takeLatest(retrieveSession.TRIGGER, retrieveSessionSaga)
}
