import React, { Component } from 'react';

// import components
import AddNewTask from './AddNewTask'
import FilterProgress from './FilterProgress';
import FilterLabel from './FilterLabel';
import FilterPriority from './FilterPriority';
import Sort from './Sort';
import InitializeTask from './InitializeTask'

class Controls extends Component {
    render() {
        return (
            <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                 
                </div>
                {/* add new task */}
                <AddNewTask  isAddNewTask={this.props.isAddNewTask}              />


                {/* localstorage */}
                <InitializeTask 
                setLocalStorage = {this.props.setLocalStorage}
                />
                {/* Filter */}
                <div className="px-3">
                  
                    <FilterProgress changeFilterProgress={this.props.changeFilterProgress}/>

                    <FilterLabel changeFilterLabel={this.props.changeFilterLabel}/>

                    <FilterPriority onSortPriority={this.props.onSortPriority}/>

                    <Sort onSortList={this.props.onSortList }/>
                </div>
              </div>
        );
    }
}

export default Controls;