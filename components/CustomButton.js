import React, { useState,useRef,useEffect } from 'react';
import { StyleSheet,View,Text,TouchableOpacity, Button,Alert } from 'react-native';

import Colors from '../constants/colors.js';

const CustomButton = props => {
    return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={{...styles.button,...props.style}}>
            <Text style={styles.buttontext}>{props.children}</Text>
        </View>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor:Colors.primary,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25
    },
    buttontext:{
        color:'white',
        fontSize:18
    }
});

export default CustomButton;