import React from 'react';
import {connect} from 'react-redux';
import {addTodo, deleteItem, toggleComplete, deleteAll} from '../actions'
import '../App.css'


// Task to complete:
// 1. Add local storage to persist data
// 2. Create component for todo cards for DRY coding
// 2.5 Add Protypes to for checking data types
// 3. Refactor CSS to SASS files
// 4. Create HOS componets for buttons
// 5 Create draggable functionality to trash todo task
// 6 Add "Mark Urgent functionality"




class Todo extends React.Component{

    state = {
            item:''
    };
    
  
handleChange = (e) =>{
    this.setState({
        item: e.target.value
    })
}

addItem = (e) =>{
    let value = this.state.item;
    e.preventDefault()
    if(value.trim() !== ''){
        this.props.addTodo(this.state.item);
        this.setState({
            item:''
        });
    }
}

deleteTodo = (id, e) =>{
    e.preventDefault()
    this.props.deleteItem(id)
}

deleteAllCompleted = (e) =>{
    e.preventDefault()
    const available = this.props.todoList.filter(res => res.completed === true)
    if(available.length > 0){
        this.props.deleteAll();
    }
}

handleToggle = (e, id) =>{
    e.preventDefault();
    this.props.toggleComplete(id)

}

    render(){
        return(
            <div className="App">
                <div className="App-header">
                    <form onSubmit={this.addItem}>
                        <input 
                            name="item" 
                            placeholder="add todo"
                            onChange={this.handleChange}
                            type="text"
                            value={this.state.item}

                            />

                        <button>Submit</button>
                    </form>
                </div>

                <div className="App-body">
                    <div className="task-container">

                        <h4>In Progress</h4>
                        <ul>
                        { 
                            this.props.todoList.map( (todo) =>{

                                if(todo.completed === false){

                                    return <li key={todo.id}>
                                                <div className="task task-progress">
                                                    <span onClick={(e) => this.handleToggle(e, todo.id)}>{todo.name}</span>
                                                </div>
                                            </li>
                
                                    
                                }
                            }) 
                        }
                        </ul>
                    </div>


                    <div className="task-container">
                        <h4>Completed <button className="addbutton" onClick={(e) => this.deleteAllCompleted(e)}><small>Del All</small></button> </h4>
                        <ul>
                            {this.props.todoList.map( (todo) =>{
                                if(todo.completed === true){

                                    return <li key={todo.id} onClick={(e) => this.handleToggle(e, todo.id)}>
                                                <div className="task task-completed">
                                                    <span>{todo.name}</span>
                                                    <button onClick={(e) => this.deleteTodo(todo.id, e)}>x</button>
                                                </div>
                                            </li>
                                }}) 
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) =>{
    return{
        todoList:state.todoList
    }
}


export default connect(mapStateToProps, {addTodo,deleteItem,toggleComplete, deleteAll})(Todo)