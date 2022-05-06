import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native";

const Tips = () => {
    return (

        <ScrollView
            style = {{backgroundColor: "white"}}
        >

            <View style = {{flex : 1, justifyContent: "center", alignContent: "center", alignItems: "center"}}>
                <Text
                    style={{fontSize: 30}}
                >Helpful Tips</Text> 

            </View>


            <View
            title = "Tip1"
            style = {{backgroundColor : "#a95aec", fontSize : 40, width : 360, height : 250, color:"#FFFFFF", borderRadius : 30, alignSelf : "center", alignContent : "center", textAlignVertical: "center", padding : 10, fontWeight : "bold", marginTop : 8, flexDirection : "row", flex : 1}}
            >
                <Text
                    style={{fontSize: 25, color: "white"}}
                >Why Save? {"\n"} {"\n"}
                
                <Text
                    style={{fontSize: 17, color: "white", fontFamily : 'Roboto'}}
                >
                    Looking to get the latest Phone? Or how about saving for college? 
                    Saving is an important strategy for wealth building and is the key to getting 
                    what you want.  The earlier you start, the better!
                </Text>

                </Text>
            </View>

            <View
            title = "Tip2"
            style = {{backgroundColor : "#FFFF33", fontSize : 40, width : 360, height : 250, color:"#FFFFFF", borderRadius : 30, alignSelf : "center", alignContent : "center", textAlignVertical: "center", padding : 10, fontWeight : "bold", marginTop : 8, flexDirection : "row", flex : 1}}
            >
                <Text
                    style={{fontSize: 25, color: "black"}}
                >Set a New Goal!</Text>
            </View>

            <View
            title = "Tip3"
            style = {{backgroundColor : "#FEC34d", fontSize : 40, width : 360, height : 250, color:"#FFFFFF", borderRadius : 30, alignSelf : "center", alignContent : "center", textAlignVertical: "center", padding : 10, fontWeight : "bold", marginTop : 8, flexDirection : "row", flex : 1}}
            >
                <Text
                    style={{fontSize: 25, color: "white"}}
                >Create a Budget</Text>
            </View>

            <View
            title = "Tip4"
            style = {{backgroundColor : "#A4DE02", fontSize : 40, width : 360, height : 250, color:"#FFFFFF", borderRadius : 30, alignSelf : "center", alignContent : "center", textAlignVertical: "center", padding : 10, fontWeight : "bold", marginTop : 8, flexDirection : "row", flex : 1}}
            >
                <Text
                    style={{fontSize: 25, color: "white"}}
                >How Much Can I Afford?</Text>
            </View>

        </ScrollView>

        
    );
};

export default Tips;