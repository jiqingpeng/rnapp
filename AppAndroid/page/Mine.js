import React, { Component } from 'react';
import { View, Text, Button, } from 'react-native';
export default class Login extends Component {
    onPressLearnMore(){
      console.log(this.props.navigation)
      this.props.navigation.navigate('Mine')
    }
    render() {
        return (
            <View>
              <Button 
                title="mine"
                onPress={ () => this.onPressLearnMore()}
                ></Button>
              <Text style={{fontSize: 32}}>我是主屏</Text>
            </View>
        )
    }
}
