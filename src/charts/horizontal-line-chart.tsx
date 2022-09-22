import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {SentimentItem} from "../dashboard/utils";

const HorizontalLineChart = ({data, colors}: {
    data: SentimentItem[],
    colors: string[],
}): JSX.Element => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" type="category" padding={{left: 20}}/>
                <YAxis type="number"/>
                <Tooltip contentStyle={{backgroundColor: '#343434', fontSize: '0.8em'}} cursor={{fill: '#4d6179'}}
                         labelStyle={{color: 'whitesmoke'}} wrapperStyle={{outline: 'none'}} isAnimationActive={false}/>
                <Legend/>
                <Line dataKey="positive" strokeWidth={1.5} stroke={colors[0]} animationDuration={700}/>
                <Line dataKey="neutral" strokeWidth={1.5} stroke={colors[1]} animationDuration={700}/>
                <Line dataKey="negative" strokeWidth={1.5} stroke={colors[2]} animationDuration={700}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default HorizontalLineChart;