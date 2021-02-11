import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-reanimated';
import AppColor from '../../utils/AppColor';
import AppFonts from '../../utils/AppFonts';

const DEVICE_WIDTH = Dimensions.get('window').width;

const UserListStyles = StyleSheet.create({
    appView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      height: '80%',
    },
    category: {
      width: '95%',
      height: '45%',
      backgroundColor: AppColor.white,
      borderRadius: 20,
      marginTop: '5%',
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {width: 0, height: 5},
      shadowColor: 'grey',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
    },
    nextArrow: {
      resizeMode: 'contain',
      width: 25,
      height: 25,
      marginRight: 10,
    },
    mainImage: {
      width: '90%',
      height: '100%',
      resizeMode: 'contain',
    },
    footer: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    v_container: {
      flex: 1,
      padding: 8,
      flexDirection: "column", // main axis
      justifyContent: "center", // main axis
      alignItems: "center", // cross axis
      backgroundColor: AppColor.green
    },
    row: {
      elevation: 1,
      borderRadius: 2,
      backgroundColor: color.tertiary,
      flex: 1,
      flexDirection: "row", // main axis
      justifyContent: "flex-start", // main axis
      alignItems: "center", // cross axis
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 18,
      paddingRight: 16,
      marginLeft: 14,
      marginRight: 14,
      marginTop: 0,
      marginBottom: 6
    },
    
    row_cell_namemail: {
      flex: 1,
      marginLeft:16,
      flexDirection: "column"
    },
    row_cell_temp: {
      color: AppColor.black,
      paddingLeft: 16,
      flex: 0,
   
      fontFamily: AppFonts.regular
    },
    row_img: {
      height:100,
      width:100,
      paddingLeft: 16,
      flex: 0,
   
      fontFamily: AppFonts.regular
    },
    row_name: {
      color: AppColor.black,
      textAlignVertical: "bottom",
      includeFontPadding: false,
      flex: 0,
     
      fontFamily: AppFonts.regular
    },
    row_email: {
      color: AppColor.black,
      textAlignVertical: "top",
      includeFontPadding: false,
      flex: 0,
   
      fontFamily: AppFonts.regular
    },
    separatorView: {
      height: 1,
            width: '100%',
            backgroundColor: AppColor.lightGrey,
    }
  });
  
  export default UserListStyles;
  