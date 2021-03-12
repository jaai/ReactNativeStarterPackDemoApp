import {StyleSheet, Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';
import AppColor from '../../utils/AppColor';
import AppFonts from '../../utils/AppFonts';

const DEVICE_WIDTH = Dimensions.get('window').width;
const UserDetailsStyles = StyleSheet.create({
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
  },
  ButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  RoundButtonStyle: {
    padding: 10,
    overflow: 'hidden',
    shadowColor: AppColor.grey,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    color: AppColor.white,
    elevation: 21,

    backgroundColor: AppColor.searchArticle,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  listImg: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginLeft: -10,
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
    padding: 2,
    flexDirection: 'column', // main axis
    justifyContent: 'center', // main axis
    alignItems: 'center', // cross axis
    backgroundColor: AppColor.white,
  },

  setFontSizeOne: {
    fontSize: 20, // Define font size here in Pixelsty
    fontFamily: AppFonts.bold,
    color: AppColor.black,
    alignContent: 'center',
    textAlign: 'center',
  },
  setFontSizeTwo: {
    marginTop: 2,
    fontSize: 15, // Define font size here in Pixelsty
    fontFamily: AppFonts.regular,
    color: AppColor.greyText,
  },
  setFontSizeOneBlue: {
    fontSize: 20, // Define font size here in Pixelsty
    fontFamily: AppFonts.bold,
    color: AppColor.blue,
  },
  setFontSizeList: {
    fontSize: 20, // Define font size here in Pixelsty
    fontFamily: AppFonts.bold,
    color: AppColor.greyText,
    alignContent: 'center',
    marginLeft: 40,
    textAlign: 'center',
  },
  row: {
    elevation: 2,
    borderRadius: 2,
    backgroundColor: AppColor.white,
    flex: 1,
    flexDirection: 'column', // main axis
    justifyContent: 'flex-start', // main axis
    alignItems: 'center', // cross axis
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 2,
  },
  top_row: {
    flex: 2,
    flexDirection: 'row', // main axis
    justifyContent: 'flex-start', // main axis
    alignItems: 'center',
    marginTop: 5,
  },

  row_img: {
    height: '100%',
    overflow: 'hidden',
    width: '50%',
    borderRadius: 100 / 1,
    paddingLeft: 16,
    flex: 0,
  },
  call_image_style: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  call_image_style_c: {
    width: 50,
    height: 50,
    alignSelf: 'center',

    marginRight: 30,
  },
  sms_image_style: {
    width: 50,
    height: 50,
    marginLeft: 30,
  },
});
export default UserDetailsStyles;
