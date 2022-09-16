import React from 'react';
import { useQuery } from 'react-query';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Loader from '../../components/Loader';
import { fetchSampleData } from '../../services/overviewApi';

function DemoLineChart() {
  const { isFetching, data, isLoading } = useQuery(['graph-data'], fetchSampleData);
  if (isFetching || isLoading) {
    return <Loader />
  }

  return (
    <ResponsiveContainer width="100%" height="100%" className="mt-2">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default React.memo(DemoLineChart);