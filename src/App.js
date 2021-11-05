import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
        accountBalance: 14568.27,
        currentUser: {
          userName: 'joe_shmo',
          memberSince: '07/23/96',
        }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {


    return (
      
      <h1>Hello world </h1>
    );
  }
}

export default App;