import React, { Component } from 'react'
import './Calci.css';
export default class Calci extends Component {
  constructor() {
    super();
    this.state = { data: ''}
}
calculate = () => {
    try 
    {
        const result = eval(this.state.data).toString();
        this.setState({data: result});
    } 
    catch (e) 
    {
      alert(e);
      this.setState({data: 'error'})
    }
}
handleClick = e => {
    const value = e.target.getAttribute('data-value').toString();
    switch(value) {
        case 'clear':
          console.log(value);
            this.setState({ data: ''});
            break;
        case 'equal':
          console.log(value);
            this.calculate();
            break;
        case 'delete':
          console.log(value);
          this.setState({
            data : this.state.data.substring(0,this.state.data.length-1)
          });
          break;
        default:
          console.log(value);
            this.setState({ data: this.state.data + value});
            break;
    }
}
  render() {
    return (
      <div>
        <div id="calculator">

	<div className="top">
		<span className="clear"><Button btnclick={this.handleClick} label="C" value="clear" /></span>
  <Display data={this.state.data}/>
	</div>
	
	<div className="keys">
  
                    
		<span ><Button btnclick={this.handleClick} label="7" value="7" /></span>
		<span><Button btnclick={this.handleClick} label="8" value="8" /></span>
		<span><Button btnclick={this.handleClick} label="9" value="9" /></span>
		<span className="operator"><Button btnclick={this.handleClick} label="+" value="+" /></span>
		<span><Button btnclick={this.handleClick} label="4" value="4" /></span>
		<span><Button btnclick={this.handleClick} label="5" value="5" /></span>
		<span><Button btnclick={this.handleClick} label="6" value="6" /></span>
		<span className="operator"><Button btnclick={this.handleClick} label="-" value="-" /></span>
		<span><Button btnclick={this.handleClick} label="1" value="1" /></span>
		<span><Button btnclick={this.handleClick} label="2" value="2" /></span>
		<span><Button btnclick={this.handleClick} label="3" value="3" /></span>
		<span className="operator"><Button btnclick={this.handleClick} label="÷" value="/" /></span>
		<span><Button btnclick={this.handleClick} label="0" value="0" /></span>
		<span><Button btnclick={this.handleClick} label="." value="." /></span>
		<span className="eval"><Button btnclick={this.handleClick} label="=" value="equal" /></span>
		<span className="operator"><Button btnclick={this.handleClick} label="x" value="*" /></span>
    <span className="del"><Button btnclick={this.handleClick} label="Del" value="delete" /></span>
	</div>
</div>
      </div>
    )
  }
}
class Display extends Component {
  render(){
      return(
          <div className="screen">
              {this.props.data}
          </div>
      );
  }
}

class Button extends Component {
  render(){
      return(
          <div 
              className="Buttons"
              onClick={this.props.btnclick}
              data-size={this.props.size}
              data-value={this.props.value}>
              {this.props.label}
          </div>
      );
  }
}