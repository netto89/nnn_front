import {login} from '../routines'

const authenticating = (state = false, {type}) => {
  switch(type){
    case login.TRIGGER:
      return true
    case login.FULFILL:
      return false
    default:
      return state
  }
}

export {authenticating}