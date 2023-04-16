import React, { useState } from 'react';
import {
  Routes, Route, Link,
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import Overview from './Components/Overview';
import BaseMapContainer from './Container/BaseMapContainer';


import { FileOutlined, PieChartOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, theme, Typography, Col, Row } from 'antd';
import Queenstown from './Components/Queenstown';
import { TopMenu } from './Components/TopMenu';
import MenuSider from './Components/MenuSider';
import { MapsProvider } from './Hooks/MapContext';
import Summary from './Components/Summary';
import TeAnau from './Components/TeAnau';
import FranzJosef from './Components/FranzJosef';
import Akaroa from './Components/Akaroa';
import LakeTekapo from './Components/LakeTekapo';
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
          <Layout className="site-layout">
            <Header
              style={{
                padding: 5,
                textAlign: 'center',
                background: colorBgContainer,
              }}
            > 
            <TopMenu/>
            </Header>
            <Content
              style={{
                margin: '5px'
              }}
            >     
              <Row>
                <Col xs={24}>
                  <Routes>
                    <Route index element={<Summary />} />
                    <Route path="overview" element={<Overview />} />
                    <Route path="queenstown" element={<Queenstown />} />
                    <Route path="teAnau" element={<TeAnau />} />
                    <Route path="franzjosef" element={<FranzJosef />} />
                    <Route path="akaroa" element={<Akaroa />} />
                    <Route path="lakeTekapo" element={<LakeTekapo />} />
                  </Routes>
                </Col>
              </Row>
              {/* <Row>
                <Col xs={24}>
                  <BaseMapContainer />
                </Col>
              </Row> */}

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
