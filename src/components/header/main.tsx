import type { Component } from 'solid-js';
import TabBar from "./TabBar"
import ToolBar from "./ToolBar"

const Header: Component = () => {
  return (
    <span style={{ display: 'flex', "flex-direction": 'column', gap: '8px' }}>
      <TabBar/>
      <ToolBar/>
    </span>
  );
};

export default Header
