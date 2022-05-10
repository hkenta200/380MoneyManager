import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { View, Button, Text, Dimensions, FlatList } from 'react-native';
import { BarChart } from "react-native-chart-kit";

import { useState, useEffect } from "react";
import { ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';


const SavingPage = () => {

        const [loading, setLoading] = useState(true); // Set loading to true on component mount
        const [users, setUsers] = useState([]); // Initial empty array of users

        useEffect(() => {
            const subscriber = firestore()
            .collection('savingInfo')
            .onSnapshot(querySnapshot => {
            const users = [];


            querySnapshot.forEach(documentSnapshot => {
                users.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
                });
            });

            setUsers(users);
            setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
        }, []);

        if (loading) {
            return <ActivityIndicator />;
        }
        //-----------------------------


    return (

        <View>
            <Text style={{ alignContent: "center", alignItems: "center", fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 0, left: 10, borderRadius: 50 }}>Savings Summary</Text>

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
                height={300}
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
                    borderRadius: 16,
                }}
            />

                <Text style={{ alignContent: "center", alignItems: "center", fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 0, left: 10, borderRadius: 50 }}>Savings List</Text>

                <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 3, borderBottomColor: "#a95aec", marginRight: 20, marginLeft: 20}}>
                    <Text>Name: {item.name}    Amount: {item.Amount}</Text>
                    <Text>Category: {item.Category}</Text>
                    </View>
                )}
                />

        </View>
    );
};

export default SavingPage;