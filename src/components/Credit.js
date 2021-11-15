const Credits = (props) => {
    let creditView = () => {
        const { credits } = props;
        return credits.map((item) => {
            let date = item.date.slice(0,10)
            return(
                <div class = "card_1">
                    <img src= "https://www.pngkit.com/png/detail/359-3592939_big-money-bag-vector-big-money-icon-png.png"/>
                    <div class = "container">
                        <p>amount: {item.amount}</p> 
                        <p>description: {item.description}</p> 
                        <p>date: {date}</p>
                    </div>
                </div>
            )
        })
    }

    let { addCredit } = props

    return (
        <div> 

            <h1>Credit</h1> 
            

            <input id = "myInput_1" class = "form__field" type="text" placeholder="Enter Desription"/>
            <input id = "myInput_2" class = "form__field" type="text" placeholder="Enter amount"/>
            <button onClick={ () => addCredit([document.getElementById('myInput_1').value, document.getElementById('myInput_2').value])} class="btn_1 custom_btn">Add Debit</button>

            <div class = "debit_card">
                {creditView()}
            </div>
        </div>
    )
}

export default Credits;