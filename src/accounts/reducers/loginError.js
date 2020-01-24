import {login} from '../routines'


const initialState = null

const loginError = (state=initialState, {type, payload}) => {
  switch(type){
    case login.TRIGGER:
      return initialState
    case login.FAILURE:
      return payload
    default:
      return state
  }
}

export {loginError}