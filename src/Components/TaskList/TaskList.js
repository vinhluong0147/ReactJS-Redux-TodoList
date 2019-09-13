import React, { Component } from 'react';
import { connect} from 'react-redux'
// import components
import FilterString from '../Controls/FilterString';
import TaskItem from './TaskItem';

class TaskList extends Component {

  
    render() {
      let {tasks} = this.props
      let filterTask = [];
        switch(this.props.filter.filterType){
          case 'status':
          if(parseInt(this.props.filter.filterValue, 10) === -1){
            filterTask = tasks
          }else{
            for(let task of tasks){
              if(task.status === parseInt(this.props.filter.filterValue, 10)){
                filterTask = [...filterTask, task]
              }
            } 
          }

          break;

          case '':
          filterTask = tasks
          break;
          default:
          break;
         
      }
      let elmItem = filterTask.map((task, index) => {
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