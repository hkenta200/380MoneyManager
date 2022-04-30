import { cloneNode } from "@babel/types";
import { SlideFromRightIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import React, {useContext, useEffect} from "react";
import { View, Button, Text } from 'react-native';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
//import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { AuthContext } from '../Navigation/AuthProvider';

const Home = ({ navigation }) => {

    const {logout} = useContext(AuthContext);

    return (

        <View style={{ flex: 1, backgroundColor: "white" }}>

            <Text
                style={{ fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 0, left: 10 }}
            >Welcome to Leaf Wallet</Text>

            <View
                title="Hi, Ryan"
                style={{ backgroundColor: "#8800C7", fontSize: 40, width: 360, height: 250, color: "#FFFFFF", borderRadius: 40, alignSelf: "center", alignContent: "center", textAlignVertical: "center", padding: 10, fontWeight: "bold", marginTop: 8, flexDirection: "row", flex: 1 }}
            >
                <Text>
                    <Text
                        title="Hi Address"
                        style={{ color: "#FFFFFF", fontSize: 40, fontWeight: "bold", marginLeft: 10, marginTop: 7 }}
                    >
                        Hi, Ryan! {/* {AuthContext.user?.email} */}
                    </Text>
                    <TouchableOpacity onPress={() => logout()}>
                        <Text>Sign out</Text>
                    </TouchableOpacity>
                </Text>



                <View
                    title="inner"
                    style={{ backgroundColor: "#4c00ac", width: 150, height: 120, borderRadius: 20, alignSelf: "center", textAlign: "center", right: 160, marginTop: 70, color: "#FFFFFF", fontSize: 18, fontFamily: "Times", justifyContent: "flex-start", alignContent: "center" }}
                >
                    <Text
                        style={{ color: '#FFFFFF', fontWeight: "bold", alignSelf: "center", textAlignVertical: "center", fontSize: 18, flex: 1 }}
                    >Spending {'\n'} $100
                    </Text>
                    <Image
                        style={{ width: 20, height: 20, transform: [{ scaleX: -1 }, { scaleY: -1 }], alignSelf: "center" }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_Arrow_Up.svg/2048px-Red_Arrow_Up.svg.png' }}
                    />
                </View>

                <View
                    title="inner2"
                    style={{ backgroundColor: "#4c00ac", width: 150, height: 120, borderRadius: 20, alignSelf: "center", textAlign: "center", right: 140, marginTop: 70, color: "#FFFFFF", fontSize: 18, fontFamily: "Times", justifyContent: "flex-end", alignContent: "center" }}
                >
                    <Text
                        style={{ color: '#FFFFFF', fontWeight: "bold", alignSelf: "center", textAlignVertical: "center", fontSize: 18, flex: 1 }}
                    >Saving {'\n'} $400
                    </Text>
                    <Image
                        style={{ width: 20, height: 20, alignSelf: "center" }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dark_Green_Arrow_Up.svg/800px-Dark_Green_Arrow_Up.svg.png' }}
                    />
                </View>
            </View>

            <Text
                title="Options"
                style={{ fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 0 }}
            >  Options</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('SpendingPage')}
                title="Spending"
                style={{ backgroundColor: "#a95aec", fontSize: 40, width: 360, height: 100, color: "#FFFFFF", borderRadius: 30, alignSelf: "center", alignContent: "center", textAlignVertical: "center", marginTop: 10 }}
            >

                <Image
                    style={{ borderRadius: 30, height: 70, width: 70, alignContent: "center", left: 40, top: 15 }}
                    source={{
                        uri: 'https://images-na.ssl-images-amazon.com/images/I/41dT12wpLxL.png',
                    }}
                />

                <Text
                    style={{ fontSize: 20, alignItems: "center", alignSelf: "center", textAlignVertical: "center", color: "#FFFFFF", bottom: 35 }}
                >Spending</Text>

                <Image
                    style={{ width: 50, height: 50, top: -70, left: 300, tintColor: '#FFFFFF' }}
                    source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png' }}
                />

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('SavingPage')}
                title="Saving"
                style={{ backgroundColor: "#a95aec", fontSize: 40, width: 360, height: 100, color: "#FFFFFF", borderRadius: 30, alignSelf: "center", alignContent: "center", textAlignVertical: "center", marginTop: 10 }}
            >

                <Image
                    style={{ borderRadius: 30, height: 70, width: 70, alignContent: "center", left: 40, top: 15 }}
                    source={{
                        uri: 'https://www.freeiconspng.com/thumbs/save-icon/floppy-save-icon--23.png',
                    }}
                />

                <Text
                    style={{ fontSize: 20, alignItems: "center", alignSelf: "center", textAlignVertical: "center", color: "#FFFFFF", bottom: 35 }}
                >Saving</Text>

                <Image
                    style={{ width: 50, height: 50, top: -70, left: 300, tintColor: '#FFFFFF' }}
                    source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png' }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('IncomePage')}
                title="Income"
                style={{ backgroundColor: "#a95aec", fontSize: 40, width: 360, height: 100, color: "#FFFFFF", borderRadius: 30, alignSelf: "center", alignContent: "center", textAlignVertical: "center", marginTop: 10, marginBottom: 60 }}
            >

                <Image
                    style={{ borderRadius: 30, height: 70, width: 70, alignContent: "center", left: 40, top: 15 }}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCjtMrSwS_dXvDMd3qQP7PWLXhErTdr3XjFiF4g42mH-S6E16ZsKVpaUfgday278akpc&usqp=CAU',
                    }}
                />

                <Text
                    style={{ fontSize: 20, alignItems: "center", alignSelf: "center", textAlignVertical: "center", color: "#FFFFFF", bottom: 35 }}
                >Income</Text>

                <Image
                    style={{ width: 50, height: 50, top: -70, left: 300, tintColor: '#FFFFFF' }}
                    source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png' }}
                />
            </TouchableOpacity>



        </View>
    );
};


export default Home;