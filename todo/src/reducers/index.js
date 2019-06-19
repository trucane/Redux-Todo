import {Add_To_Do, Delete_To_Do, Toggle_To_Do} from '../actions'

const initialState = {
    todoList:[
        {id: 0, name: 'Cook', completed:false},
        {id: 1, name: 'Clean', completed:false}
    ]
}


export default (state = initialState, action) =>{
    switch(action.type){
        case Add_To_Do:
        const newTODO = {id:Date.now(), name:action.payload, completed:false};
        return{
            ...state,
            todoList:[...state.todoList,newTODO]
        };

        case Delete_To_Do:

        return{
                todoList:action.payload
        };

        case Toggle_To_Do:
            return{
                ...state,

                todoList:state.todoList.map((todo, index) =>{
                    if(action.payload === index){
                        return{
                            ...todo,
                            completed:!todo.completed
                        };
                    }else{
                        return todo
                    }
                })
                
            }

        default:
            return state
    }
};