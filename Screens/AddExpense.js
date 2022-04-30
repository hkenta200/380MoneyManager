import React from "react";
import {View, Button, Text, TextInput, onChangeText} from 'react-native';

const AddSpending = () => {
    return (
        <View style = {{flex : 1, justifyContent: "center", alignContent: "center", backgroundColor : "white", marginBottom: 40}}>
            
            <View
                style = {{alignSelf: "center", fontSize : 40, marginBottom : 50, backgroundColor: "#8800C7", width : 400, height : 130, alignItems: "center", borderBottomEndRadius: 25, borderBottomLeftRadius: 25}}
            >
            <Text
                style = {{alignSelf: "center", fontSize : 40, color : "white", marginTop: 30}}
            >Add New Expense</Text> 
            </View>


            <Text
                style={{fontSize: 20, fontWeight: "bold", color: "#8800C7", left: 5}}
            >Add Expense Name</Text>
            <TextInput
                style = {{marginBottom : 40}}
                value={Text}
                placeholder="Enter Name"
            />

            <Text
                style={{fontSize: 20, fontWeight: "bold", color: "#8800C7", left: 5}}
            >Expense Amount</Text>
            <TextInput
                style = {{marginBottom : 40}}
                value={Text}
                placeholder="Enter Amount"
            />

            <Text
                style={{fontSize: 20, fontWeight: "bold", color: "#8800C7", left: 5}}
            >Expense Category</Text>
            <TextInput
                style = {{marginBottom : 40}}
                value={Text}
                placeholder="Select Category"
            />

            <Text
                style={{fontSize: 20, fontWeight: "bold", color: "#8800C7", left: 5}}
            >Other Info</Text>
            <TextInput
                style = {{marginBottom : 40}}
                value={Text}
                placeholder="Add Info"
            />

            <Button
                title = "add"
                color={"#8800C7"}
                style = {{innerWidth: 100, innerHeight: 50, marginBottom : 10}}
            >
                <Text>Add</Text>
            </Button>

        </View>
    );
};

export default AddSpending;