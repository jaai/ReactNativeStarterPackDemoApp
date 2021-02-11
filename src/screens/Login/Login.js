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
          backgroundColor: '#986776',
          alignItems: 'center',
          alignContent: 'space-between',
        }}>
        <KeyboardAvoidingView behavior={this.state.behavior}>
          <View
            style={{
              padding: 15,
              flexDirection: 'row',
              width: '80%',

              overflow: 'hidden',
              borderRadius: 20,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'space-between',
              backgroundColor: AppColor.white,
            }}>
            <TextInput />
          </View>
        </KeyboardAvoidingView>
      </View>
      // <View style={LoginStyles.container}>
      //   <Text style={LoginStyles.logo}>React Native</Text>
      //   <View style={{backgroundColor: AppColor.white}}></View>
      //   <View style={LoginStyles.inputView}>
      //     <TextInput
      //       style={LoginStyles.inputText}
      //       placeholder="Email..."
      //       placeholderTextColor="#003f5c"
      //       onChangeText={(text) => this.setState({email: text})}
      //     />
      //   </View>
      //   <View style={LoginStyles.inputView}>
      //     <TextInput
      //       secureTextEntry
      //       style={LoginStyles.inputText}
      //       placeholder="Password..."
      //       y
      //       placeholderTextColor="#003f5c"
      //       onChangeText={(text) => this.setState({password: text})}
      //     />
      //   </View>
      //   <TouchableOpacity>
      //     <Text style={LoginStyles.forgot} onPress={() => this.onPressButton()}>
      //       Forgot Password
      //     </Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity
      //     onPress={() => this.onLoginButtonPress()}
      //     style={LoginStyles.loginBtn}>
      //     <Text style={LoginStyles.loginText}>LOGIN</Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity>
      //     <Text style={LoginStyles.loginText}>Signup</Text>
      //   </TouchableOpacity>
      // </View>
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
