import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import { connect } from 'react-redux'
import * as actions from '../../Actions/index'
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    name: '',
    description: '',
    priority: '',
    memberIDArr: [],
    labelArr: [],
    status: ''
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      id: new Date().getTime() + 1
    })
    if(this.props.convertTitle) {
      this.props.addTask(this.state)
    }else{
      this.props.updateTask(this.state) 
    }
    
     
    
  }

  memberChanged = (member) => {
    this.setState({
      memberIDArr: member
    })
  }

  labelChanged = (label) => {
    this.setState({
      labelArr: label
    })
  }

  componentWillReceiveProps = (nextprops) => {
    if(nextprops && nextprops.editTask){
      let{id,name,labelArr,priority,memberIDArr,status,description} = nextprops.editTask
      this.setState({
        id,
        name,
        description,
        priority,
        memberIDArr,
        labelArr,
        status
      })
    }
    
  }


  render() {

    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <form onSubmit={this.onSubmit}>
            <div className="modal-content">


              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">
                {this.props.convertTitle ? 'Thêm task' : 'Sửa task'}
                </h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>

              {/* Modal body */}
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="name">Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Mô tả:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Độ ưu tiên:</label>
                  <select
                    className="form-control"
                    id="priority"
                    name="priority"
                    value={this.state.priority}
                    onChange={this.onChange}
                  >
                    <option value={-1} >Chọn độ ưu tiên</option>
                    <option value={3}>Thấp</option>
                    <option value={2}>Trung bình</option>
                    <option value={1}>Cao</option>
                  </select>
                </div>
                <label>Người thực hiện:</label>
                <br />

                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="memberIDArr"
                  value={this.state.memberIDArr}
                  onChange={this.memberChanged}

                  >

                  <label><Checkbox value="user_1" /> Nghĩa</label>
                  <label><Checkbox value="user_2" /> Tuấn</label>
                  <label><Checkbox value="user_3" /> Hiếu</label>
                  <label><Checkbox value="user_4" /> Khải</label>
                </CheckboxGroup>

                <br /><br />
                <label >Nhãn:</label>
                <br />
                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="labelArr"
                  value={this.state.labelArr}
                  onChange={this.labelChanged}
                  
                > 

                  <label><Checkbox value="Frontend" /> Frontend</label>
                  <label><Checkbox value="Backend" /> Backend</label>
                  <label><Checkbox value="API" /> API</label>
                  <label><Checkbox value="Issue" /> Issue</label>
                </CheckboxGroup>
              </div>
              {/* Modal footer */}

              <div className="modal-footer">
              <button type="submit" className="btn btn-success" >{this.props.convertTitle ? 'Thêm task' : 'Sửa task'}</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editTask: state.editTask,
    convertTitle: state.convertTitle
  }


}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (newTask) =>{
      dispatch(actions.addTask(newTask))
    },
    updateTask: (task) => {
      dispatch(actions.updateTask(task))
    }
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);