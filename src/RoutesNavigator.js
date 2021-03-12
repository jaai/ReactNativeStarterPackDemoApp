import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './screens/Login/Login';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import UserList from './screens/UserList/UserList';
import UserDetails from './screens/UserList/UserDetails';
import CameraDemo from './screens/CameraDemo/CameraDemo';
import Test from './screens/Login/Test';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const AuthStack = createStackNavigator();
const DashboardStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator headerMode="none" initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="Homestack" component={TabStackScreen} />
    </AuthStack.Navigator>
  );
};
const DashboardStackScreen = () => {
  return (
    <DashboardStack.Navigator headerMode="none">
      <DashboardStack.Screen name="UserList" component={UserList} />
      <DashboardStack.Screen name="UserDetails" component={UserDetails} />
    </DashboardStack.Navigator>
  );
};
const TabStackScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#00FF00"
      barStyle={{backgroundColor: '#2475B0'}}>
      <Tab.Screen
        name="Home"
        component={DashboardStackScreen}
        options={{
          tabBarLabel: 'ApiCall',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraDemo}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({color}) => (
            <Icon name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Music"
        component={DashboardStackScreen}
        options={{
          tabBarLabel: 'Music',
          tabBarIcon: ({color}) => (
            <Icon name="music" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={DashboardStackScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({color}) => (
            <Icon name="barcode" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RoutesNavigator = () => {
  // const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const isUserSignedIn = useSelector(
    (state) => state.loginReducer.isUserLoggedIn,
  );

  return (
    <NavigationContainer>
      {isUserSignedIn ? <TabStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};
export default RoutesNavigator;
