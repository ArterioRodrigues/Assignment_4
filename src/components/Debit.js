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
                apiData: this.state.apiData.concat(api_new), 
                new_ids: this.state.new_ids+1, 
                total_debit: this.state.total_debit + parseInt(document.getElementById('myInput_2').value)
            })    
        } 
    }

  
    render = () => {
       
        let apiData = this.state.apiData;
        let total_debit = this.state.total_debit;
      
        return(
            <div class = "main">
                <h1>Debit </h1>
                
                <p>total : {total_debit}</p>
                
                <input id = "myInput_1" type="text" placeholder="Enter Desription"/>
                <input id = "myInput_2" type="text" placeholder="Enter amount"/>
                <button onClick={this.handleSearchClick}>Search</button>

                
                <div>
                    {apiData.map(item => 
                        <div class = "card">
                            <div class = "container">
                            <img src={require("./download.png")}/>
                                <p>amount: {item.amount}</p> 
                                <p>description: {item.description}</p> 
                                <p>date: {item.date}</p>
                            </div>
                        </div>
                    )}
                </div>
                <Link to = "/Assignment_4"> User Profile </Link>
            </div>
        );
    }
}


export default Debit;