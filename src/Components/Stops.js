import React from 'react';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';


export function Stops() {
  return (
    <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
      <Menu.Item key="0">
        <PieChartOutlined />
        <span>Home</span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="1">
        <DesktopOutlined />
        <span>Queenstown</span>
        <Link to="queenstown" />
      </Menu.Item>
    </Menu>
  );
}