import React from 'react';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { TrademarkOutlined , PieChartOutlined, StarOutlined, DesktopOutlined, TeamOutlined , SafetyCertificateOutlined} from '@ant-design/icons';
import { useMapsDispatch } from '../Hooks/MapContext';


export function Stops() {
  const dispatch = useMapsDispatch();
  return (
    <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
      <Menu.Item key="0">
        <PieChartOutlined />
        <span>Home</span>
        <Link to="/" onClick={() => dispatch({
          type: 'init'
        })} />
      </Menu.Item>
      <Menu.Item key="1">
        <DesktopOutlined />
        <span>Te Anau</span>
        <Link to="teAnau" onClick={() => dispatch({
          type: 'changed',
          place: 'queenstown'
        })} />
      </Menu.Item>
      <Menu.Item key="2">
        <StarOutlined />
        <span>Queenstown</span>
        <Link to="queenstown" onClick={() => dispatch({
          type: 'changed',
          place: 'queenstown'
        })} />
      </Menu.Item>
      <Menu.Item key="3">
        <TrademarkOutlined />
        <span>Frans Josef</span>
        <Link to="fransjosef" onClick={() => dispatch({
          type: 'changed',
          place: 'fransjosef'
        })} />
      </Menu.Item>
      <Menu.Item key="4">
        <SafetyCertificateOutlined />
        <span>Akaroa</span>
        <Link to="akaroa" onClick={() => dispatch({
          type: 'changed',
          place: 'akaroa'
        })} />
      </Menu.Item>
      <Menu.Item key="5">
        <TeamOutlined />
        <span>Lake Tekapo</span>
        <Link to="lakeTekapo" onClick={() => dispatch({
          type: 'changed',
          place: 'lakeTekapo'
        })} />
      </Menu.Item>
    </Menu>
  );
}