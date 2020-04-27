import React, { useState,useRef,useEffect } from 'react';
import { StyleSheet,View,Text,button, Button,Alert,ScrollView, FlatList } from 'react-native';
import { Ionicons } from'@expo/vector-icons';

import CustomButton from '../components/CustomButton.js';
import NumberContainer  from '../components/NumberContainer.js';
import Card from '../components/Card.js';
import { render } from 'react-dom';

const genrateRandom = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    if (rndNum===exclude){
        return genrateRandom(min,max,exclude);
    }
    else{
        return rndNum;
    }
};

const renderListItem =(numOfRound,itemData) =>(
    <View style={styles.listitem}>
        <Text>#{numOfRound - itemData.index}</Text>
        <Text>{itemData.item}</Text>
    </View>
);

const GameScreen = props =>{
    const initialGuess = genrateRandom(1,100,props.userChoice);
    const [currentGuess,setCurrentGuess] = useState(initialGuess);
    const [pastGuess,setPastGuess] = useState([initialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh =useRef(100);

    const { userChoice, onGameOver} = props;
    useEffect(()=>{
        if (currentGuess === userChoice)
        {
            props.onGameOver(pastGuess.length);
        }

    }, [currentGuess,onGameOver]);

    const nextGuessHandler = direction =>{
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction==='greater' && currentGuess > props.userChoice))
        {
            const string = 'You also know it is not '.concat(direction,' !')
            Alert.alert("Don't Lie ", string, [{text:'Sorry!',style:'cancel'}]);
            return;
        }

        if (direction==='lower')
        {
            currentHigh.current = currentGuess;
        }
        else
        {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = genrateRandom(currentLow.current,currentHigh.current,currentGuess)
        setCurrentGuess(nextNumber);
        //setRounds(curRound => curRound + 1);
        setPastGuess(curPastGuess => [nextNumber.toString(),...curPastGuess]);
    };

    return(
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttoncontainer}>
                <CustomButton style={styles.lowerbutton} onPress={nextGuessHandler.bind(this, 'lower')} >
                    <Ionicons name='md-remove' size={24} color='white' />
                </CustomButton>
                <CustomButton style={styles.greaterbutton} onPress={nextGuessHandler.bind(this, 'greater')} >
                    <Ionicons name='md-add' size={24} color='white' />
                </CustomButton>
            </Card>
            <View style={styles.listContainer}>
                {/*<ScrollView contentContainerStyle={styles.list}>
                    {pastGuess.map((guess,index) => renderListItem(guess,pastGuess.length - index))}
                </ScrollView>*/}
                <FlatList keyExtractor={(item) => item} 
                    data={pastGuess} 
                    renderItem={renderListItem.bind(this,pastGuess.length)}
                    contentContainerStyle={styles.list}
                />
                    
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttoncontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:400,
        maxWidth:'90%'
    },
    lowerbutton:{
        backgroundColor:'black'
    },
    listitem:{
        borderColor:'#ccc',
        padding:15,
        marginVertical:10,
        borderWidth:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
    },
    listContainer:{
        flex:1,
        width:'60%'
    },
    list:{
        flexGrow:1,
        justifyContent:'flex-end'
    }
});

export default GameScreen;