import React, {Component} from "react";
import "./App.css";

class Content extends Component{
    render(){
      return(
         <div style={{color: this.props.color}}>
          <i>{this.props.children}</i>
         </div>
      );
    }
  }

  export default Content;