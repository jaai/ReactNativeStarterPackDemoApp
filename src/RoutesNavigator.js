import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';

import Login from './screens/Login/Login';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import UserList from './screens/UserList/UserList';
import UserDetails from './screens/UserList/UserDetails';
import Test from './screens/Login/Test';

const AuthStack = createStackNavigator();
const DashboardStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator headerMode="none" initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="Homestack" component={DashboardStackScreen} />
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

const RoutesNavigator = () => {
  // const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const isUserSignedIn = useSelector(
    (state) => state.loginReducer.isUserLoggedIn,
  );

  return (
    <NavigationContainer>
      {isUserSignedIn ? <DashboardStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};
export default RoutesNavigator;
