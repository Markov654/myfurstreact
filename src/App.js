import React, {Component} from "react";
import "./App.css";

import ListReact from "./LIstReact";



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: [
               {autohor: "Ivo", content: 'Hi'},
               {autohor: "djon", content: 'Hi! how are you?'},
               {autohor: "Ivo", content: 'Hi Emm are you ok?'},
               {autohor: "Emma", content: 'Hi are you buzzy now?'},
               {autohor: "Ivo", content: 'Hi i am fain'},
      ]
    };
  }

  renderMessagas(){
    const messageElements = this.state.messages.map((messageObj, index) => {
      return <p key={index}><b>{messageObj.autohor}:</b>{messageObj.content}</p>
    });
    return messageElements;
  }
  render(){
    return(
      <div>
        {this.renderMessagas()}
      </div>
    )
  }
}











export default App;
