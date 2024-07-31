import React, {Component} from "react";
import "./App.css";

class Form extends Component{

    
  constructor (props) {
    super(props);

          this.state = {
             name : "",
             email: "",
             gender: ""
          }
  }


    render(){
        return(
            <div>
                <form>
            <input id="name" type="text" placeholder="ime" autoComplete="off"></input>
            <input id="email" type="text" placeholder="emal" autoComplete="off"></input>
            <bh></bh>
            <br></br><br></br>

            <select id="gender">
                <option value=''></option>
                <option value='Man'>Man</option>
                <option value='Woman'>Woman</option>
            </select>
                <br></br>
                <br></br>
                <inpit type = 'submit' volue = "Потвърди"/>
                 </form>
                <div>
                    <p>Ime:</p>
                </div>
            </div>
        );
    }
}

export default Form;