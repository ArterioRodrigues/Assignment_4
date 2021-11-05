import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';

class App extends Component {

  render() {


    return (
      <div>
        <h1> Hello world </h1>
      </div>
    );
  }
}

export default App;