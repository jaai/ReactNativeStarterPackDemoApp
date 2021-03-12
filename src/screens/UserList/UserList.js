import React from 'react';

import axios from 'axios';
import AppStyles from '../../utils/AppStyles';
import APIStrings from '../../webservice/APIStrings';
import AppColor from '../../utils/AppColor';

import AppFonts from '../../utils/AppFonts';
import Loader from '../../components/Loader/Loader';
import {NetworkContext} from '../../components/NoInternet/OfflineNotify';
import {Root, Text, Toast, View} from 'native-base';
import AppStrings from '../../utils/AppStrings';
import UserListStyles from './UserListStyles';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import HeaderComponent from '../../components/Header/HeaderComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';

const DEVICE_WIDTH = Dimensions.get('window').width;
export default class UserList extends React.Component {
  static contextType = NetworkContext;
  constructor(props) {
    super();
    this.page = 1;
    this.onEndReachedCalledDuringMomentum = false;
    this.arrayholder = [];
    this.state = {
      isLoading: false,
      isRefreshing: false,
      userList: [],
    };
  }
  componentDidMount() {
    if (this.context.isConnected) {
      this.setState({isLoading: true}, () => {
        this.getUserList();
      });
    }
  }
  getUserList = () => {
    axios
      .get(APIStrings.userListAPI, {
        params: {
          page: this.page,
        },
      })
      .then((response) => {
        let responseJson = response.data;
        console.log('response json ', JSON.stringify(responseJson));

        this.setState(
          {
            userList: responseJson.data,

            isLoading: false,
          },
          () => {
            this.arrayholder = this.state.userList;
          },
        );
      })
      .catch((error) => {
        console.log(error);
        this.state({isLoading: false});
        Toast.show({
          text: AppStrings.apiCallError,
        });
      });
  };

  renderUserList = (item, index) => {
    return (
      <TouchableOpacity onPress={() => this.onUserClicked(item)}>
        <View style={UserListStyles.row}>
          <Image style={UserListStyles.row_img} source={{uri: item.avatar}} />
          <View style={UserListStyles.row_cell_namemail}>
            <Text style={UserListStyles.row_name}>
              {item.first_name}-{item.last_name}
            </Text>

            <Text style={UserListStyles.row_place}>{item.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Root>
        <SafeAreaView>
          <HeaderComponent bgColor={AppColor.searchArticle} title="Users" />

          <Loader loading={this.state.isLoading} />
          {this.context.isConnected ? this.renderFlatlist() : null}
        </SafeAreaView>
      </Root>
    );
  }

  onUserClicked = (userDetail) => {
    this.props.navigation.navigate('UserDetails', {
      userDetail,
    });
  };

  renderFlatlist = () => {
    return (
      <FlatList
        style={{marginTop: 10, alignSelf: 'stretch'}}
        data={this.state.userList}
        extraData={this.state.userList}
        initialNumToRender={6}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => this.renderUserList(item, index)}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={() => this.onRefresh()}
            colors={[AppColor.headerBg]}
          />
        }
        ListFooterComponent={() => this.renderFooter()}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!this.onEndReachedCalledDuringMomentum) {
            this.handleLoadMore(); // LOAD MORE DATA
            this.onEndReachedCalledDuringMomentum = true;
          }
        }}
        onMomentumScrollBegin={() => {
          this.onEndReachedCalledDuringMomentum = false;
        }}
      />
    );
  };
  renderFooter = () => {
    return (
      <View style={UserListStyles.footer}>
        {this.state.isRefreshing ? (
          <ActivityIndicator
            color={AppColor.headerBg}
            style={{margin: 20}}
            size="large"
            animating
          />
        ) : null}
      </View>
    );
  };

  renderSeparator = () => <View style={UserListStyles.separatorView} />;
  handleLoadMore = () => {
    if (!this.state.isLoading) {
      this.setState({isRefreshing: true});
      this.page = this.page + 1; // increase page by 1
      this.loadMoreUseLrist(this.page); // method for API call
    }
  };

  loadMoreUseLrist = (pageIndex) => {
    axios
      .get(APIStrings.userListAPI, {
        params: {
          page: pageIndex,
        },
      })
      .then((response) => {
        let responseJson = response.data;
        this.setState(
          {
            userList: [...this.state.userList, ...responseJson.data],
            isRefreshing: false,
          },
          () => {
            this.arrayholder = this.state.userList;
          },
        );
      })
      .catch((error) => {
        console.log(error);
        this.state({isRefreshing: false});
        Toast.show({
          text: AppStrings.apiCallError,
        });
      });
  };

  onRefresh = () => {
    this.page = 1;
    this.setState({isLoading: true, userList: []}, () => {
      this.getUserList();
    });
  };
}
