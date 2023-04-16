import React from 'react';
import BaseMapContainer from '../Container/BaseMapContainer';
import { Layout, Menu, theme, Typography, Col, Row } from 'antd';   
const { Title } = Typography;

function Summary(props) {
    return (
        <div>
            <div style={{
                textAlign: 'center',
            }}>
                <Title style={{ margin: 0 }}> Our Journey </Title>
            </div>
            <BaseMapContainer/>
        </div>
    );
}

export default Summary;