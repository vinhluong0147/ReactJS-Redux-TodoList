import * as types from '../Constants/actionType'

const initialState = {
    id: '',
    name: '',
    description: '',
    priority: null,
    memberIDArr: [],
    labelArr: [],
    status: null
}

let reducer = (state = initialState, action) => {
    switch(action.type){
        case types.EDIT_TASK:
        state = action.taskEdit;
        return state

        case types.CLEAR_FORM:
        state = {
            id: '',
            name: '',
            description: '',
            priority: '',
            memberIDArr: [],
            labelArr: [],
            status: ''
        }
        return state

        default:
        break;
    }
    return state
}

export default reducer