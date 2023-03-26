import React from 'react';
import { SmileOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const Home = (props) => {
    return (
        <Timeline
            items={[
                {
                    color: '#00CCFF',
                    dot: <ArrowUpOutlined />,
                    children: 'Depart from MEL and Te Anau 02/04',
                },
                {
                    color: 'green',
                    dot: <SmileOutlined />,
                    children: 'Spend two nights in Te Anau 02nd and 3rd April',
                },
                {
                    color: 'green',
                    children: 'Three nights in Queenstown. 04, 05 and 06th April',
                },
                {
                    color: 'green',
                    children: 'Spend two nights in Franz Joseph. 07th and 08th April',
                },
                {
                    color: 'green',
                    children: 'Reach Christchurch and stay 2 nights. 09th and 10th April',
                },
                {
                    color: 'green',
                    children: 'Leave Christchurch and stay in Lake Tekapu 2 nights. 11th and 12th April',
                },
                {
                    color: '#00CCFF',
                    dot: <ArrowDownOutlined />,
                    children: 'Reach Queenstown to catch the return flights. 13th April',
                },
            ]}
        />
    );
}

export default Home;