export const Add_To_Do = 'AddTodo';
export const addTodo = (value) =>{
    return{
        type:Add_To_Do,
        payload:value
    }
}

export const Delete_To_Do = 'DeleteTodo';
export const deleteItem = (todo) =>{
    return{
        type:Delete_To_Do,
        payload:todo
    }
}