import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import HeaderStyle from './HeaderStyle';
import AppImage from '../../utils/AppImage';
import {Appbar} from 'react-native-paper';
import {AppColor} from '../../utils';
const _goBack = () => console.log('Went back');
const _handleSearch = () => console.log('Searching');

const _handleMore = () => console.log('Shown more');
const HeaderComponent = (props) => {
  return (
    <Appbar.Header style={{backgroundColor: AppColor.searchArticle}}>
      {props.backEnabled ? (
        <Appbar.BackAction onPress={props.handleBackpress} />
      ) : (
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
      )}

      <Appbar.Content title={props.title} />

      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>

    // <View style={HeaderStyle.container}>
    //   {props.menu ? (
    //     <TouchableOpacity onPress={props.handleDrawer}>
    //       <Image
    //         source={AppImage.menu}
    //         style={{width: 25, height: 25, marginLeft: 10}}
    //       />
    //     </TouchableOpacity>
    //   ) : props.backEnabled ? (
    //     <TouchableOpacity onPress={props.handleBackpress}>
    //       <Image
    //         source={AppImage.back_navigate}
    //         style={{width: 25, height: 25, marginLeft: 5}}
    //       />
    //     </TouchableOpacity>
    //   ) : (
    //     <Image source={null} style={{width: 25, height: 25, marginLeft: 5}} />
    //   )}

    //   <Text style={HeaderStyle.title}>{props.title}</Text>

    //   <Image source={null} style={{width: 25, height: 25, marginLeft: 5}} />
    // </View>
  );
};

export default HeaderComponent;
