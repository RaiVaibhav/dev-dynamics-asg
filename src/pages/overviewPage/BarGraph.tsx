import React from "react"
import { useQuery } from "react-query";
import { fetchSampleData } from "../../services/overviewApi";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import clsx from "clsx";

type Props = {
  hidden?: boolean,
}
function BarGraph({ hidden }: Props) {

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
            <BarChart
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
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="shadow-xs rounded flex bg-white h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
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
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="shadow-xs rounded flex bg-white h-80 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
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
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
export default React.memo(BarGraph, (prev, cur) => prev.hidden === cur.hidden)