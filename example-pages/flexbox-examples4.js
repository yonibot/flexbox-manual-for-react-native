import React from 'react';
import {StyleSheet, View} from 'react-native';


const Example4 = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"space-between",
        backgroundColor: "#fff",
    },

    box1: {
        width: 50,
        height: 70,
        backgroundColor:'#0000FF',
    },

    box2: {
        width: 50,
        height: 70,
        backgroundColor:'#7CFC00',
    },

    box3: {
        width: 50,
        height: 70,
        backgroundColor:'#FF0000',
    },
})

export default Example4;