import React, { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {

  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="Type to search" 
        onChange={ (evt) => this.props.onFilter(evt.target.value) }/>
    );
  }  
};

export default SearchPanel;
