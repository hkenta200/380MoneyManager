import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { View, Button, Text, Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";



const SavingPage = () => {


    return (

        <View>
            <Text style={{ alignContent: "center", alignItems: "center", fontWeight: "bold", fontSize: 30, marginTop: 10, marginBottom: 0, left: 10, marginLeft: 110, marginRight: 98, borderRadius: 50 }}>Savings</Text>

            <BarChart
                data={{
                    labels: ["Car", "House", "School", "Clothes", "Games", "Fun"],
                    datasets: [
                        {
                            data: [
                                400, 250, 500, 260, 250, 450
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={500}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#a95aec",
                    backgroundGradientFrom: "#a95aec",
                    backgroundGradientTo: "#a95aec",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />

        </View>
    );
};

export default SavingPage;