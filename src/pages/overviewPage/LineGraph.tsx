import React from "react"
import { useQuery } from "react-query";
import { fetchSampleData } from "../../services/overviewApi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import clsx from "clsx";

type Props = {
  hidden?: boolean,
}

function LineGraph({ hidden }: Props) {

  const { isLoading, data, isError } = useQuery(['graph-data'], fetchSampleData);
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Something went wrong</span>
  }
  
  return (
    <div className={clsx("overflow-y-auto w-full p-4", hidden && 'hidden')}>
      <div className="flex flex-column flex-wrap md:flex-nowrap gap-4 w-full">
        <div className="shadow-xs rounded flex bg-white h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={200}
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
        </div>
        <div className="shadow-xs rounded flex bg-white h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={200}
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
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="shadow-xs rounded flex bg-white h-80 w-full mt-4">
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
      </div>

    </div>
  );
}
export default React.memo(LineGraph, (prev, cur) => prev.hidden === cur.hidden)