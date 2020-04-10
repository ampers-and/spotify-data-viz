import React from "react";
import { VictoryPie, VictoryContainer } from "victory";

const GenrePie = ({ data, artists }) => {
  const genreList = [];
  console.log(artists);
  console.log(data);
  for (let key in data) {
    genreList.push({ genre: key, artists: data[key] });
  }
  console.log(genreList);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <VictoryPie
        containerComponent={<VictoryContainer width={800} responsive={false} />}
        colorScale={["#01baef", "#006494", "#ffd700", "#ff7733", "#e54b4b"]}
        style={{
          labels: {
            fontSize: 4,
            fill: "#333",
          },
        }}
        x="genre"
        y="artists"
        width={400}
        height={400}
        data={genreList}
      />
    </div>
  );
};

export default GenrePie;
