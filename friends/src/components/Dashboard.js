import React from 'react';
import '../App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import FriendList from './FriendList';
import Friend from './Friend';
import FriendForm from './FriendForm';
import { connect } from 'react-redux'
import { getData } from '../actions/action'

class App extends React.Component {

  componentDidMount() {
    this.props.getData()
  }

  updateFriends = (friends) => {
    this.setState({ friends })
  }

  render() {
    const { friends } = this.props.friends

    return (
      <div className="App">
        <nav>
          <Link to='/'>Friends</Link>
          <Link to='/add'>Add A Friend</Link>
        </nav>

        <Route path='/' exact render={(props) => <FriendList {...props} friends={friends} updateFriends={this.updateFriends} />} />
        <Route path='/friend/:id' render={props => <Friend {...props} friends={friends} updateFriends={this.updateFriends} />} />
        <Route path='/add' render={props => <FriendForm {...props} updateFriends={this.updateFriends} />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends,
})

const mapDispatchToProps = {
  getData,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps))(App);
