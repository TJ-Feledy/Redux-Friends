import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILED,
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILED,
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
    case ADD_FRIEND_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case ADD_FRIEND_SUCCESS: {
      const friends = action.payload
      return {
        ...state,
        isLoading: false,
        friends,
        error: null,
      }
    }
    case ADD_FRIEND_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.msg,
      }
    }
    case UPDATE_FRIEND_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case UPDATE_FRIEND_SUCCESS: {
      const friends = action.payload
      return {
        ...state,
        isLoading: false,
        friends,
        error: null,
      }
    }
    case UPDATE_FRIEND_FAILED: {
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
