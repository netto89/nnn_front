import { loginRequestSaga } from './login'
import { retrieveSessionRequestSaga } from './retrieveSession'

export { loginRequestSaga, retrieveSessionRequestSaga }
export default [loginRequestSaga(), retrieveSessionRequestSaga()]
