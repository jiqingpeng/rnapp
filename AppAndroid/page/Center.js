/* eslint no-dupe-keys: 0 */
import React, {Component} from 'react';
import {
  View,
  FlatList,
  ToastAndroid,
  Modal,
  Text,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import {ListItem, Header, icon} from 'react-native-elements';
import {url} from '../util/const';
import axios from 'axios';
import MyHeader from './components/myheader';
const list = [
  {
    title: '头像',
    icon: 'chevron-right',
  },
  {
    title: '手机号',
  },
  {
    title: '昵称',
    icon: 'chevron-right',
  },
  {
    title: '性别',
    icon: 'chevron-right',
  },
  {
    title: '简介',
    icon: 'chevron-right',
  },
];

class ListExample extends React.Component {
  state = {
    phone: {},
  };
  async componentDidMount () {
    let id = await AsyncStorage.getItem ('loginId');
    console.log (id);
    axios
      .get (url + '/info/' + id)
      .then (res => {
        this.setState (res.data.res);
        console.log (this.state);
      })
      .catch (err => {
        // Toast.info(err.response.data.res);
      });
  }
  // async read() {
  //     let value =
  //     console.log(value)
  //     return value
  //  }
  handleupdate (val) {
    let id = sessionStorage.getItem ('loginId');
    let params = {sex: val};
    axios
      .put (url + '/info/' + id, params)
      .then (res => {
        this.setState (res.data.res);

        ToastAndroid.show ('保存成功', ToastAndroid.SHORT);
      })
      .catch (err => {});
  }
  render () {
    return (
      <View>
        {list.map ((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            rightIcon={{name: item.icon}}
            bottomDivider={true}
            onClick={console.log (88)}
          />
        ))}
      </View>
    );
  }
}
class Center extends React.Component {
  state = {};

  handlerouter = router => {
    // this.props.history.push(router)
  };
  renderCenterComponent () {
    console.log (1);
  }
  render () {
    const {files} = this.state;
    return (
      <View>
        <MyHeader title="个人中心" rightComponent={{text: ' ', router: ' '}} />
        <ListExample handlerouter={this.handlerouter} />
      </View>
    );
  }
}

export default Center;
