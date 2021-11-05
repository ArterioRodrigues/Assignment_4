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

    const HomeComponent = () => (<Home accountBalance = {this.state.accountBalance}/>);
    const UserProfileComponent = () => ( 
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
      );
    const LogInComponent = () => (<LogIn user = {this.state.currentUser} mockLogIn={this.mockLogIn}/>)

    return (
      
      <Router>
        <Switch>
          <Link to='components/Home.js'> Return to Home </Link>
          <Route exact path= "/" component = {HomeComponent}/>
          <Route exact path='/userProfile' render={UserProfileComponent}/>
          <Route exact path='/login' render={LogInComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;