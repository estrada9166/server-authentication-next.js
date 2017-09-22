import { INPUT_VALUE, LOGGED_IN } from '../constants'

export default (state = {}, action ) => {
  switch (action.type) {
    case INPUT_VALUE:
      return { ...state,
        [action.title]:
          { ...state[action.title],
            [action.name]: action.val
          }
      }
    case LOGGED_IN:
      return state = {}
    default:
      return state
  }
}
