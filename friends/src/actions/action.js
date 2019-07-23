import axios from 'axios'

export const GET_DATA_START = 'GET_DATA_START'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILED = 'GET_DATA_FAILED'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const ADD_FRIEND_START = 'ADD_FRIEND_START'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_FAILED = 'ADD_FRIEND_FAILED'

export const getData = () => {
  return (dispatch) => {
    dispatch({ type: GET_DATA_START })

    const headers = {
      Authorization: localStorage.getItem('token'),
    }

    axios.get('http://localhost:5000/api/friends/', {headers})
      .then((res) => {
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_FAILED, payload: err.response })
      })
  }
}

export const login = (username, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START })

    return axios.post('http://localhost:5000/api/login/', {username, password})
      .then((res) => {
        localStorage.setItem('token', res.data.payload)
        dispatch({ type: LOGIN_SUCCESS })
      })
      .catch((err) => {
        const payload = err.response ? err.response : err
        dispatch({ type: LOGIN_FAILED, payload })
      })
  }
}

export const addFriend = (payload) => {
  return (dispatch) => {
    dispatch({ type: ADD_FRIEND_START })

    axios.post('http://localhost:5000/api/friends/', payload)
      .then(res => {
        dispatch({type: ADD_FRIEND_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({type: ADD_FRIEND_FAILED, payload: err.response})
      })
  }
}