import React, { Component } from 'react';

class FilterString extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterSearch: ''
        }
    }
    
    onChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
            
        }, () => {
            this.props.changeFilterSearch(this.state.filterSearch)
        })
    }
    render() {
        return (
            <div className="form-group text-left my-0">
                <input type="text" className="form-control" placeholder="Tìm kiếm công việc" name="filterSearch" onChange={this.onChange} />
            </div>
        );
    }
}

export default FilterString;