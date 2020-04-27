import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const Header = props => {
    return(

    <View style={styles.header}>
        <Text style={styles.head_title}>{props.title}</Text>
    </View>

    );
};


const styles = StyleSheet.create({
    header: {
      width:'100%',
      height:120,
      paddingTop:45,
      paddingBottom:45,
      backgroundColor:'indigo',
      justifyContent:'center',
      alignItems:'center'
    },
    head_title:{
        color:'white',
        fontSize:40,
        fontFamily:'stonewall'
    }
  });

  export default Header;