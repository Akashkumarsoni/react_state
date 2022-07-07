import React, { Component } from 'react'

export class ClickBtn extends Component {
state = {
    clicktimes : 0,
    i : ""
}

     handleClick=(event)=>{
        var c= this.state.clicktimes%2;
        
       if(c == 0){
        this.state.i = "Odd";
       }
       else{
        this.state.i = "Even";
       }
        this.setState({
            clicktimes : this.state.clicktimes + 1
        });
         event.target.innerHTML= "Clicked "+(this.state.clicktimes + 1) + " times " ;
        console.log(this.state.clicktimes);
        }

  
  render() {
    return (
      <div>
        <button  className='clickbtn' onClick={this.handleClick} > Click me
            </button>&nbsp;  <h1>{this.state.i}</h1>
      </div>
    )
  }
}

export default ClickBtn