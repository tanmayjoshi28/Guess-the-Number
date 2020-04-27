import React, { useState } from 'react';
import { StyleSheet,View,Text,Button,TouchableWithoutFeedback,Keyboard } from 'react-native';

import Card from '../components/Card.js';
import Colors from '../constants/colors.js';
import Input from '../components/Input.js'
import NumberContainer  from '../components/NumberContainer.js';
import BodyText from '../components/BodyText.js';
import CustomButton from '../components/CustomButton.js';
const StartGameScreen = props =>{

    const [enteredValue,setEnteredValue] = useState('');
    const [confirmed ,setConfirmed] = useState(false);
    const [selectedNumber,setSelectNumber] =useState();

    const numberInputHandeler = inputText =>{
      setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };

    const resetInput = () =>{
      setEnteredValue('')
      setConfirmed(false);
    };

    const confirmInput = () => {
      
        if (enteredValue===''){
          setConfirmed(false);    
        }
        else{
          setConfirmed(true);
          setSelectNumber(parseInt(enteredValue));
          setEnteredValue('');
          Keyboard.dismiss()
        }
       
    };

    let confirmedOutput;

    if (confirmed) {
      
        confirmedOutput =
          <Card style={styles.summary}> 
            <BodyText>You Selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <CustomButton onPress={() =>props.onStartGame(selectedNumber)}>START</CustomButton>
          </Card>
    }

    return(
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}} >
        <View style={styles.screen}>
            <Text style={styles.title}>Start New Game !</Text>
            <Card style={styles.inputcontainer}>
              <Text style={styles.select}>Select a Number</Text>
              <Input style={styles.input} 
                blurOnSubmit 
                keyboardType='number-pad' 
                maxLength={2}
                onChangeText={numberInputHandeler}
                value={enteredValue}
               />
              <View style={styles.buttoncontainer}>

                <View style={styles.button}>
                  <Button title="Reset" onPress={resetInput} color={Colors.accent} />
                </View>
                <View style={styles.button}>
                  <Button title="Confirm" onPress={confirmInput} color='#f7287b' />
                </View>

              </View>
            </Card>
            {confirmedOutput}
        </View>
      </TouchableWithoutFeedback>
    );

};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding:10,
      alignItems:'center'
    },
    title:{
      marginTop:50,
      marginBottom:40,
      fontSize:30,
      marginVertical:10,
      fontFamily:'stonewall'

    },
    inputcontainer:{
      width:300,
      maxWidth:'80%',
      alignItems:'center'
    },
    buttoncontainer:{
      flexDirection:'row',
      width:'100%',
      justifyContent:'space-between',
      paddingHorizontal:15
    },
    button:{
      width:100
    },
    input:{
      width:80,
      textAlign:'center'
    },
    summary:{
      marginTop:20,
      alignItems:'center'
    },
    select:{
      fontSize:20
    }

  });

export default StartGameScreen;