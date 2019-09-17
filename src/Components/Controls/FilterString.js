import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../Actions/index'
class FilterString extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterSearch: ''
        }
    }

    handleFilterSearch = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
            
        }, () => {
            this.props.filter('search',this.state.filterSearch)
        })
    }
    
    render() {
        return (
            <div className="form-group text-left my-0">
                <input type="text" className="form-control" placeholder="Tìm kiếm công việc" name="filterSearch" onChange={this.handleFilterSearch} />
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
export default connect(null, mapDispatchToProps)(FilterString);