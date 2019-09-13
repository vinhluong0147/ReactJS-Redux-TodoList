import React, { Component } from 'react';

class FilterPriority extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priorityType: -1
        }
    }

 
    render() {
        return (
            <div className="form-group text-left">
                <label htmlFor="sel1">Độ ưu tiên</label>
                <select className="form-control" name="priorityType">
                    <option className="font-weight-bold" value={-1} >Tất cả</option>
                    <option className="text-info font-weight-bold" value={3} >Thấp</option>
                    <option className="text-success font-weight-bold" value={2} >Trung bình</option>
                    <option className="text-danger font-weight-bold" value={1} >Cao</option>
                </select>
            </div>
        );
    }
}

export default FilterPriority;