import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const GenreGraph = ({ data }) => {
  const genreList = [];
  console.log(data);
  for (let key in data) {
    genreList.push({ genre: key, artists: data[key] });
  }
  console.log(genreList);
  /* 
  
  data = [ objects ]
  each object = {genre: genreList[0]=hashlist key, artists: number of artists=hashlistvalue}
  */

  return (
    <div>
      <h3>Genre Breakdown</h3>
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={10}
      >
        <VictoryAxis tickFormat={Object.keys(data)} />
        <VictoryAxis dependentAxis />
        <VictoryBar
          style={{ data: { fill: "#2274A5" } }}
          data={genreList}
          x="genre"
          y="artists"
        />
      </VictoryChart>
    </div>
  );
};

export default GenreGraph;
