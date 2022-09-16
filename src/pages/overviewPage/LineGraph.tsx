import React, { Suspense } from "react"
import clsx from "clsx";
import Loader from "../../components/Loader";

const DemoLineChart = React.lazy(() => import('./DemoLineChart'));

type Props = {
  hidden?: boolean,
}

function LineGraph({ hidden }: Props) {
  return (
    <div className={clsx("overflow-y-auto w-full p-4", hidden && 'hidden')} id="line-graph">
      <div className="flex flex-column flex-wrap md:flex-nowrap gap-4 w-full">
        <div className="shadow-xs rounded flex bg-white h-80 w-full justify-center items-center">
          <Suspense fallback={<Loader className="abc"/>}>
            <DemoLineChart />
          </Suspense>
        </div>
        <div className="shadow-xs rounded flex bg-white h-80 w-full justify-center items-center">
          <Suspense fallback={<Loader />}>
            <DemoLineChart />
          </Suspense>
        </div>
      </div>
      <div className="shadow-xs rounded flex bg-white h-80 w-full mt-4 justify-center items-center">
        <Suspense fallback={<Loader />}>
          <DemoLineChart />
        </Suspense>
      </div>
    </div>
  );
}
export default React.memo(LineGraph, (prev, cur) => prev.hidden === cur.hidden)