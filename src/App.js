import React, {Component} from "react";
import "./App.css";



class App extends Component{
  render() {
    return(
         <div className="App">
          <Header title ='Furst' />
          <Content color = "violet">This is mql bay fall</Content>
          <Content color = "green">This is mql bay fall</Content>
          <Content color = "blue">This is mql bay fall</Content>
          <Content color = "broun">This is mql bay fall</Content>
          <Footer></Footer>
        </div>
    );
  }
}

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

class Content extends Component{
  render(){
    return(
       <div style={{color: this.props.color}}>
        <i>{this.props.children}</i>
       </div>
    );
  }
}

class Footer extends Component{
  render(){
    return(
      <>
      <br></br>
      <hr></hr>
      <small>This is evethig friends</small>
      </>
    );
  }
}

export default App;
