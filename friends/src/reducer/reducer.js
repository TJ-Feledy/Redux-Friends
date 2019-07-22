import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
} from '../actions/action'

const initialState = {
  friends: [],
  isLoading: false,
  error: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_DATA_SUCCESS: {
      const friends = action.payload
      return {
        ...state,
        isLoading: false,
        error: null,
        friends,
      }
    }
    case GET_DATA_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.msg,
      }
    }
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.msg,
      }
    }
    default:
      return state
  }
}
