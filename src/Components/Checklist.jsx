import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../public/scss/_checklist.scss';

class Checklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
      completed: false,
    };
  }
  render() {
    const listActivities = this.state.activities.map((activity) => {
      return (
        <li>{activity}</li>
      );
    });

    return (
      <div id="checklist-container">
        <h1>Weekly Checklist</h1>
        <ul id="activities-list">
          {listActivities}
        </ul>
      </div>
    );
  }
}

Checklist.PropTypes = {
  activities: PropTypes.array,
  completed: PropTypes.bool,
};

export default Checklist;
