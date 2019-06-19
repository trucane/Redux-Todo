export const Add_To_Do = 'AddTodo';
export const addTodo = (value) =>{
    return{
        type:Add_To_Do,
        payload:value
    }
}

export const Delete_To_Do = 'DeleteTodo';
export const deleteItem = (id) =>{
    return{
        type:Delete_To_Do,
        payload:id
    }
}


export const Delete_All = 'DeleteAll';
export const deleteAll = (todo) =>{
    return{
        type:Delete_All
    }
}

export const Toggle_To_Do = 'ToggleTodo';
export const toggleComplete = (id) =>{
    return {
        type:Toggle_To_Do,
        payload:id
    }
}