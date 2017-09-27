import 'antd/dist/antd.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select } from 'antd';
import '../../public/scss/_searchBar.scss';
const Option = Select.Option;

const SearchBar = (props) => {
  const selectAfter = (
    <Select defaultValue={1} className="dropdown-selection" >
      <Option value={1}>
        <img src="../assets/XBOX.png" alt="XBOX Live" className="dropdown-image" />
      </Option>
      <Option value={2}>
        <img src="../assets/PSN.png" alt="PlayStation Network" className="dropdown-image" />
      </Option>
      <Option value={3}>
        <img src="../assets/BNET.png" alt="Battle.net" className="dropdown-image" />
      </Option>
    </Select>
  );
  return (
    <div id="searchBar-container">
      <Input addonAfter={selectAfter} placeholder="PSN ID / XBOX Gamertag / Battle.net ID" id="userInput" />
    </div>
  );
};

export default SearchBar;
