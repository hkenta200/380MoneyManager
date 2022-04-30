import React, { useState, useEffect, useContext } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
  StyleSheet,
  StatusBar,
  TextInput,
  Image
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'; //https://github.com/oblador/react-native-vector-icons#android
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


//import { useContext } from 'react/cjs/react.production.min';
import { AuthContext } from '../Navigation/AuthProvider';

//Status bar color fix: https://www.youtube.com/watch?v=Rs72pRwXIzA 23:32
//Firebase Stuff: https://www.youtube.com/watch?v=J7pkSP18Oko

const SignInScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    age: age,
    AccountType: selectedAccountType,
    check_TextInputChange: false,
    secureTextEntry: true
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_TextInputChange: true
      })
    }
    else {
      setData({
        ...data,
        email: val,
        check_TextInputChange: false
      })
    }
  }

  const HandlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  /* const updatePicker = () => {
    setData({
      ...data,

    })
  } */

  const [selectedAccountType, setselectedAccountType] = useState();
  const [age, setAge] = useState();

  const { register } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.text_header}>Register!</Text>
      </View> */}
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder='Your Email'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_TextInputChange ?
            <Feather
              name="check-circle"
              color="green"
              size={20}
            />
            : null}
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder='Your Password'
            style={styles.textInput}
            autoCapitalize='none'
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => HandlePasswordChange(val)}
          />
          <TouchableOpacity onPress={(updateSecureTextEntry)}>
            {data.secureTextEntry ?
              <Feather
                name="eye-off"
                color="#05375a"
                size={20}
              />
              :
              <Feather
                name="eye"
                color="#05375a"
                size={20}
              />
            }
          </TouchableOpacity>
        </View>

        <Text style={{
          paddingVertical: 30
        }}>
          <Text style={[styles.text_footer, { marginTop: 50 }]}>What is your age?</Text>

        </Text>
        <Picker //Drop down menu for their age
          //style={{ width: '100%' }}
          selectedValue={age}
          onValueChange={(itemValue, itemIndex) =>
            setAge(itemValue)
          }>
          <Picker.Item label="13" value="Picker.Item.label" />
          <Picker.Item label="14" value="Picker.Item.label" />
          <Picker.Item label="15" value="Picker.Item.label" />
          <Picker.Item label="16" value="Picker.Item.label" />
          <Picker.Item label="17" value="Picker.Item.label" />
          <Picker.Item label="18" value="Picker.Item.label" />
          <Picker.Item label="19" value="Picker.Item.label" />
          <Picker.Item label="20" value="Picker.Item.label" />
        </Picker>


        <Text style={{
          paddingVertical: 30
        }}>
          <Text style={[styles.text_footer, { marginVertical: 50 }]}>Are you a child or parent?</Text>
        </Text>
        <Picker //Drop down menu and ask if their child or parent
          //style={{ width: '100%' }}
          selectedValue={selectedAccountType}
          onValueChange={(itemValue, itemIndex) =>
            setselectedAccountType(itemValue)
          }>
          <Picker.Item label="Child" value="Child" />
          <Picker.Item label="Parent" value="Parent" />
        </Picker>

        <TouchableOpacity
          onPress={() => register(data.email, data.password)}
          style={[styles.signIn, {
            borderColor: '#009387',
            borderWidth: 1,
            marginTop: 50
          }]}
        >
          <Text style={styles.textSign}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text style={styles.forgotPasswordButton}>Have an account already? Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  forgotPasswordButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: '#6495ed'
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});