import React, { useState } from "react"
import Button from "../../components/Button";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";

enum GraphType {
  Bar,
  Line,
}
function OverviewPage() {
  const [graphType, setGraphType] = useState(GraphType.Bar);

  const isBar = graphType === GraphType.Bar
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row gap-4 sm:justify-end w-full p-4">
        <Button className={ isBar? 'bg-blue-700 !text-white' : ''}
          onClick={() => setGraphType(GraphType.Bar)}
        >
          Line
        </Button>
        <Button className={!isBar ? 'bg-blue-700 !text-white' : ''}
          onClick={() => setGraphType(GraphType.Line)}
        >
          Bar
        </Button>
      </div>
      <LineGraph hidden={!isBar} />
      <BarGraph hidden={isBar} />
    </div>
  );
}
export default React.memo(OverviewPage)