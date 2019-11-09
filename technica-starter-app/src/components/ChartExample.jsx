import React from "react";

import { VictoryPie } from "victory";

class ChartExample extends React.Component {
  render() {
    return (
      <svg width="400" height="400" viewBox="0 0 400 400">
        <VictoryPie
          standalone={false}
          width={400}
          height={400}
          style={{ labels: { fill: "white" } }}
          colorScale={["#ed7bab", "#b2a0c3", "#9edae2"]}
          innerRadius={80}
          labelRadius={120}
          data={[
            { x: "Pink", y: 25 },
            { x: "Purple", y: 40 },
            { x: "Blue", y: 35 }
          ]}
        />
      </svg>
    );
  }
}

export default ChartExample;
