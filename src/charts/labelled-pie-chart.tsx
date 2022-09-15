import React from "react";

import {Pie, Cell, PieChart, ResponsiveContainer} from "recharts";
import {PieChartCellItem} from "../dashboard/utils";

const LabelledPieChart = ({data, colors}: {
    data: PieChartCellItem[];
    colors: string[];
}): JSX.Element => {
    return (
        <ResponsiveContainer width={'100%'} height={'100%'}>
            <PieChart className={"section-content"}>
                <Pie
                    animationDuration={250}
                    dataKey={"value"}
                    data={data}
                    innerRadius={60}
                    outerRadius={80}
                    cx={'47%'}
                    paddingAngle={5}
                    label={
                        ({
                             cx,
                             cy,
                             midAngle,
                             innerRadius,
                             outerRadius,
                             value,
                             index
                         }) => {
                            // Variables to handle label positions
                            const RADIAN = Math.PI / 180;
                            const radius = 25 + innerRadius + (outerRadius - innerRadius);
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);

                            return (
                                <text
                                    x={x}
                                    y={y}
                                    fill="#fff"
                                    textAnchor={x > cx ? "start" : "end"}
                                    dominantBaseline={"central"}
                                    fontSize={'0.7em'}
                                >
                                    {data[index].name} ({value})
                                </text>
                            );
                        }
                    }
                >{data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
                ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default LabelledPieChart;