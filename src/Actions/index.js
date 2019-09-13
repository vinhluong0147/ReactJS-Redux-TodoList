import * as types from '../Constants/actionType';

export const listAll = () =>{
    return{
        type: types.LIST_ALL
    }
}

export const initializeTask = () =>{
    return{
        type: types.INITIALIZE_TASK
    }
}

export const addTask = (newTask) =>{
    return{
        type: types.ADD_TASK,
        newTask
    }
}


export const editTask = (taskEdit) =>{
    return{
        type: types.EDIT_TASK,
        taskEdit
    }
}

export const updateTask = (task) =>{
    return{
        type: types.UPDATE_TASK,
        task
    }
}


export const deleteTask = (task) =>{
    return{
        type: types.DELETE_TASK,
        task
    }
}


export const convertTitleAdd = () =>{
    return{
        type: types.CONVERT_TITLE_ADD,
    }
}

export const convertTitleEdit = () =>{
    return{
        type: types.CONVERT_TITLE_EDIT,
        
    }
}

export const clearForm = () =>{
    return{
        type: types.CLEAR_FORM,
        
    }
}

export const changeStatus = (id, status) =>{
    return{
        type: types.CHANGE_STATUS,
        id,
        status
    }
}

export const filter = (filterType, filterValue) =>{
    return{
        type: types.FILTER,
        filterType,
        filterValue
    }
}