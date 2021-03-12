import React from 'react';
import {Text, View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import LoginStyles from './LoginStyles';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import {AppColor, AppStrings} from '../../utils/';
import APIStrings from '../../webservice/APIStrings';
import TextInput from './Test';
//const [text, setText] = React.useState('');
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      behavior: 'height',
      // there is three ways to adjust (position , height , padding )
    };
  }
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          backgroundColor: '#2475B0',
          alignItems: 'center',
        }}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
          }}
          behavior={this.state.behavior}>
          <View
            style={{
              padding: 15,
              width: '100%',
              overflow: 'hidden',
              borderRadius: 20,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: AppColor.white,
            }}>
            <TextInput
              placeholder="Email..."
              onChangeText={(text) => this.setState({email: text})}></TextInput>

            <TextInput
              placeholder="Password..."
              onChangeText={(text) =>
                this.setState({password: text})
              }></TextInput>

            <TouchableOpacity
              onPress={() => this.onLoginButtonPress()}
              style={LoginStyles.loginBtn}>
              <Text style={LoginStyles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
  onPressButton() {
    console.log('onPressButton');
    const {navigate} = this.props.navigation;
    navigate('ForgotPassword');
  }

  onLoginButtonPress() {
    const {navigate} = this.props.navigation;
    axios
      .post(APIStrings.loginAPI, {
        email: this.state.email,
        password: this.state.password,
      })
      .then(function (response) {
        console.log(response);

        console.log('success');
        console.log('testing');
        //
        navigate('Homestack');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
