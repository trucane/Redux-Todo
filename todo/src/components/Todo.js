import React from 'react';
import {connect} from 'react-redux';
import {addTodo, deleteItem, toggleComplete} from '../actions'




class Todo extends React.Component{

    state = {
            item:''
    };
    
  
handleChange = (e) =>{
    //console.log(this.props.state)
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

deleteTodo = (todo, e) =>{
    e.preventDefault()
    const trying = this.props.todoList.filter(res => res.name !== todo.name);
    this.props.deleteItem(trying)
}

handleToggle = (e, index) =>{
    e.preventDefault();
    this.props.toggleComplete(index)

}

    render(){
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input 
                        name="item" 
                        placeholder="add todo"
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.item}

                        />

                    <button >Add to do</button>
                </form>
                <ul>
                    {this.props.todoList.map( (todo, index) =>(
                     <li key={todo.id} onClick={(e) => this.handleToggle(e, index)}> 
                            <span style ={{textDecoration: todo.completed ? 'line-through': 'none'}}>{todo.name}</span>
                            <button onClick={(e) => this.deleteTodo(todo, e)}>x</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}



const mapStateToProps = (state) =>{
    return{
        todoList:state.todoList
    }
}


export default connect(mapStateToProps, {addTodo,deleteItem,toggleComplete})(Todo)