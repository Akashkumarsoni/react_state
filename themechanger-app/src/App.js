import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import { ChileCompo } from "./ChileCompo";

export default class App extends Component {
  state = {
    mode: "light",
    color : 'black',
    bg : "white"
  };


  inputHandler = (e) => {
    var v = e.target.textContent;
    if(v == "Dark"){
      this.setState({
        mode : "dark",
        color : "black",
        bg : "white"
      });
    }
    else if(v == "Light"){
      this.setState({
        mode: "light",
        color : 'white',
        bg : "black"

      });
    }
    else if(v == "Party"){
      this.setState({
        mode: "party",
        color : 'black',
        bg : "Cyan"
      });
    }
   
  };
  render() {
    return (
      <div className="App">
        <ChileCompo val={this.state.mode}>
          <div className="buttonsofMode">
             <span onClick={this.inputHandler} style={{backgroundColor:this.state.bg,color:this.state.color}}>Dark</span>
             <span onClick={this.inputHandler} style={{backgroundColor:this.state.bg,color:this.state.color}}>Light</span>
             <span onClick={this.inputHandler} style={{backgroundColor:this.state.bg,color:this.state.color}} >Party</span>
             </div>
        </ChileCompo>
      </div>
    );
  }
}

