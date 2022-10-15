import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    {
      name: "Oct",
      num: 2400
    },
    {
      name: "Sep",
      num: 1398
    },
    {
      name: "Nov",
      num: 9800
    },
    {
      name: "Dec",
      num: 3908
    },
    {
      name: "Jan",
      num: 4800
    }
  ];

const Graph = () => {
    return <LineChart
      width={500}
      height={250}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 0,
        bottom: 5
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="num"
        stroke="#1769aa"
        activeDot={{ r: 8 }}
        isAnimationActive={false}
      />
    </LineChart>
}

export default Graph;
