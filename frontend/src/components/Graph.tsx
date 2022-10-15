import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

type DataType = {
    data: {
        month: string, 
        value: number
    }[]
}

const Graph = (props: DataType) => {
    return <LineChart
      width={500}
      height={250}
      data={props.data}
      margin={{
        top: 30,
        right: 30,
        left: 0,
        bottom: 5
      }}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#2196f3"
        activeDot={{ r: 8 }}
        isAnimationActive={false}
      />
    </LineChart>
}

export default Graph;
