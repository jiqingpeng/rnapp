/* eslint no-dupe-keys: 0 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import NavigationService from '../../NavigationService';
class MyRightComponent extends React.Component {
  componentDidMount () {
    console.log (this.props.rightComponent);
  }
  render () {
    // return <Text style={{color:'#fff'}} onPress={()=>{NavigationService.navigate('Center')}}>aaa</Text>
    return (
      <Text
        style={{color: '#fff'}}
        onPress={() => {
          NavigationService.navigate (this.props.rightComponent.router);
        }}
      >
        {this.props.rightComponent.text}
      </Text>
    );
  }
}
class MyLeftComponent extends React.Component {
  render () {
    return (
      <Icon
        name="chevron-left"
        onPress={() => {
          NavigationService.goBack ();
        }}
        color="#fff"
      />
    );
  }
}
class MyHeader extends React.Component {
  state = {};
  componentDidMount () {
    console.log (this.props);
  }
  handlerouter = router => {
    this.props.handlerouter (router);
  };
  renderMyComponent () {
    console.log (1);
  }
  render () {
    return (
      <View>
        <Header
          leftComponent={<MyLeftComponent />}
          centerComponent={{text: this.props.title, style: {color: '#fff'}}}
          rightComponent={
            <MyRightComponent rightComponent={this.props.rightComponent} />
          }
          backgroundColor="#e94f4f"
        />
      </View>
    );
  }
}

export default MyHeader;
