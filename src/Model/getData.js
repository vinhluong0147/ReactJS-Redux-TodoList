import Task from './Task'
import ListOfTask from './ListOfTask'
import TasksData from '../data'

let listOfTask = new ListOfTask();

for (let task of TasksData) {
    let id = task.id
    let name = task.name
    let priority = task.priority
    let labelArr = task.labelArr
    let memberIDArr = task.memberIDArr
    let status = task.status
    let description = task.description

    let newTask = new Task(id, name, priority, labelArr, memberIDArr, status, description);
    listOfTask.addTask(newTask)


}

export default listOfTask;