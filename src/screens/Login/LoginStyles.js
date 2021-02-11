import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import AppColor from '../../utils/AppColor';
import AppFonts from '../../utils/AppFonts';
import {Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.searchArticle,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  midcontainer: {
    flex: 3,
    backgroundColor: AppColor.white,
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center',
  },

  logo: {
    fontWeight: 'bold',
    fontSize: DEVICE_WIDTH * 0.06,
    color: AppColor.black,
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: AppColor.white,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: AppColor.black,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: AppColor.black,
  },
  forgot: {
    color: AppColor.black,
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: AppColor.black,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default LoginStyles;
