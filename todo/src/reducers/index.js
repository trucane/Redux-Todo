import {Add_To_Do, Delete_To_Do, Toggle_To_Do, Delete_All} from '../actions'

const initialState = {
    todoList:[
        {id: 0, name: 'Cook', completed:false},
        {id: 1, name: 'Clean', completed:false}
    ]
}


export default (state = initialState, action) =>{
    switch(action.type){

        case Add_To_Do:
        const newToDO = {id:Date.now(), name:action.payload, completed:false};
        return{
            ...state,
            todoList:[...state.todoList,newToDO]
        };


        case Delete_To_Do:
            const newToDo = state.todoList.filter(todos => todos.id !== action.payload);
        return{
                todoList:newToDo,
        };

        case Toggle_To_Do:
            return{
                ...state,

                todoList:state.todoList.map((todo) =>{
                    if(action.payload === todo.id){
                        return{
                            ...todo,
                            completed:!todo.completed
                        };
                    }else{
                        return todo
                    }
                })
                
            }

        case Delete_All:
            const all = state.todoList.filter(res => res.completed === false)
            return{
                ...state,
                todoList:all
            }

        default:
            return state
    }
};