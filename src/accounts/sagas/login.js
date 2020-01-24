import jwt_decode from 'jwt-decode'
import { apiPost, JSON_OPTS } from '../../api'
import { login } from '../routines'
import { API_SIGN_IN } from '../api'
import { call, put, takeLatest } from 'redux-saga/effects'

import { APP_TOKEN } from '../../constants'

export function saveToken(token) {
  localStorage.setItem(APP_TOKEN, token)
}

export function* loginSaga({ payload: { username, password } }) {
  try {
    const url = API_SIGN_IN
    yield put(login.request())
    const {
      data: { jwt, name, is_admin }
    } = yield call(apiPost, url, { username, password }, JSON_OPTS)
    yield call(saveToken, jwt)
    const session = yield call(jwt_decode, jwt)
    yield put(login.success({ session, user: { username, name, is_admin } }))
  } catch (error) {
    yield put(login.failure(error.response))
  } finally {
    yield put(login.fulfill())
  }
}

export function* loginRequestSaga() {
  yield takeLatest(login.TRIGGER, loginSaga)
}
