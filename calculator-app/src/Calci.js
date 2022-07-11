import React, { Component } from 'react'
import './Calci.css';
export default class Calci extends Component {
  constructor() {
    super();
    this.state = { data: ''}
}
calculate = () => {
    try {
        const result = eval(this.state.data);
        this.setState({data: result});
    } catch (e) {
      alert(e);
        this.setState({data: 'error'})
    }
}
handleClick = e => {
    const value = e.target.getAttribute('data-value');
    switch(value) {
        case 'clear':
            this.setState({ data: ''});
            break;
        case 'equal':
            this.calculate();
            break;
        default:
            this.setState({ data: this.state.data + value});
    }
}
  render() {
    return (
      <div>
        <div id="calculator">

	<div class="top">
		<span class="clear"><Button onClick={this.handleClick} label="C" value="clear" /></span>
  <Display data={this.state.data}/>
	</div>
	
	<div class="keys">
  
                    
		<span ><Button onClick={this.handleClick} label="7" value="7" /></span>
		<span><Button onClick={this.handleClick} label="8" value="8" /></span>
		<span><Button onClick={this.handleClick} label="9" value="9" /></span>
		<span class="operator"><Button onClick={this.handleClick} label="+" value="+" /></span>
		<span><Button onClick={this.handleClick} label="4" value="4" /></span>
		<span><Button onClick={this.handleClick} label="5" value="5" /></span>
		<span><Button onClick={this.handleClick} label="6" value="6" /></span>
		<span class="operator"><Button onClick={this.handleClick} label="-" value="-" /></span>
		<span><Button onClick={this.handleClick} label="1" value="1" /></span>
		<span><Button onClick={this.handleClick} label="2" value="2" /></span>
		<span><Button onClick={this.handleClick} label="3" value="3" /></span>
		<span class="operator"><Button onClick={this.handleClick} label="÷" value="/" /></span>
		<span><Button onClick={this.handleClick} label="0" value="0" /></span>
		<span><Button onClick={this.handleClick} label="." value="." /></span>
		<span class="eval"><Button onClick={this.handleClick} label="=" value="equal" /></span>
		<span class="operator"><Button onClick={this.handleClick} label="x" value="*" /></span>
	</div>
</div>
      </div>
    )
  }
}
class Display extends Component {
  render(){
      return(
          <div class="screen">
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
              onClick={this.props.onClick}
              data-size={this.props.size}
              data-value={this.props.value}>
              {this.props.label}
          </div>
      );
  }
}