import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { VictoryPie, VictoryLegend } from "victory-native";

class CurrentBudgetScreen extends Component {
  render() {
    return (
      <View >
     <VictoryPie
       padAngle={3}
      innerRadius={100}
      colorScale={["tomato", "orange", "gold", "cyan", "navy", "pink", "green" ]}
      data={[
              { x: 1, y: 2, label: "1" },
              { x: 2, y: 2, label: "2" },
              { x: 3, y: 3, label: "3" },
              { x: 4, y: 2, label: "4" },
              { x: 5, y: 1, label: "5" },
              { x: 6, y: 2, label: "6" },
              { x: 7, y: 3, label: "7" }
            ]}
       labelRadius={150}
       style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
          />
          </View>
      );
    }
}

export default CurrentBudgetScreen;