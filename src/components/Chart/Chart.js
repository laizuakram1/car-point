import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = ({charts}) => {
    return (
        <div>
             <LineChart width={600} height={300} data={charts} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type={charts.investment} dataKey={charts.month} stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis data={charts.month} />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default Chart;