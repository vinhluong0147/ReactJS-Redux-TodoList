import React, { Component } from 'react';

class FilterLabel extends Component {

    handleFilter = (filterLabel) => {
        this.props.changeFilterLabel(filterLabel)
    }
    render() {
        return (
            <div className="filter filter--label">
                <ul className="list-unstyled text-left" >Nhãn
                <li className="py-1 display-5 lead" onClick={this.handleFilter.bind(this, 'Tất cả')}>
                        <i className="fa fa-circle mr-2" />Tất cả
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.handleFilter.bind(this, 'Frontend')}>
                        <i className="fa fa-circle mr-2" />Frontend
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.handleFilter.bind(this, 'Backend')}>
                        <i className="fa fa-circle mr-2"  />Backend
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.handleFilter.bind(this, 'API')} >
                        <i className="fa fa-circle mr-2" />API
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.handleFilter.bind(this, 'Database')}>
                        <i className="fa fa-circle mr-2"  />Database
                    </li>
                </ul>
            </div>
        );
    }
}

export default FilterLabel;