import React, { useState } from 'react';
import {
  Routes, Route, Link,
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import BaseMapContainer from './Container/BaseMapContainer';


import { FileOutlined, PieChartOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, theme, Typography, Col, Row } from 'antd';
import Queenstown from './Components/Queenstown';
import { Stops } from './Components/Stops';
import MenuSider from './Components/MenuSider';
import { MapsProvider } from './Hooks/MapContext';
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', '0', <PieChartOutlined />, <Link to="/" />),
  getItem('Queenstown', '1', <PieChartOutlined />, <Link to="/queenstown" />),
  getItem('Milfrod Sound', '2', <DesktopOutlined />),
  getItem('Franz Josheph', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Christchurch', '9', <FileOutlined />),
  getItem('Christchurch', '9', <FileOutlined />),
];



const Main = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <MapsProvider>
      <BrowserRouter>
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          <MenuSider />
          <Layout className="site-layout">
            <Header
              style={{
                padding: 5,
                textAlign: 'center',
                background: colorBgContainer,
              }}
            > <Title style={{ marginTop: 0 }}>South Island </Title></Header>
            <Content
              style={{
                margin: '10px',
              }}
            >
              <Row>
                <Col xs={0} md={24}>
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="queenstown" element={<Queenstown />} />
                  </Routes>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <BaseMapContainer />
                </Col>
              </Row>

            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              <h3>@Buddhika Semasinghe 2023</h3>
            </Footer>
          </Layout>
        </Layout> 
      </BrowserRouter>
    </MapsProvider>
  );
}

export default Main;
