import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../Actions/index'
class FilterLabel extends Component {


    render() {
        return (
            <div className="filter filter--label">
                <ul className="list-unstyled text-left" >Nhãn
                <li className="py-1 display-5 lead" onClick={this.props.filter.bind(this, 'label', 'Tất cả')}>
                        <i className="fa fa-circle mr-2" />Tất cả
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.props.filter.bind(this, 'label', 'Frontend')}>
                        <i className="fa fa-circle mr-2" />Frontend
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.props.filter.bind(this, 'label', 'Backend')}>
                        <i className="fa fa-circle mr-2"  />Backend
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.props.filter.bind(this, 'label', 'API')}>
                        <i className="fa fa-circle mr-2" />API
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.props.filter.bind(this, 'label', 'Database')}>
                        <i className="fa fa-circle mr-2"  />Database
                    </li>
                </ul>
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
export default connect(null, mapDispatchToProps)(FilterLabel);