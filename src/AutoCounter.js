import React, {Component} from "react";
import "./App.css";

class Autocounter extends Component{

    constructor (props) {
      super(props);
      this.state = {counter: 0}
    }
  
    componentDidMount(){
      this.timer = setInterval(this.IncrementCouter1, 50)
    }
  
    componentDidUpdate( prevProps , prevState){
      if( prevState.counter === 1000){
        this.setState({ counter:0})
      }
    }
  
    componentWillUnmount(){
      clearInterval (this.thimer)
    }
  
  
  
    IncrementCouter1 = () =>{
      this.setState( (prevState) => {
        return {counter: ++ prevState.counter}
      })
    }
  
  
    render(){
      return(
            <div>
           <h1>Life cycle of komponent and auto counter</h1>
           <h2>{this.state.counter}</h2>
           </div>
      );
    }
  }

  export default Autocounter;