
import React, { } from 'react';
import './Statistic.css';


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const Statistic = ({ card }) => {

    return (
        <div className='graph'>

            <LineChart
                width={300}
                height={200}
                data={card}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" ></CartesianGrid>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey=""></YAxis>
                <Tooltip dataKey="pv" ></Tooltip>
                <Legend ></Legend>
                <Line type="monotone" dataKey="total" stroke="#8884d8" ></Line>

            </LineChart>

        </div>
    );
};

export default Statistic;