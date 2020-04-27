import React, { useState,useRef,useEffect } from 'react';
import { StyleSheet,View,Text,button, Button,Alert } from 'react-native';

const BodyText = props => <Text styles={styles.body}> {props.children} </Text>;

const styles = StyleSheet.create({
    body:{
        fontFamily:'stonewall'
    }

});

export default BodyText;