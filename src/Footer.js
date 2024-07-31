import React, {Component} from "react";
import "./App.css";

class Footer extends Component{
    render(){
      return(
        <>
        <br></br>
        <hr></hr>
        <small>This is evethig friends</small>
        <small>{ new Date().toLocaleTimeString()}</small>
        </>
      );
    }
  }

  export default Footer;