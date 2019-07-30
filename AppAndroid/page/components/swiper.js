import React,{Component} from 'react'
import Swiper from 'react-native-swiper';
import {
    Image,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
 
let {width} =  Dimensions.get('window');
 
class MainSwiper extends Component{
    render(){
        return(
            <View  style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    height={width*40/75}
                    autoplayTimeout={2.5}
                    // showButtons —— 是否显示左右翻页按钮
                    showsButtons={false}
                    // autoPlay —— 是否自动播放
                    autoplay={false}
                    // paginationStyle —— 包含小点点的容器的样式，这里用来调整位置
                    paginationStyle={styles.paginationStyle}
                    // dotStyle —— 小点点的样式
                    dotStyle={styles.dotStyle}
                    // activeDotStyle —— 当前被激活的小点点的样式
                    activeDotStyle={styles.activeDotStyle}
                >
                    <Image source={{uri:'https://lonelyroad.oss-cn-beijing.aliyuncs.com/banner/one.jpg'}} style={styles.bannerImg} />
                    <Image source={{uri:'https://lonelyroad.oss-cn-beijing.aliyuncs.com/banner/two.jpg'}} style={styles.bannerImg} />
                    <Image source={{uri:'https://lonelyroad.oss-cn-beijing.aliyuncs.com/banner/three.jpg'}} style={styles.bannerImg} />
                </Swiper>
            </View>
            )
    }
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f3f3f3" ,
        height:width*1.2,
    },
    bannerImg: {
        height: width*1.2,
        width: width,
    },
    wrapper: {
        width: width,
    },
    paginationStyle: {
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor:'#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor:'#e94f4f',
        borderRadius: 0,
    },
});
 
export default MainSwiper;