// Chú ý: 
// membersID: 
// Priority -->1: Cao, 2: Thấp, 3: Trung bình

const TasksData = [
    {
        id: new Date().getTime() + 1,
        name: "Học HTML",
        labelArr: ["Frontend", "Backend"],
        priority: 1, 
        memberIDArr: ["user_2"],
        status: 2, 
        description: "Học HTML"
    },
    {
        id: new Date().getTime() + 2,
        name: "Học CSS",
        labelArr: ["Frontend", "API"],
        priority: 2, 
        memberIDArr: ["user_4", "user_5"],
        status: 1,
        description: "Học CSS"
    },
    {
        id: new Date().getTime() + 3,
        name: "Học Javascript",
        labelArr: ["Backend"],
        priority: 2, 
        memberIDArr: ["user_3", "user_5"],
        status: 1,
        description: "Học Javascript"
    },
    {
        id: new Date().getTime() + 4,
        name: "Học Angular",
        labelArr: ["Frontend", "Backend", "Database"],
        priority: 3, 
        memberIDArr: ["user_2", "user_3", "user_4", "user_5"],
        status: 3,
        description: "Học Angular"
    },

    {
        id: new Date().getTime() + 5,
        name: "Học Reactjs",
        labelArr: ["Database"],
        priority: 3, 
        memberIDArr: ["user_2", "user_3", "user_4", "user_5"],
        status: 1,
        description: "Học Reactjs"
    },
]

export default TasksData;