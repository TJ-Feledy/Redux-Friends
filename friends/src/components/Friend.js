import React from 'react'
import {Link,Route} from 'react-router-dom'
import Update from './Update'
import {connect} from 'react-redux'

function Friend(props) {
  const friend = props.friends.find(friend => `${friend.id}` === props.match.params.id)
  const updateFriends = props.updateFriends

  if (props.isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className='friend'>
      {props.error && <p className='error'>{props.error}</p>}
      <h1 className='name'>{friend.name}</h1>
      <p className='age'>Age: {friend.age}</p>
      <p className='email'>email: {friend.email}</p>
      <nav id='update'>
        <Link to={`/friend/${friend.id}/Update`}>Update</Link>
      </nav>
      <Route path={`/friend/:id/Update`} render={props => <Update {...props} friend={friend} updateFriends={updateFriends} /> } />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    isLoading: state.isLoading,
    error: state.error,
  }
}

export default connect(mapStateToProps)(Friend);