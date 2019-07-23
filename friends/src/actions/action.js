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

export const UPDATE_FRIEND_START = 'UPDATE_FRIEND_START'
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS'
export const UPDATE_FRIEND_FAILED = 'UPDATE_FRIEND_FAILED'

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START'
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS'
export const DELETE_FRIEND_FAILED = 'DELETE_FRIEND_FAILED'

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

    const headers = {
      Authorization: localStorage.getItem('token'),
    }

    axios.post('http://localhost:5000/api/friends/', payload, {headers})
      .then(res => {
        dispatch({type: ADD_FRIEND_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({type: ADD_FRIEND_FAILED, payload: err.response})
      })
  }
}

export const updateFriend = (payload, id) => {
  return (dispatch) => {
    dispatch({type: UPDATE_FRIEND_START})

    const headers = {
      Authorization: localStorage.getItem('token'),
    }

    axios.put(`http://localhost:5000/api/friends/${id}`, payload, {headers})
      .then(res => {
        dispatch({type: UPDATE_FRIEND_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({type: UPDATE_FRIEND_FAILED, payload: err.response})
      })
  }
}

export const deleteFriend = (id) => {
  return (dispatch) => {
    dispatch({type: DELETE_FRIEND_START})

    const headers = {
      Authorization: localStorage.getItem('token')
    }

    axios.delete(`http://localhost:5000/friends/${id}`, payload, {headers})
      .then(res => {
        dispatch({type: DELETE_FRIEND_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({type: DELETE_FRIEND_FAILED, payload: err.response})
      })
  }
}