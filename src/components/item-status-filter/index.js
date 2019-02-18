import React, { Component } from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends Component {

  state = {
    currnetActive: 'all'
  }

  toggleBtns = (status) => {
    const { onStatus } = this.props;    

    this.setState(() => {
      onStatus(status);

      return {
        currnetActive: status
      }
    })
  }

  render() {
    const curStatus = this.state.currnetActive;
    const clsNam = 'btn btn-outline-secondary';
    const actClsNam = 'btn btn-info';

    return (
      <div className="btn-group">
        <button type="button"
                className={ curStatus === 'all' ? actClsNam : clsNam }
                onClick={ this.toggleBtns.bind(this, 'all') } >All</button>
        <button type="button"
                className={ curStatus === 'active' ? actClsNam : clsNam }
                onClick={ this.toggleBtns.bind(this, 'active') } >Active</button>
        <button type="button"
                className={ curStatus === 'done' ? actClsNam : clsNam }
                onClick={ this.toggleBtns.bind(this, 'done') } >Done</button>
      </div>
    );
  }
}

export default ItemStatusFilter;
