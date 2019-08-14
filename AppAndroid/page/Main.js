import React, { Component } from 'react';
import { View, Text, Button, } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import List from './List'
import My from './My'
const BottomTabNavigator = createBottomTabNavigator(
  {
        List,
        My,
  },
  {
      initialRouteName: 'List', //第一次加载时初始选项卡路由的 routeName
      order: ['List','My'], //定义选项卡顺序的 routeNames 数组
      tabBarOptions: {
          activeTintColor: '#e94f4f',//标签和图标选中颜色
          activeBackgroundColor: '#fff',//导航选中背景色
          inactiveTintColor: '#000', //标签和图标未选中颜色
          inactiveBackgroundColor: 'white',//导航未选中背景色
          showIcon: false,//是否显示 Tab 的图标,默认不显示
          style: {
              backgroundColor: '#fff',//tabBar背景色
              height: 50,
              lineHeight:50
          },
          // labelStyle 选项卡标签的样式对象
          // tabStyle 选项卡的样式对象
      },
  }
)
const AppContainer = createAppContainer(BottomTabNavigator); //底部导航
export default class Main extends Component {
  render() {
      return (
          <AppContainer/>
      )
  }
}

