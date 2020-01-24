import { all } from 'redux-saga/effects'
import accountsSagas from './accounts/sagas'

export default function* sagas() {
  yield all([
    ...accountsSagas,
  ])
}
