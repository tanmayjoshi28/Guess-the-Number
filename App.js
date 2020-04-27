import React, {useState} from 'react';
import { StyleSheet,View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Header from './components/Header.js';
import StartGameScreen from './screens/Startscreen.js';
import GameScreen from './screens/GameScreen.js';
import GameOverScreen from './screens/GameOverScreen.js';

const fetchFonts = () =>{
   return Font.loadAsync({
    'dacasa': require('./assets/fonts/dacasa.ttf'),
    'stonewall': require('./assets/fonts/StoneWalls.ttf')
  });
};

export default function App() {

  const [userNumber,setUserNumber] = useState();
  const [guessRounds,setGuessRounds] = useState(0);
  const [dataLoaded,setDataLoaded] = useState(false);

  if (!dataLoaded)
  {
      return (
        <AppLoading startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)} 
        onError={(err) => console.log(err)} 
        />
      );
  }

  const newGameHandler = () =>{
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const GameOverHandler = numOfRound =>{
    setGuessRounds(numOfRound);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={GameOverHandler} />
  }
  else if (guessRounds > 0)
  {
    content = <GameOverScreen totalGuessNeeded={guessRounds} usernumber={userNumber} onRestart={newGameHandler} /> ;
  }

  return (
    <View style={styles.container}>
        <View style={styles.title}>
          <Header title="Guess A Number App" />
        </View>
        {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title:{
    fontFamily:'stonewall'
  }
});
