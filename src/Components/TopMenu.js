import React from 'react';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { TrademarkOutlined, PieChartOutlined, StarOutlined, DesktopOutlined, TeamOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { useMapsDispatch } from '../Hooks/MapContext';
import SubMenu from 'antd/es/menu/SubMenu';


export function TopMenu() {
  const dispatch = useMapsDispatch();
  return (
    <Menu theme="dark" defaultSelectedKeys={['0']} mode="horizontal">
      <Menu.Item key="0">
        <PieChartOutlined />
        <span>Summary</span>
        <Link to="/" onClick={() => dispatch({
          type: 'init'
        })} />
      </Menu.Item>
      <Menu.Item key="2">
        <PieChartOutlined />
        <span>Overview</span>
        <Link to="overview" onClick={() => dispatch({
          type: 'init'
        })} />
      </Menu.Item>
      <Menu.SubMenu key="3" title="Stops">
        <Menu.Item key="3.1">
          <DesktopOutlined />
          <span>Te Anau</span>
          <Link to="teAnau" onClick={() => dispatch({
            type: 'changed',
            place: 'queenstown'
          })} />
        </Menu.Item>
        <Menu.Item key="3.2">
          <StarOutlined />
          <span>Queenstown</span>
          <Link to="queenstown" onClick={() => dispatch({
            type: 'changed',
            place: 'queenstown'
          })} />
        </Menu.Item>
        <Menu.Item key="3.3">
          <TrademarkOutlined />
          <span>Franz Josef</span>
          <Link to="franzjosef" onClick={() => dispatch({
            type: 'changed',
            place: 'franzjosef'
          })} />
        </Menu.Item>
        <Menu.Item key="3.4">
          <SafetyCertificateOutlined />
          <span>Akaroa</span>
          <Link to="akaroa" onClick={() => dispatch({
            type: 'changed',
            place: 'akaroa'
          })} />
        </Menu.Item>
        <Menu.Item key="3.5">
          <TeamOutlined />
          <span>Lake Tekapo</span>
          <Link to="lakeTekapo" onClick={() => dispatch({
            type: 'changed',
            place: 'lakeTekapo'
          })} />
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}