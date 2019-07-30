import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import MainSwiper from './components/swiper';
export default class Home extends Component {
    
    render() {
        return (
            <View>
                <View>
                    <MainSwiper ></MainSwiper>
                </View>
                <View style={styles.btn}>
                    <Button 
                        title="登陆"
                        color="#e94f4f"
                        onPress={ () => this.onPressLearnMore('登陆')}
                        ></Button>
                </View>
                <View style={styles.btn}>
                    <Button 
                        title="注册"
                        color="#e94f4f"
                        onPress={ () => this.onPressLearnMore('注册')}
                        ></Button>
                </View>
            </View>
        )
    }
    onPressLearnMore(val){
        this.props.navigation.navigate('Login',{name:val})
    }
}
const styles = StyleSheet.create({
    btn: {
        marginTop:30,
        marginHorizontal:80,
        borderRadius:50,
    }
});

