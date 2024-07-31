import React, {Component} from "react";
import "./App.css";

class Header extends Component{
    render() {
      return(
        <div className="App">
        <h1> My React App {this.props.title}</h1>
        <p> This is my mission to write react</p>
        </div>
      );
    }
  }

  export default Header;