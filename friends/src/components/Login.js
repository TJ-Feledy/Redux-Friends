import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/action'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (evt) => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    const { username, password } = this.state

    this.props.login(username, password)
      .then(() => {
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const { username, password } = this.state
    const { isLoading, error } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        {error && <p className='error'>{error}</p>}
        
        <h1 className='intro'>Login To Access Friends</h1>

        <input type='text' name='username' placeholder='Username' value={username} onChange={this.handleChange} /><br />
        <input type='password' name='password' placeholder='Password' value={password} onChange={this.handleChange} /><br />

        {isLoading ? <p>Logging in...</p> : <button type='submit'>Login</button>}
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
})

const mapDispatchToProps = {
  login,
}

export default withRouter(
  connect(
    mapStateToProps, mapDispatchToProps,
  )(Login)
)