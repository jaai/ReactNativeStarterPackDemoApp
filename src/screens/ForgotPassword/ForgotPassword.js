import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import LoginStyles from '../Login/LoginStyles';
export default class App extends React.Component {
  state={
    newpassword:"",
    confirmpassword:"",
  }
  render(){
    return (
      <View style={LoginStyles.container}>
        <Text style={LoginStyles.logo}>Forgot Password</Text>
        <View style={LoginStyles.inputView} >
          <TextInput  
            style={LoginStyles.inputText}
            placeholder="New Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
 </View>
 <View style={LoginStyles.inputView} >
<TextInput  
            style={LoginStyles.inputText}
            placeholder="Confirm Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({confirmpassword:text})}/>
       
       </View>  
        
        <TouchableOpacity style={LoginStyles.loginBtn}>
          <Text style={LoginStyles.loginText}>Submit</Text>
        </TouchableOpacity>
     

  
      </View>
    );
  }
}