import React from 'react';
import { SmileOutlined, ArrowUpOutlined, ArrowDownOutlined, FrownOutlined } from '@ant-design/icons';
import { Timeline, Typography } from 'antd';
const { Title } = Typography;

const Overview = (props) => {
    return (
        <>
            <div style={{
                textAlign: 'center',
            }}>
                <Title style={{ marginTop: 0 }}>South Island Itenery </Title>
            </div>
            <Timeline
                items={[
                    {
                        color: '#00CCFF',
                        dot: <ArrowUpOutlined />,
                        children: 'Departure from MEL on 02/04',
                    },
                    {
                        color: 'green',
                        dot: <SmileOutlined />,
                        children: 'Two nights in Te Anau 02nd and 3rd April',
                    },
                    {
                        color: 'green',
                        dot: <SmileOutlined />,
                        children: 'Three nights in Queenstown. 04, 05 and 06th April',
                    },
                    {
                        color: 'green',
                        dot: <SmileOutlined />,
                        children: 'Two nights in Franz Joseph. 07th and 08th April',
                    },
                    {
                        color: 'green',
                        dot: <FrownOutlined />,
                        children: 'Stay 2 nights in Akaroa near Christchurch. 09th and 10th April',
                    },
                    {
                        color: 'green',
                        dot: <FrownOutlined />,
                        children: 'Leave Akaroa and stay in Lake Tekapu 2 nights. 11th and 12th April',
                    },
                    {
                        color: '#00CCFF',
                        dot: <ArrowDownOutlined />,
                        children: 'Reach Queenstown airport 13th April',
                    },
                ]}
            />
        </>
    );
}

export default Overview;