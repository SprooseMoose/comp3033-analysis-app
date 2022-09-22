import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {SentimentItem} from "../dashboard/utils";

const ANIMATION_DURATION = 680;

const StackedBarChart = ({data, colors}: {
    data: SentimentItem[];
    colors: string[];
}): JSX.Element => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
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
                <CartesianGrid vertical={false} strokeDasharray={0}/>
                <XAxis dataKey="name" fontSize={'0.7em'} tick={{fill: 'whitesmoke'}}/>
                <YAxis fontSize={'0.8em'} tick={{fill: 'whitesmoke'}}/>
                <Tooltip contentStyle={{backgroundColor: '#343434', fontSize: '0.8em'}} cursor={{fill: '#4d6179'}}
                         labelStyle={{color: 'whitesmoke'}} wrapperStyle={{outline: 'none'}} isAnimationActive={false}/>
                <Legend fontSize={'0.8em'}/>
                <Bar dataKey="positive" stackId="a" fill={colors[0]} animationDuration={ANIMATION_DURATION}/>
                <Bar dataKey="neutral" stackId="a" fill={colors[1]} animationDuration={ANIMATION_DURATION}/>
                <Bar dataKey="negative" stackId="a" fill={colors[2]} animationDuration={ANIMATION_DURATION} radius={[8, 8, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedBarChart;