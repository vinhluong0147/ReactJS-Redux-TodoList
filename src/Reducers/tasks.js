import * as types from '../Constants/actionType';
import listOfTask from '../Model/getData';

let tasks = localStorage.setItem('tasks',JSON.stringify(listOfTask.list))
let tasksItem = JSON.parse(localStorage.getItem('tasks')) 
let initialState = tasksItem ? tasksItem : tasks
    

let reducer = (state = initialState, action) => {
    
    let tasksItem = JSON.parse(localStorage.getItem('tasks'))
    switch(action.type){
        case types.LIST_ALL:
        return [...state];

        case types.INITIALIZE_TASK:
        localStorage.setItem('tasks',JSON.stringify(listOfTask.list))
        window.location.reload()
        break;


        case types.ADD_TASK:
        tasksItem = [...tasksItem,action.newTask];
        state = tasksItem
        localStorage.setItem('tasks',JSON.stringify(tasksItem))
        return [...state];

        case types.UPDATE_TASK:
        for(let index in tasksItem){
            if(tasksItem[index].id === action.task.id){
                tasksItem[index] = action.task;
                localStorage.setItem('tasks',JSON.stringify(tasksItem))
                state = tasksItem;
                break;
            }
        }
        return [...state]

        case types.DELETE_TASK:
        console.log(action)
        for(let index in tasksItem){
            if(tasksItem[index].id === action.task.id){
                tasksItem.splice(index, 1)
                localStorage.setItem('tasks',JSON.stringify(tasksItem))
                state = tasksItem;
                break;
            }
        }
        return [...state]


        case types.CHANGE_STATUS:
        console.log(action)
        for(let index in tasksItem){
            if(tasksItem[index].id === action.id){
                tasksItem[index].status = action.status
                localStorage.setItem('tasks',JSON.stringify(tasksItem))
                state = tasksItem;
                break;
            }
        }
        return [...state]

        default:
        break;
    }

    return state
}

export default reducer