import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import UserDetailsStyles from './UserDetailsStyles';

import {AppColor, AppFonts} from '../../utils';

import AppImage from '../../utils/AppImage';

import {Button} from 'react-native-paper';
import {Root} from 'native-base';
import HeaderComponent from '../../components/Header/HeaderComponent';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetailsInfo: props.route.params.userDetail,
      userProfilePicURL: props.route.params.userDetail.avatar,
      userDetailAPI: {},
      isFound: true,
    };
  }
  handleBackButton = () => this.props.navigation.goBack();
  render() {
    return (
      <Root>
        <HeaderComponent
          title="User Details"
          backEnabled="true"
          handleBackpress={() => this.handleBackButton()}
        />
        <View style={UserDetailsStyles.v_container}>
          <View style={UserDetailsStyles.top_row}>
            <View
              style={{
                shadowColor: AppColor.grey,
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.53,
                shadowRadius: 13.97,

                elevation: 21,
              }}>
              <Image
                source={AppImage.outgoing_call}
                style={UserDetailsStyles.call_image_style_c}
              />
            </View>
            <Image
              style={UserDetailsStyles.row_img}
              source={{uri: this.state.userDetailsInfo.avatar}}
            />
            <Image
              source={AppImage.outgoing_call}
              style={UserDetailsStyles.sms_image_style}
            />
          </View>

          <View style={UserDetailsStyles.v_container}>
            <Text style={UserDetailsStyles.setFontSizeOne}>
              {this.state.userDetailsInfo.first_name}-
              {this.state.userDetailsInfo.last_name}
            </Text>
            <Text style={UserDetailsStyles.setFontSizeTwo}>Cardiologist</Text>
            <View
              style={{
                flexDirection: 'row', // main axis
                justifyContent: 'flex-start', // main axis
                alignItems: 'center',
              }}>
              <Text style={UserDetailsStyles.setFontSizeOneBlue}>0.5</Text>
              <Text
                style={{
                  marginLeft: 10,
                  alignContent: 'center',
                  textAlignVertical: 'center',
                  fontSize: 15,
                }}>
                ( 235 Viewer )
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '70%',
              alignItems: 'stretch',
            }}>
            <Button style={UserDetailsStyles.RoundButtonStyle}>
              <Text style={{color: AppColor.white, fontSize: 15}}>
                BOOK APPOINTMENT
              </Text>
            </Button>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              margin: 5,
              padding: 10,
              elevation: 1,
              backgroundColor: AppColor.white,
            }}>
            <Image
              source={AppImage.personal_info}
              style={UserDetailsStyles.call_image_style}
            />
            <View
              style={{
                backgroundColor: AppColor.grey,
                width: '0.3%',
                margin: 5,
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 20,
                  color: AppColor.greyText,
                }}>
                Personal Information
              </Text>

              <Image
                source={AppImage.rightArrow}
                style={UserDetailsStyles.nextArrow}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              margin: 5,
              padding: 10,
              elevation: 1,
              backgroundColor: AppColor.white,
            }}>
            <Image
              source={AppImage.reviwer}
              style={UserDetailsStyles.call_image_style}
            />
            <View
              style={{
                backgroundColor: AppColor.grey,
                width: '0.3%',
                margin: 5,
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 20,
                  color: AppColor.greyText,
                }}>
                Reviewer
              </Text>

              <Image
                source={AppImage.rightArrow}
                style={UserDetailsStyles.nextArrow}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              margin: 5,
              padding: 10,
              elevation: 1,
              backgroundColor: AppColor.white,
            }}>
            <Image
              source={AppImage.working_address}
              style={UserDetailsStyles.call_image_style}
            />
            <View
              style={{
                backgroundColor: AppColor.grey,
                width: '0.3%',
                margin: 5,
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 20,
                  color: AppColor.greyText,
                }}>
                Working Adress
              </Text>

              <Image
                source={AppImage.rightArrow}
                style={UserDetailsStyles.nextArrow}
              />
            </View>
          </View>
        </View>
      </Root>
    );
  }
}

export default UserDetails;
