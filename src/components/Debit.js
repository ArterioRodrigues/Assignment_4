import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Debit.css';

class Debit extends Component{
    constructor(props){
        super(props);
        this.state = {
            apiData: [],
            id: [],
            description: [],
            amount: [],
            date: [],

            found: false,
            total_debit: 0,
            new_ids:0,
        }
        
    }
    componentDidMount() {
        this.fetchData();
      }

    fetchData = async () => {
        try {
            console.log("lodding")
            const response = await axios.get("https://moj-api.herokuapp.com/debits")
            this.setState({apiData: response.data, found: true});

            const apiData = this.state.apiData;
            let total = 0;
            let amount = this.state.amount;

            apiData.map(item => {
                this.state.amount.push(item.amount)
                this.state.id.push(item.id)
                this.state.description.push(item.description)
                this.state.date.push(item.date)
            });
            
            for(let i =0; i < amount.length; i++)
                total = total + amount[i]

            this.setState({total_debit: total})

        } catch (error) {
            console.log("nog")
            if (error.response) {
                console.log(error.response.data); //Not Found
                console.log(error.response.status); //404
                this.setState({found: false});
            }
        }   
      }

    handleSearchClick = () => {
        if(document.getElementById('myInput_1').value !== '' && document.getElementById('myInput_2').value !== '')
        {  
            let date = new Date;
            
            const api_new = { 
                id: String(this.state.new_ids),
                description: document.getElementById('myInput_1').value,
                amount: parseInt(document.getElementById('myInput_2').value),
                date: String(date)
            }

            this.setState({
                apiData: [api_new].concat(this.state.apiData), 
                new_ids: this.state.new_ids+1, 
                total_debit: this.state.total_debit + parseInt(document.getElementById('myInput_2').value)
            }) 
            
            document.getElementById('myInput_1').value = '' 
            document.getElementById('myInput_2').value = ''
        } 
    }

  
    render = () => {
       
        let apiData = this.state.apiData;
        let total_debit = this.state.total_debit;
      
        return(
            <div class = "main">
                <div class= "top">
                    <div class = "nav_bar">
                        <ul> 
                            <li> <Link to = "/Assignment_4" class = "nav_item"> Home </Link>  </li>
                            <li> <Link to = "/userProfile" class = "nav_item"> User Profile </Link>  </li>
                            <li> <Link to = "/login" class = "nav_item"> User Profile </Link>  </li>
                            <li> <Link to = "/debit" class = "nav_item"> User Profile </Link>  </li>
                        </ul>
                    </div>

                    <p class = "total_debit"> Total : {total_debit}</p> 

                

                    <h1 class = "title">Debit </h1>
                </div>
                <input id = "myInput_1" class = "form__field" type="text" placeholder="Enter Desription"/>
                <input id = "myInput_2" class = "form__field" type="text" placeholder="Enter amount"/>
                <button onClick={this.handleSearchClick} class="btn custom_btn">Search</button>

                <div class = "debit_card">
                    {apiData.map(item => 
                        <div class = "card">
                            <img src= "https://www.pngkit.com/png/detail/359-3592939_big-money-bag-vector-big-money-icon-png.png"/>
                            <div class = "container">
                                <p>amount: {item.amount}</p> 
                                <p>description: {item.description}</p> 
                                <p>date: {item.date}</p>
                            </div>
                        </div>
                    )}
                </div>
                
            </div>
        );
    }
}


export default Debit;