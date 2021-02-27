import React from 'react';
import {Dimensions } from 'react-native';

import {
    LineChart
} from "react-native-chart-kit";

export const MyChart = ({ data }) => (
    <LineChart
        data={data}
        width={Dimensions.get("window").width} // from react-native
        height={250}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
            backgroundColor: "#fffff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#000"
            }
        }}
        bezier
        style={{
            marginVertical: 8,
            // borderRadius: 16
        }}
    />);

