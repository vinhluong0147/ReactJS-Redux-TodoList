export default class ListOfTask {
    constructor() {
        this.list = [];
    }

    addTask = (task) => {
        this.list = [...this.list, task]
    }

}