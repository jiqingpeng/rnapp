import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Home from './page/Home'
import Login from './page/Login/Login'
import Mine from './page/Mine'
const StackNavigator = createStackNavigator(
        {
                Home,
                Mine,
                Login
        },
        {
                initialRouteName: 'Home',
                defaultNavigationOptions: {
                headerStyle: {
                        // backgroundColor: '#f4511e',
                },
                headerBackTitle: null,
                // headerTintColor: '#fff',
                headerTitleStyle: {
                        fontWeight: 'bold',
                },
                header: null
                }
        }
)
const HomeStack = createStackNavigator({Home});
const MineStack = createStackNavigator({Mine});
 
const BottomTabNavigator = createBottomTabNavigator(
    {
        Home,
        Mine,
    },
    {
        initialRouteName: 'Home', //第一次加载时初始选项卡路由的 routeName
        order: ['Mine','Home'], //定义选项卡顺序的 routeNames 数组
        tabBarOptions: {
            activeTintColor: 'red',//标签和图标选中颜色
            activeBackgroundColor: 'yellow',//导航选中背景色
            inactiveTintColor: '#000', //标签和图标未选中颜色
            inactiveBackgroundColor: 'white',//导航未选中背景色
            showIcon: true,//是否显示 Tab 的图标,默认不显示
            style: {
                backgroundColor: 'yellow',//tabBar背景色
                height: 49
            },
            // labelStyle 选项卡标签的样式对象
            // tabStyle 选项卡的样式对象
        },
    }
)
 
const AppContainer = createAppContainer(StackNavigator); //顶部导航
// const AppContainer = createAppContainer(BottomTabNavigator); //底部导航
 
export default class Navigation extends Component {
    render() {
        return (
            <AppContainer/>
        )
    }
}
