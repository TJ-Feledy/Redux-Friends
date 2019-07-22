import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      error: null
    }
  }

  addFriend = evt => {
    evt.preventDefault()
    const {name,age,email} = this.state
    const payload = {name,age,email}

    axios.post('http://localhost:5000/friends',payload)
      .then((response) => {
        this.setState({error: null})
        this.props.updateFriends(response.data)
        this.props.history.push('/')
      })
      .catch((err) => {
        this.setState({error: err.data.error})
      })
      
  }

  changeHandler = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    const {name,age,email} = this.state

    return (
      <div className='friendForm'>
        <form onSubmit={this.addFriend} >
          <h2 className='formHeader'>Add A Friend</h2>
          <input type='text' name='name' placeholder='Name' value={name} onChange={this.changeHandler} /><br />
          <input type='number' name='age' placeholder='Age' value={age} onChange={this.changeHandler} /><br />
          <input type='email' name='email' placeholder='Email' value={email} onChange={this.changeHandler} /><br />
          <input id='addButton' type='submit' value='Add' />
        </form>
      </div>
    )
  }
}

export default FriendForm;