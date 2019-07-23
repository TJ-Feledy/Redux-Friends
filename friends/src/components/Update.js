import React from 'react'
import {updateFriend} from '../actions/action'
import {deleteFriend} from '../actions/action'
import {connect} from 'react-redux'

class Update extends React.Component {
  constructor(props) {
    super(props);
    const friend = this.props.friends.find(friend => `${friend.id}` === this.props.match.params.id)
    this.state = {
      name: friend.name,
      age: friend.age,
      email: friend.email,
      error: null
    }
  }

  editFriend = evt => {
    evt.preventDefault()
    const { name, age, email } = this.state
    const payload = { name, age, email }
    const id = this.props.match.params.id

    this.props.updateFriend(payload,id)

    this.props.history.push(`/friend/${id}`)
  }

  deleteFriend = evt => {
    evt.preventDefault()

    const id = this.props.match.params.id

    this.props.deleteFriend(id)
    this.props.history.push('/')
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

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    error: state.error
  }
}
const mapDispatchToProps = {
  updateFriend,
  deleteFriend,
}

export default connect(mapStateToProps,mapDispatchToProps)(Update);