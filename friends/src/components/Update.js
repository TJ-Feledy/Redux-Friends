import React from 'react'
import axios from 'axios'

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.friend.name,
      age: props.friend.age,
      email: props.friend.email,
      error: null
    }
  }

  editFriend = evt => {
    evt.preventDefault()
    const { name, age, email } = this.state
    const payload = { name, age, email }
    const id = this.props.match.params.id

    axios.put(`http://localhost:5000/friends/${id}`, payload)
      .then((response) => {
        this.setState({ error: null })
        this.props.updateFriends(response.data)
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
        this.setState({ error: err })
      })

  }

  deleteFriend = evt => {
    evt.preventDefault()

    const id = this.props.match.params.id

    axios.delete(`http://localhost:5000/friends/${id}`)
      .then((response) => {
        this.setState({ error: null })
        this.props.updateFriends(response.data)
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
        this.setState({ error: err })
      })

  }

  changeHandler = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    const { name, age, email} = this.state

    return (
      <div className='friendForm'>
        <form onSubmit={this.editFriend} >
          <h2 className='formHeader'>Update A Friends Info</h2>
          <input type='text' name='name' placeholder='Name' value={name} onChange={this.changeHandler} /><br />
          <input type='number' name='age' placeholder='Age' value={age} onChange={this.changeHandler} /><br />
          <input type='email' name='email' placeholder='Email' value={email} onChange={this.changeHandler} /><br />
          <div className='updateButtons'>
            <input type='submit' value='Update' />
            <button className='deleteButton' type='button' onClick={this.deleteFriend}>Remove</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Update;