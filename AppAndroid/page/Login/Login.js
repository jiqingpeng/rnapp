import React, {Component} from 'react';
// import ImagePicker from 'react-native-image-picker'; //第三方相机
import {
  View,
  Text,
  Button,
  TextInput,
  ToastAndroid,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';
import {url} from '../../util/const';

const photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class Login extends Component {
  state = {
    title: '登陆',
    phone: '',
    pwd: '',
  };
  componentDidMount () {
    // ImagePicker.showImagePicker (photoOptions, response => {
    //   console.log ('response' + response);
    //   if (response.didCancel) {
    //     return;
    //   }
    // });
    const {state: {params: {name}}} = this.props.navigation;
    this.setState ({title: name});
  }
  async write (val) {
    console.log (val);
    await AsyncStorage.setItem ('loginId', val + ' ');
  }
  onSubmit () {
    let phone = parseInt (this.state.phone.replace (/\s+/g, ''));
    let pwd = this.state.pwd;
    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test (phone)) {
      ToastAndroid.show ('请输入11位手机号码', ToastAndroid.SHORT);
    } else if (pwd.length != 6) {
      ToastAndroid.show ('请输入6位密码', ToastAndroid.SHORT);
    } else {
      let that = this;
      let params = {
        phone,
        pwd,
      };
      //登陆/注册
      if (this.state.title == '登陆') {
        axios
          .get (url + '/phone/new?phone=' + phone + '&pwd=' + pwd)
          .then (res => {
            let data = res.data;
            this.props.navigation.navigate ('Main');
            // sessionStorage.setItem("loginStatus","true");
            // sessionStorage.setItem("loginId",data.res.id);
            this.write (data.res.id);
          })
          .catch (err => {
            ToastAndroid.show (err.response.data.res, ToastAndroid.SHORT);
          });
      } else {
        axios
          .post (url + '/phone', params)
          .then (res => {
            let data = res.data;
            this.props.navigation.navigate ('Home');
          })
          .catch (err => {
            ToastAndroid.show (err.response.data.res, ToastAndroid.SHORT);
          });
      }
    }
  }
  render () {
    return (
      <View>
        <TextInput
          placeholder="请输入手机号"
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={phone => this.setState ({phone})}
          value={this.state.phone}
        />
        <TextInput
          placeholder="请输入密码"
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={pwd => this.setState ({pwd})}
          value={this.state.pwd}
        />
        <Button
          title={this.state.title}
          color="#e94f4f"
          onPress={() => this.onSubmit ()}
        />

      </View>
    );
  }
}
export default Login;
