import React, { Component } from 'react'
import './Todo.css';
export class Todo extends Component {
  constructor(){
    super();
    this.state = { data: '',incomplete:["ak","bk"],complete:["comp1","comp2"]}
  }
  inputtodo = (e)=>{
    this.setState({
        data : e.target.value
    })
  }
  addClick = () => {
    const inp = this.state.data;
    if(inp === ''){
        alert("Field is empty");
    }
    else{
        this.setState({
            incomplete : [...this.state.incomplete,inp],
            data : ''
        });
        document.getElementById("new-task").value = '';
        document.getElementById("addtodobtn").innerHTML = "Add";
    }

}
donetaskinc =(e)=>{
    var txt = e.target.nextSibling.textContent;
    var indx = this.state.incomplete.indexOf(txt);
    this.state.incomplete.splice(indx,1);
    this.setState({
        complete : [...this.state.complete,txt]
    });
}
donetaskcomp =(e)=>{
    var txt = e.target.nextSibling.textContent;
    var indx = this.state.complete.indexOf(txt);
    this.state.complete.splice(indx,1);
    this.setState({
        incomplete : [...this.state.incomplete,txt]
    });
}
editTodoInc=(e)=>{
    var txt = e.target.previousSibling.textContent;
    var indx = this.state.incomplete.indexOf(txt);
    this.state.incomplete.splice(indx,1);
    document.getElementById("new-task").value = txt;
    document.getElementById("addtodobtn").innerHTML = "Update";
    this.setState({
        data : txt,
        incomplete : this.state.incomplete
    });
    
}
editTodoComp=(e)=>{
    var txt = e.target.previousSibling.textContent;
    var indx = this.state.complete.indexOf(txt);
    this.state.complete.splice(indx,1);
    document.getElementById("new-task").value = txt;
    document.getElementById("addtodobtn").innerHTML = "Update";
    this.setState({
        data : txt,
        complete : this.state.complete
    });
    
}
deleteTaskInc=(e)=>{
    var txt = e.target.previousSibling.previousSibling.textContent;
    var indx = this.state.incomplete.indexOf(txt);
    this.state.incomplete.splice(indx,1);
    this.setState({
        incomplete : this.state.incomplete
    });
}
deleteTaskComp=(e)=>{
    var txt = e.target.previousSibling.previousSibling.textContent;
    var indx = this.state.complete.indexOf(txt);
    this.state.complete.splice(indx,1);
    this.setState({
        complete : this.state.complete
    });
}
  render() {
    return (
        <div className="container">
            <h2>TODO LIST</h2>
            <h3>Add Item</h3>
            <p>
                <input onChange={this.inputtodo} id="new-task" name='newTask' type="text"/>
                <button name="addBtn" id='addtodobtn' onClick={this.addClick}>Add</button>
            </p>
            <h3>Todo</h3>
            <h3>Incompleted</h3>
            <ul id="incomplete-tasks">
                {this.state.incomplete.map((i)=> <TodoList delTask={this.deleteTaskInc} editTask={this.editTodoInc} handleChange={this.donetaskinc} uniq={Math.random()} todos={i}/>)}
                
            </ul>
            <h3>Completed</h3>
            <ul id="completed-tasks">
            {this.state.complete.map((i)=> <TodoList delTask={this.deleteTaskComp} editTask={this.editTodoComp}  handleChange={this.donetaskcomp} tufal={true} uniq={Math.random()} todos={i}/>)}
            </ul>
        </div>
    )
  }
}


export class TodoList extends Component {
  render() {
    return (
        <li key={this.props.uniq}>
        <input type="checkbox" defaultChecked={this.props.tufal} onChange={this.props.handleChange}/>
        <label id='todolabel'>{this.props.todos}</label>
        <button  className="edit" onClick={this.props.editTask}>Edit</button>
        <button className="delete" onClick={this.props.delTask}>Delete</button>
        </li>
    )
  }
}

export default Todo