import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native";

const Tips = () => {
    return (

        <ScrollView
            style = {{backgroundColor: "white"}}
        >

            <View style = {{flex : 1, justifyContent: "center", alignContent: "center", backgroundColor: "#8800C7", width: 270, right: 14, borderRadius: 30}}>
                <Text
                    style={{fontSize: 30, color: "white", alignSelf: "center"}}
                >Helpful Tips</Text> 

            </View>


            <View
            title = "Tip1"
            style = {{backgroundColor : "#a95aec", fontSize : 40, width : 360, height : 250, color:"#FFFFFF", borderRadius : 30, alignSelf : "center", alignContent : "center", textAlignVertical: "center", padding : 10, fontWeight : "bold", marginTop : 8, flexDirection : "row", flex : 1}}
            >
                <Text
                    style={{fontSize: 25, color: "white"}}
                >Why Save? {"\n"} 
                -------------------------------------------------
                {"\n"}
                
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
                >Set a New Goal!{"\n"} 
                -------------------------------------------------
                {"\n"}
                
                <Text
                    style={{fontSize: 17, color: "black", fontFamily : 'Roboto'}}
                >
                    Choose an amount you want to save in a set period of time, and
                    start saving! Setting a new goal is an essential part of financial 
                    planning and can help you see your future more clearly
                </Text>
                
                </Text>
            </View>

            <View
            title = "Tip3"
            style = {{backgroundColor : "#FEC34d", fontSize : 40, width : 360, height : 250, color:"#FFFFFF", borderRadius : 30, alignSelf : "center", alignContent : "center", textAlignVertical: "center", padding : 10, fontWeight : "bold", marginTop : 8, flexDirection : "row", flex : 1}}
            >
                <Text
                    style={{fontSize: 25, color: "white"}}
                >Create a Budget{"\n"} 
                -------------------------------------------------
                {"\n"}
                
                <Text
                    style={{fontSize: 16, color: "white", fontFamily : 'Roboto'}}
                >
                    When creating a budget, it is best to follow the fundmental 50-30-20 rule
                    That is, 50% of your money should go to your needs, 30% to your wants,
                    and 20% into savings or investments. Of course you can be flexible with these
                    numbers, though it is best to consider your needs above all else, and consider  
                    savings as the alterantive priority
                </Text>
                
                </Text>
            </View>

            <View
            title = "Tip4"
            style = {{backgroundColor : "#A4DE02", fontSize : 40, width : 360, height : 250, color:"#FFFFFF", borderRadius : 30, alignSelf : "center", alignContent : "center", textAlignVertical: "center", padding : 10, fontWeight : "bold", marginTop : 8, flexDirection : "row", flex : 1}}
            >
                <Text
                    style={{fontSize: 25, color: "black"}}
                >How Much Can I Afford?{"\n"} 
                -------------------------------------------------
                {"\n"}
                
                <Text
                    style={{fontSize: 16, color: "black", fontFamily : 'Roboto'}}
                >
                    Considering how much you can afford is left to you and what you are willing 
                    to take on.  It is important to consider your income to spending proportion 
                    so that you don't overspend on your allowances.  
                </Text>
                
                </Text>
            </View>

        </ScrollView>

        
    );
};

export default Tips;