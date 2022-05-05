import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'; //npm install react-native-linear-gradient
//https://reactnavigation.org/docs/getting-started/

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Image
                style={{height:100, width:100, tintColor: "white", alignSelf: 'center', marginTop: 250, marginBottom: 20}}
                source={{uri: 'https://www.serrureoutaouais.ca/wp-content/uploads/2020/07/maple.png'}}
            />

            <Text
                style={{color: "white", fontSize : 30, alignSelf: 'center', marginBottom : 50}}
            >
                Maple Money Manager
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}
                style={{alignSelf: 'center'}}
            >
                <LinearGradient
                    colors={['#4c00ac', '#4c00ac']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Start</Text>

                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8800C7'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});