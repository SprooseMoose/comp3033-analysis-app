import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


const StackedBarChart = ({data, colors}: {
    data: {
        name: string,
        value: number,
    }[];
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
                <CartesianGrid strokeDasharray={"3 3"}/>
                <XAxis dataKey="name" fontSize={'0.8em'} tick={{fill: 'whitesmoke'}}/>
                <YAxis fontSize={'0.8em'} tick={{fill: 'whitesmoke'}}/>
                <Tooltip contentStyle={{backgroundColor: '#343434', fontSize: '0.8em'}} labelStyle={{color: 'whitesmoke'}} wrapperStyle={{outline: 'none'}} isAnimationActive={false}/>
                <Legend fontSize={'0.8em'}/>
                <Bar dataKey="up" stackId="a" fill={colors[0]} isAnimationActive={false}/>
                <Bar dataKey="down" stackId="a" fill={colors[1]} isAnimationActive={false}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedBarChart;