import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../Actions/index'
class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortType: ''
        }
    }
    handleFilterSort = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.filter('sort', this.state.sortType)
        })
    }

    render() {
        return (
            <div className="form-group text-left">
                <label>Sắp xếp theo công việc</label>
                <select className="form-control" 
                name="sortType"
                onChange={this.handleFilterSort}
                >
                    <option value="asc">Từ A đến Z</option>
                    <option value="desc">Từ Z đến A</option>
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
export default connect(null, mapDispatchToProps)(Sort);