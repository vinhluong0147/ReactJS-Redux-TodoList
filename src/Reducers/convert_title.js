import * as types from '../Constants/actionType'

const initialState = true

let reducer = (state = initialState, action) => {
    switch(action.type){
        case types.CONVERT_TITLE_ADD:
        state = true
        return {...state}

        case types.CONVERT_TITLE_EDIT:
        state = false
        return {...state}

        default:
        break;
    }
    return state
}

export default reducer