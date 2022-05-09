import React from "react";
import { View, Button, Text, Dimensions } from 'react-native';
import { PieChart } from "react-native-chart-kit";

const MainVisuals = () => {
    return (
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 10, marginBottom: 10, left: 10, marginLeft: 100, marginRight: 100, backgroundColor: "teal", color: "white" }}>Main Visuals</Text>
            <PieChart
                data={[
                    {
                        name: 'expenses',
                        population: 4000,
                        color: 'pink',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                    },
                    {
                        name: 'income',
                        population: 2000,
                        color: '#ffffff',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                    },
                    {
                        name: 'Spending',
                        population: 10000,
                        color: 'purple',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                    },
                ]}
                width={400}
                height={350}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,

                }}
                accessor="population"
                backgroundColor="lavender"
                paddingLeft="15"
                absolute //for the absolute number remove if you want percentage
            />


        </View>
    );
};


export default MainVisuals;