export default class Task {
    constructor(id, name, priority, labelArr, memberIDArr, status, description){
        this.id = id
        this.name = name
        this.priority = priority
        this.labelArr = labelArr
        this.memberIDArr = memberIDArr
        this.status = status
        this.description = description
    }
}