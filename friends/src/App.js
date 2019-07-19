import React from 'react';
import './App.css';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import { Route } from 'react-router-dom'


class App extends React.Component {

  // updateFriends = (friends) => {
  //   this.setState({friends})
  // }  

  render() {
    return (
      <div className="App">
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
      </div>
    );
  }
}

export default App;
