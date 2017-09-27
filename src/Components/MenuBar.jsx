import 'antd/dist/antd.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import '../../public/scss/_menuBar.scss';

const MenuBar = (props) => {
  const handleClick = (e) => {
    return props.changePage(e.key);
  };

  return (
    <div id="menuBar-container">
      <Menu
        onClick={handleClick}
        mode="horizontal"
        theme="dark"
        id="menuBar"
      >
        <Menu.Item key="Statistics" className="menuBar-item">
          <img src="../assets/Crucible-Logo.png" alt="Crucible Logo" className="menuBar-image" />
          Statistics
        </Menu.Item>
        <Menu.Item key="Guardian" className="menuBar-item">
          <img src="../assets/Ghost.png" alt="RIP Dinklebot" className="menuBar-image" />
          My Guardian
        </Menu.Item>
        <Menu.Item key="Checklist" className="menuBar-item">
          <img src="../assets/Milestones.png" alt="Milestones" className="menuBar-image" />
          Weekly Checklist
        </Menu.Item>
        <Menu.Item key="Lore" className="menuBar-item">
          <img src="../assets/Tricorn.png" alt="The Lore of Destiny" className="menuBar-image" />
          Lore
        </Menu.Item>
      </Menu>
    </div>
  );
};


export default MenuBar;
