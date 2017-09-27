import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checklist from './Checklist';
import MenuBar from './MenuBar';
import Statistics from './SearchBar';
import '../../public/scss/_app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      platform: 0,
      characters: [],
      currentPage: '',
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  handleMenuClick(tab) {
    console.log(`Tab: ${tab}`)
    this.setState({
      currentPage: tab,
    });
  }

  render() {
    const pageToRender = () => {
      if (this.state.currentPage === 'Checklist') {
        return (
          <Checklist />
        );
      } else if (this.state.currentPage === 'Statistics') {
        return (
          <Statistics />
        );
      }
    };

    return (
      <div id="app-container">
        <MenuBar changePage={this.handleMenuClick} currentPage={this.state.currentPage} />
        {pageToRender()}
      </div>
    );
  }
}

App.PropTypes = {
  displayName: PropTypes.string,
  platform: PropTypes.number,
  characters: PropTypes.array,
  currentPage: PropTypes.string,
};

export default App;
