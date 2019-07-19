import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'


function FriendList(props) {

  if (props.isLoading) {
    return <p>Friends are loading...</p>
  }

  return (
    <div className='friendList'>
      {props.friends.map(friend => {
        return <Link key={friend.id} to={`/friend/${friend.id}`}>
          <div className='friendCard'>
            <h1 className='name'>{friend.name}</h1>
            <p className='age'>Age: {friend.age}</p>
            <p className='email'>email: {friend.email}</p>
          </div>
        </Link>
      })}
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    friends: state.friends
  }
}

export default connect(mapStateToProps)(FriendList);