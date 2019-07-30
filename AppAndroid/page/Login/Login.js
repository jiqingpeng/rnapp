import React, { Component } from 'react';
import { View, Text, Button, TextInput , ToastAndroid} from 'react-native';
import  axios from 'axios';
import { url} from '../../util/const';

export default class Login extends Component {
    state = {
      title:'登陆',
      phone:'',
      pwd:''
    }
    componentDidMount(){
      const { state:{ params:{name} } } = this.props.navigation
      this.setState({title:name})
    }
    onSubmit(){
      let phone = parseInt(this.state.phone.replace(/\s+/g,""));
      let pwd = this.state.pwd;
      if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(phone))) {
        ToastAndroid.show('请输入11位手机号码',ToastAndroid.SHORT);
      }else if(pwd.length!=6){
        ToastAndroid.show('请输入6位密码',ToastAndroid.SHORT);
      }else{
        let that = this;
        let params = {
          phone,
          pwd
        }
        //登陆/注册
        if(this.state.title == '登陆'){
          console.log(1)
        }else{
          console.log(2)
        }
        axios.get(url+'/phone/new?phone='+phone+'&pwd='+pwd)
          .then((res) => {
            let data = res.data;
            this.props.navigation.navigate('Mine')
            sessionStorage.setItem("loginStatus","true");
            sessionStorage.setItem("loginId",data.res.id);
          })
          .catch( (err) =>{
            ToastAndroid.show(err.response.data.res,ToastAndroid.SHORT);
          });
      }
      
    }
    render() {
        return (
          <View>
            <TextInput
              placeholder="请输入手机号"
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(phone) => this.setState({phone})}
              value={this.state.phone}
            />
            <TextInput
              placeholder="请输入密码"
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(pwd) => this.setState({pwd})}
              value={this.state.pwd}
            />
            <Button 
            title={this.state.title}
            onPress={ () => this.onSubmit()}
            ></Button>
          </View>
        )
    }
}
