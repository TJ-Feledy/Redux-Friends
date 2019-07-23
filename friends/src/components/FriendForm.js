import React from 'react'
import {connect} from 'react-redux'
import { addFriend } from '../actions/action'

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      age: 0,
      email: '',
    }
  }

  newFriend = evt => {
    evt.preventDefault()
    const {id,name,age,email} = this.state
    const payload = {id,name,age,email}

    this.props.addFriend(payload)
    
    this.setState({
      id: 0,
      name: '',
      age: 0,
      email: '',
    })

    this.props.history.push('/')
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
        <form onSubmit={this.newFriend} >
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

const mapDispatchToProps = {
  addFriend,
}

export default connect(null, mapDispatchToProps)(FriendForm);