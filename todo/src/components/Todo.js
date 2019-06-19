import React from 'react';
import {connect} from 'react-redux';
import {addTodo, deleteItem, toggleComplete, deleteAll} from '../actions'
import '../App.css'




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

                        <button>Add to do</button>
                    </form>
                </div>

                <div className="App-body">
                    <div className="task-container">

                        <h4>In Progress</h4>
                        <ul>
                        { 
                            
                            this.props.todoList.map( (todo, index) =>{

                                if(todo.completed === false){

                                    return <li key={index} onClick={(e) => this.handleToggle(e, todo.id)}>
                                                <div className="task task-progress">
                                                    <span>{todo.name}</span>
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
                            {this.props.todoList.map( (todo, index) =>{
                                if(todo.completed === true){

                                    return <li key={index} onClick={(e) => this.handleToggle(e, index)}>
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