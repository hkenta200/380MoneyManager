
import React, { useState } from "react";
import { View, Button, Text, Dimensions, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { BarChart } from "react-native-chart-kit";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

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

const SpendingPage = () => {
    return (


        <View >
            <Text style={{
                alignContent: "center", alignItems: "center", fontWeight: "bold", fontSize: 30,
                marginTop: 10, marginBottom: 0, left: 10, marginLeft: 110, marginRight: 98, borderRadius: 50
            }}>
                Spending View Visual+List</Text>

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
                height={220}
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




    );


};

export default SpendingPage;