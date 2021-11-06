import React, {Component, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Debit extends Component{
    constructor(props){
        super(props);
        this.state = {
            apiData: [],

            found: false,
            description:"",
            amount: 0,
            total_debit: 0,
        }
    }
    componentDidMount() {
        this.fetchData();
      }

    fetchData = async () => {
        try {
            const response = await axios.get("https://moj-api.herokuapp.com/debits")
            this.setState({apiData: response.data, found: true});

        } catch (error) {
            if (error.response) {
                console.log(error.response.data); //Not Found
                console.log(error.response.status); //404
                this.setState({found: false});
            }
        }

        
      }

    makeList = () => {
        let apiData = this.state.apiData;
        let list = apiData.map( (item, index) => {
            return (
                <div>
                    <li> description:  {item.description} </li>
                    <li>amount:  {item.amount} </li>
                    <li>date:  {item.date} </li>
                </div>
            );
        });
        return list;
    }

    handleSearchClick= () =>{  
        
        if(document.getElementById('myInput_1').value !== '' && document.getElementById('myInput_2').value !== '')
        {   
            
            this.state.description = document.getElementById('myInput_1').value; 
            this.state.amount = document.getElementById('myInput_2').value;

            this.state.total_debit += this.state.amount;
            
            let total = document.getElementById("debit_total");
            total.removeChild(total.lastChild);
            total.appendChild(document.createTextNode(this.state.total_debit)); 


            document.getElementById('myInput_1').value = '';
            document.getElementById('myInput_2').value = '';

            let des_item = document.createElement("LI");
            let amt_item = document.createElement("LI");
            let dat_item = document.createElement("LI");
            let date = new Date;

            dat_item.appendChild(document.createTextNode("Date: "));
            dat_item.appendChild(document.createTextNode(date.toDateString()));

            amt_item.appendChild(document.createTextNode("amount: "));
            amt_item.appendChild(document.createTextNode(this.state.amount)); 
            
            des_item.appendChild(document.createTextNode("description: "));
            des_item.appendChild(document.createTextNode(this.state.description));
            
        
            let new_item = document.createElement("DIV");

            new_item.appendChild(amt_item);
            new_item.appendChild(des_item);
            new_item.appendChild(dat_item);
        
            let list = document.getElementById("list");
            list.insertBefore(new_item, list.firstChild)    
        }  
    }

    render(){
        return(
            <div>
                <div>

                <h1> Debit </h1>
                    <div> Username: {this.props.userName}</div>
                    <div>Member Since: {this.props.memberSince}</div>
                    <div>
                        <h3>total Debit: </h3>
                        <h3 id = "debit_total">{this.state.total_debit}</h3>
                    </div>
                    <input id = "myInput_1" type="text"  onChange={this.handleInputChange} placeholder="Enter Desription"/>
                    <input id = "myInput_2" type="text" onChange={this.amountInputChange} placeholder="Enter amount"/>
                    <button onClick={this.handleSearchClick}>Search</button>
            
                    
                    <ul id = "list"> {this.makeList()} </ul>

                    <Link to='/Assignment_4'> Return to Home </Link>
                    
                </div>
            </div>
        );
    }
}


export default Debit;