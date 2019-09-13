/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions/index'
class InitializeTask extends Component {

    render() {
        return (
            <button 
                type="button" 
                className="btn my-3 btn-warning"
                onClick={this.props.initializeTask}
                >
                Lấy dữ liệu từ LocalStortage
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        initializeTask: () => {
            dispatch(actions.initializeTask())
        }
    }
}
export default connect(null,mapDispatchToProps)(InitializeTask)