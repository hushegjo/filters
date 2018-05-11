import React, { Component } from 'react';
import { Header, SearchField, FiltersWrapper } from './components';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filterIsVisible: false,
      filters: []
    }
  }

  searchFieldChangeHandler = () => {
    this.setState({
      filterIsVisible: true
    });
  }

  searchFieldSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      filterIsVisible: false
    });
  }

  getStateFromFilters = (filters) => {
    const JSONObj = JSON.stringify(filters)
    this.setState({
      filters: filters
    });
    console.log(JSONObj);
  }

  render() {
    return (
      <div className="container">
        {/* Header */}
        <div className="row">
          <Header />
        </div>
        {/* Search field */}
        <div className="row">
          <SearchField change={this.searchFieldChangeHandler} submit={this.searchFieldSubmitHandler} />
        </div>
        {
          /* Conditional rendered overlay */
          this.state.filterIsVisible &&
          <FiltersWrapper unmount={this.getStateFromFilters} />
        }
        <div>
          <pre>
            {
              this.state.filters.length !== 0 && JSON.stringify(this.state.filters)
            }
          </pre>
        </div>
      </div>
    );
  }
};