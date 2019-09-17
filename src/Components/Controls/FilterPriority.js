import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../Actions/index'
class FilterPriority extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priorityType: -1
        }
    }

    handleFilterPriority = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.filter('priority', this.state.priorityType)
        })
    }
 
    render() {
        return (
            <div className="form-group text-left">
                <label htmlFor="sel1">Độ ưu tiên</label>
                <select className="form-control" name="priorityType" onChange={this.handleFilterPriority}>
                    <option className="font-weight-bold" value={-1} >Tất cả</option>
                    <option className="text-info font-weight-bold" value={3} >Thấp</option>
                    <option className="text-success font-weight-bold" value={2} >Trung bình</option>
                    <option className="text-danger font-weight-bold" value={1} >Cao</option>
                </select>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        filter: (filterType, filterValue) => {
            dispatch(actions.filter(filterType, filterValue))
        }
    }

}
export default connect(null, mapDispatchToProps)(FilterPriority);