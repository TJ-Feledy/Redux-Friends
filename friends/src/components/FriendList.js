import React from 'react'
import {Link} from 'react-router-dom'


function FriendList(props) {
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

export default FriendList;