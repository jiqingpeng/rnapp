import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native';
// import {WebView} from 'react-native-webview';

class Center extends Component {
  render () {
    return (
      //   <View>
      //     <Text>1111</Text>
      //   </View>
      (
        <WebView
          source={{uri: 'https://github.com/facebook/react-native'}}
          style={{marginTop: 20}}
        />
      )
    );
  }
}
export default Center;
