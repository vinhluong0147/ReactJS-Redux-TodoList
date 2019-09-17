import React, { Component } from 'react';
import { connect} from 'react-redux'
// import components
import FilterString from '../Controls/FilterString';
import TaskItem from './TaskItem';

class TaskList extends Component {

  
    render() {
      let {tasks,filter} = this.props
      let filterTasks = [];
        switch(filter.filterType){
          case 'status':
          if(parseInt(filter.filterValue, 10) === -1){
            filterTasks = tasks
          }else{
            for(let task of tasks){
              if(parseInt(task.status,10) === filter.filterValue){
                filterTasks = [...filterTasks, task]
              }
            } 
          }
          break;


          case 'label':
          if(filter.filterValue === 'Tất cả'){
            filterTasks = tasks
          }else{
            for(let task of tasks){
              if(task.labelArr.includes(filter.filterValue)){
                filterTasks = [...filterTasks, task];
              }
            }
          }
          break;


          case 'priority':
          if(parseInt(filter.filterValue, 10) === -1){
            filterTasks = tasks
          }else{
            for(let task of tasks){
              if(task.priority === parseInt(filter.filterValue, 10)){
                filterTasks = [...filterTasks, task]
              }
            } 
          }
          break;


          case 'sort':
          filterTasks = tasks
          if(filter.filterValue === 'asc'){
            filterTasks.sort((a,b) => {
              let x = a.name.toLowerCase();
              let y = b.name.toLowerCase()
              if(x<y) {return -1;}
              if(x>y) {return 1;}
              return 0
            })
          }
          if(filter.filterValue === 'desc'){
            filterTasks.sort((a,b) => {
              let x = a.name.toLowerCase();
              let y = b.name.toLowerCase()
              if(x>y) {return -1;}
              if(x<y) {return 1;}
              return 0
            })
          }
          break;


          case 'search':
            filterTasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(filter.filterValue.toLowerCase()) !== -1;
          })
          break;

          
          case '':
          filterTasks = tasks
          break;

          default:
          break;
         
      }
      let elmItem = filterTasks.map((task, index) => {
        return <TaskItem 
        key={index} 
        task={task} 
        index={index} 
        />
      })
      
        return (
            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                  <div className="row header header--right d-flex align-items-center mx-0">
                    <div className="col-md-6">
                      <div className=" d-flex justify-content-between">
                        <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <FilterString />
                    </div>
                    
                  </div>
                </div>
                <div className="px-3">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                      
                        <th className="text-center">STT</th>
                        <th className="text-center">Công việc</th>
                        <th className="text-center">Nhãn</th>
                        <th className="text-center">Độ ưu tiên</th>
                        <th className="text-center">Người thực hiện</th>
                        <th className="text-center">Xử lý</th>
                        <th className="text-center">Tình trạng</th>
                        <th className="text-center">Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {elmItem }                      
                    </tbody>
                  </table>
                </div>
              </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filter: state.filter
  }
}
export default connect(mapStateToProps, null)(TaskList);