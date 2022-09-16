import React from "react"
import clsx from "clsx";

const DemoBarChart = React.lazy(() => import('./DemoBarChart'));

type Props = {
  hidden?: boolean,
}
function BarGraph({ hidden }: Props) {

  return (
    <div className={clsx("overflow-y-auto w-full p-4", hidden && 'hidden')} id="bar-graph">
      <div className="flex flex-column flex-wrap md:flex-nowrap gap-4 w-full">
        <div className="shadow-xs rounded flex bg-white h-80 w-full justify-center items-center">
          <DemoBarChart />
        </div>
        <div className="shadow-xs rounded flex bg-white h-80 w-full justify-center items-center">
          <DemoBarChart />
        </div>
      </div>
      <div className="shadow-xs rounded flex bg-white h-80 w-full mt-4 justify-center items-center">
        <DemoBarChart />
      </div>

    </div>
  );
}
export default React.memo(BarGraph, (prev, cur) => prev.hidden === cur.hidden)