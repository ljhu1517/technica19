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
          colorScale={["#7CEA9C", "#C5D1EB", "#36558F"]}
          innerRadius={80}
          labelRadius={100}
          data={[
            { x: "Risk", y: 25 },
            { x: "Trait 2", y: 40 },
            { x: "Trait 3", y: 35 }
          ]}
        />
      </svg>
    );
  }
}

export default ChartExample;
