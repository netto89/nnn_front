import { login, retrieveSession } from '../routines'

const initialState = null

const currentUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case login.SUCCESS:
      const { user } = payload
      return { ...user }
    case retrieveSession.SUCCESS:
      return { ...payload }
    case login.FAILURE:
      return null
    default:
      return state
  }
}

export { currentUser }
