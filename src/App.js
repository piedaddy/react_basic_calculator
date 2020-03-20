//import React, {useEffect, useState} from 'react';
import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            operator : "",
            number: 1,
            answer: null
        }
    }

//function App() {
    // const [value, setValue] = useState(0);
    // const [oldNumber, setOldNumber] = useState(0);
    // const [newNumber, setNewNumber] = useState(0);

     handleClear = () => {
        console.log('clear working')
        this.setState({
            number1: 0,
            number2: 0,
            operator : "",
            number: 1,
            answer: null
        })
    }

    handleOpClick = (e) => {
        this.setState({
            operator: e.target.value,
            number:2
        })
        console.log(this.state.operator)
    }

    handleEquals = () => {
        let answer=null;
        if(this.state.operator === "+") {
            answer = this.state.number1 + this.state.number2
        } else if(this.state.operator === "-") {
            answer = this.state.number1 - this.state.number2
        } else if(this.state.operator === "*") {
            answer = this.state.number1 * this.state.number2
        } else if(this.state.operator === "/") {
            answer = this.state.number1 / this.state.number2
        }
        this.setState({answer:answer});
    }
    
    // handleNumberChange = () => {
    //     if(this.state.number ===1) {
    //         this.setState({number1: this.state.number1 * 10 + number})
    //     } else {
    //         this.setState({number2: this.state.number2 * 10 + number})
    //     }
    // }

    render() {
        return (
            <div className="calc">
                <div className="display">
                    <input type="number" 
                    value={
                        this.state.answer === null ? 
                            (this.state.number === 1 ? this.state.number1 : this.state.number2) : this.state.answer}
                            disabled/>
                </div>
                <div className="buttons">
                    <div className="left">
                        <button>0</button>
                        <button onClick={this.handleClear} className="clear">C</button>
                        <button className="equal" onClick={this.handleEquals}>=</button>
                        {
                            ( new Array( 9 ).fill( null ) ).map( ( a, i ) => {
                                const number = i + 1;

                                return (
                                    <button onClick={()=> {
                                        if(this.state.number ===1) {
                                            this.setState({number1: this.state.number1 * 10 + number})
                                        } else {
                                            this.setState({number2: this.state.number2 * 10 + number})
                                        }
                                    }} value={number} key={i}>{number}</button>
                                )
                            } )
                        }
                    </div>
                    <div className="actions">
                        <button onClick ={this.handleOpClick} value="/"> &divide;</button>
                        <button onClick ={this.handleOpClick} value="*">&times;</button>
                        <button onClick ={this.handleOpClick} value="-">-</button>
                        <button onClick ={this.handleOpClick} value="+">+</button>
                    </div>
                </div>
            </div>
            );
        }
}

export default App;
