import {combineReducers} from 'redux';
import tasks from './tasks'
import editTask from './editTask'
import convertTitle from './convert_title'
import filter from './filter'
const Reducers = combineReducers({
    tasks,editTask,convertTitle,filter
})

export default Reducers;