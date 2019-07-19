import axios from 'axios'

export const GET_DATA_START = 'GET_DATA_START'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILED = 'GET_DATA_FAILED'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const getData = () => {
  return (dispatch) => {
    dispatch({ type: GET_DATA_START })

    const headers = {
      Authorization: localStorage.getItem('token'),
    }

    axios.get('http://localhost:5000/', {headers})
      .then((res) => {
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_FAILED, payload: err.response.data })
      })
  }
}

export const login = (username, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START })

    return axios.post('http://localhost:5000/login', {username, password})
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        dispatch({ type: LOGIN_SUCCESS })
      })
      .catch((err) => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: LOGIN_FAILED, payload })
      })
  }
}