import React, { useState } from 'react';
import { StyleSheet,View,Text,Button,Image} from 'react-native';

import CustomButton from '../components/CustomButton.js';
import Colors from '../constants/colors.js';

const GameOverScreen = props =>{
    return(
    <View style={styles.container}>
        <Text style={styles.head} >Game IS OVER</Text>
        <View style={styles.imagecontainer}>
          <Image style={styles.image} source={require('../assets/original.png')} resizeMode='cover' />
        </View>
        <Text style={styles.holder}>Number of Tries : <Text style={styles.text}>{props.totalGuessNeeded}</Text></Text>
        <Text style={styles.holder}>Number Was : <Text style={styles.text}>{props.usernumber}</Text></Text>
        <Text style={styles.holder2}>Is it correct Of Course It is !</Text>
        <CustomButton style={styles.button} onPress={props.onRestart}>
            PLAY AGAIN
        </CustomButton>
    </View>
    );
    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'black'
    },
    image:{
      width:'100%',
      height:'100%'
    },
    imagecontainer:{
      width:250,
      height:250,
      borderRadius: 200,
      borderWidth: 3,
      borderColor:'grey',
      overflow:'hidden'
    },
    holder:{
      fontFamily:'stonewall',
      fontSize:30,
      margin:10,
      color:'white'
    },
    holder2:{
      fontFamily:'stonewall',
      fontSize:30,
      margin:10,
      color:'green'
    },
    text:{
      color: Colors.primary
      
    },
    head:{
      marginBottom:10,
      fontFamily:'stonewall',
      fontSize:40,
      color:'white'
    },
    button:{
      backgroundColor:'indigo',
      marginTop:20
    }
  });

export default GameOverScreen;