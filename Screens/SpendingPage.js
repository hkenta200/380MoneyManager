
import React, { useState, useEffect } from "react";
import { View, Button, Text, Dimensions, StyleSheet, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { BarChart } from "react-native-chart-kit";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { ActivityIndicator } from 'react-native';
//import firestore from '@react-native-firebase/firestore';

/*function Users() {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
    .collection('expenseInfo')
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

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>User ID: {item.amount}</Text>
          <Text>User Name: {item.category}</Text>
        </View>
      )}
    />
  );

}*/

/*const expenseName = firestore().collection('expenseInfo').doc('d').get();
const expenseCost = firestore().collection('savingsInfo').doc('d').get();
const data = [expenseName, expenseCost];*/

/*export class ExampleOne extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
        tableData: [
          ['1', '2', '3', '4'],
          ['a', 'b', 'c', 'd'],
          ['1', '2', '3', '456\n789'],
          ['a', 'b', 'c', 'd']
        ]
      }
    }
  
    render() {
      const state = this.state;
      return (
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData} textStyle={styles.text}/>
          </Table>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });*/

  import {snapshot} from "@react-native-firebase/firestore";

const SpendingPage = () => {

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
    .collection('expenseInfo')
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

      <View
        style={{backgroundColor:"white"}}
      >
        <View >
            <Text style={{
                alignContent: "center", alignItems: "center", fontWeight: "bold", fontSize: 20,
                marginTop: 10, marginBottom: 0, left: 10, borderRadius: 50, backgroundColor: "white"
            }}>
                Spending Summary</Text>

            <BarChart
                data={{
                    labels: ["Food", "Entertainment", "Transportation", "Shopping"],
                    datasets: [
                        {
                            data: [
                                200, 300, 100, 150
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={300}
                fromZero

                yAxisLabel="$"
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

        <Text
                style={{ fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 0, left: 10 }}
            >Spending List</Text>

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

export default SpendingPage;