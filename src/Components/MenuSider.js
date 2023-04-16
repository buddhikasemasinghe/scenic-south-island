import React, { useState } from 'react';
import { TopMenu } from './TopMenu';
import { Layout } from 'antd';
const { Sider } = Layout;

const MenuSider = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Sider breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
      }} collapsible collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}>
      <div
        style={{
          height: 32,
          margin: 16,
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      />
      <TopMenu />
    </Sider>
  );
}

export default MenuSider;