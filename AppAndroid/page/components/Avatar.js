/* eslint no-dupe-keys: 0 */
import React, {Component} from 'react';
import {
  View,
  FlatList,
  ToastAndroid,
  Image,
  Text,
  AsyncStorage,
} from 'react-native';
import {Avatar, Header, Icon} from 'react-native-elements';
import {url} from '../util/const';
import MyHeader from './components/myheader';
import axios from 'axios';

class My extends React.Component {
  state = {};
  async componentDidMount () {
    let id = await AsyncStorage.getItem ('loginId');
    axios
      .get (url + '/info/' + id)
      .then (res => {
        this.setState (res.data.res);
      })
      .catch (err => {
        // Toast.info(err.response.data.res);
      });
  }
  handlerouter = router => {
    console.log (router);
    // console.log(this.props)
    if (router == 'Back') {
      this.props.navigation.goBack ();
    } else {
      console.log (this.props.navigation);
      this.props.navigation.navigate (router + ' ');
    }
  };
  renderMyComponent () {
    console.log (1);
  }
  render () {
    return (
      <View>
        <MyHeader title="我的" rightComponent={{text: '资料', router: 'Center'}} />
        <View style={{alignSelf: 'center'}}>
          <Avatar
            size="large"
            rounded
            source={{
              uri: this.state.head_url,
            }}
            containerStyle={{marginTop: 5}}
          />
        </View>

        <Text h1 style={{textAlign: 'center', marginTop: 10}}>
          {this.state.nick}
        </Text>

      </View>
    );
  }
}

export default My;
