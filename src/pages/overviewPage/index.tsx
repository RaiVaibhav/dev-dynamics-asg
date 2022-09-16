import React, { useState } from "react"
import Button from "../../components/Button";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
 
enum GraphType {
  Bar,
  Line,
}
function OverviewPage() {
  const [graphType, setGraphType] = useState(GraphType.Line);

  const isBar = graphType === GraphType.Bar;

  return (
    <div className="flex flex-col w-full" id="overview-page">
      <div className="flex flex-row gap-4 sm:justify-end w-full p-4">
        <Button id="select-line-graph" className={ !isBar? '!bg-blue-700 hover:!bg-blue-700 !text-white' : ''}
          onClick={() => setGraphType(GraphType.Line)}
          ariaLabel={!isBar ? 'selected' : ''}
        >
          Line
        </Button>
        <Button id="select-bar-graph" className={ isBar ? '!bg-blue-700 hover:!bg-blue-700 !text-white' : ''}
          onClick={() => setGraphType(GraphType.Bar)}
          ariaLabel={isBar ? 'selected' : ''}
        >
          Bar
        </Button>
      </div>
      <LineGraph hidden={isBar} />
      <BarGraph hidden={!isBar} />
    </div>
  );
}
export default React.memo(OverviewPage)