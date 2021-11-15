import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debit from './components/Debit';
import Credit from './components/Credit';
import AccountBalance from './components/AccountBalance';
import LogIn from './components/Login'
import axios from "axios";
import {Link} from 'react-router-dom';
import './App.css'


class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: [],
      id: 0,
    }
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")
    let credits = await axios.get("https://moj-api.herokuapp.com/credits")
    
    debits = debits.data
    credits = credits.data

    let debitSum = 0;
    let creditSum = 0;

    debits.forEach(element => {
      debitSum = element.amount
    });

    credits.forEach(element => {
      creditSum = element.amount
    });

    let accountBalance = creditSum - debitSum;
    this.setState({debits, credits, accountBalance, debitSum, creditSum});
  }

  addDebit = (e) => {
    let debits = this.state.debits;
    const api_new = { 
      id: this.state.id,
      description: e[0],
      amount: e[1],
      date: String(new Date)
    }
    this.setState({debits: [api_new].concat(debits), id: this.state.id + 1, accountBalance: this.state.accountBalance + parseFloat(e[1])})
  }

  addCredit = (e) => {
    let credits = this.state.credits;
    const api_new = { 
      id: this.state.id,
      description: e[0],
      amount: e[1],
      date: String(new Date)
    }
    this.setState({credits: [api_new].concat(credits), id: this.state.id + 1, accountBalance: this.state.accountBalance - parseFloat(e[1])})
  }


  render() {

    const { debits } = this.state;
    const { credits } = this.state;
    const DebitsComponent = () => (<Debit addDebit={this.addDebit} debits = {debits}/>)  
    const CreditsComponent = () => (<Credit addCredit={this.addCredit} credits = {credits}/>)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
    const LogInComponent = () => (<LogIn user = {this.state.currentUser} mockLogIn={this.mockLogIn}/>);

    return (
      <Router>
        <div>
          <div class= "top">

            <div class = "links">
              <Link to ="/"> Home </Link>
              <Link to = "/userProfile"> User Profile </Link>
              <Link to = "/login"> Login </Link>
              <Link to = "/credit"> Credit </Link>
              <Link to = "/debit"> Debit </Link>
            </div>
            
            <div class = "accountBalance"><AccountBalance accountBalance = {this.state.accountBalance}/></div>
          </div>

          <Route exact path='/' component = {HomeComponent}/>
          <Route exact path='/userProfile' component ={UserProfileComponent}/>
          <Route exact path='/login' component ={LogInComponent}/>
          <Route exact path='/debit' component  ={DebitsComponent} />
          <Route exact path='/credit' component ={CreditsComponent} />
        </div>
      </Router>
    );
  }

}
export default App;