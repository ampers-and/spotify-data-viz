import React from "react";
import {
  VictoryBar,
  VictorySharedEvents,
  VictoryPie,
  VictoryLabel
} from "victory";

export const PieBar = ({ data }) => {
  const genreList = [];
  console.log(data);
  for (let key in data) {
    genreList.push({ genre: key, artists: data[key] });
  }
  console.log(genreList);
  const genreList2 = genreList.slice(0, 10);

  return (
    <div>
      <h3>Pie Bar Charts</h3>
      <svg viewBox="0 0 450 350">
        <VictorySharedEvents
          events={[
            {
              childName: ["pie", "bar"],
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      childName: ["pie", "bar"],
                      mutation: props => {
                        return {
                          style: Object.assign({}, props.style, {
                            fill: "tomato"
                          })
                        };
                      }
                    }
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      childName: ["pie", "bar"],
                      mutation: () => {
                        return null;
                      }
                    }
                  ];
                }
              }
            }
          ]}
        >
          {/* <g transform={"translate(150, 50)"}>
            <VictoryBar
              name="bar"
              width={300}
              standalone={false}
              style={{
                data: { width: 20 },
                labels: { fontSize: 25 }
              }}
              data={genreList2}
              x="genre"
              y="artists"
              labels={genreList2.map(i => i.genre)}
              labelComponent={<VictoryLabel y={290} />}
            />
          </g> */}
          <g transform={"translate(0, -75)"}>
            <VictoryPie
              name="pie"
              width={300}
              standalone={false}
              style={{ labels: { fontSize: 25, padding: 10 } }}
              x="genre"
              y="artists"
              data={genreList2}
            />
          </g>
        </VictorySharedEvents>
      </svg>
    </div>
  );
};
