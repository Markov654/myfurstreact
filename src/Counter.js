import React, {Component} from "react";
import "./App.css";


class Counter extends Component {

    constructor(props){
      super(props);
      this.state = {counter: 0};
    }
  
    IncrementCouter = () =>{
      this.setState( (prevState) => {
        return {counter: ++ prevState.counter};
      });
    }
  
    resetCouter = () =>{
      this.setState({counter: 0});
    }
  
  
  
    render() {
      return(
        <div>
        <h2> This is my conter with React {this.state.counter}</h2>
        <button onClick={this.IncrementCouter}>Increment</button>
        <button onClick={this.resetCouter}>Reset</button>
       
        </div>
      );
    }
  }

  export default Counter;