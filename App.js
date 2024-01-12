import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { useCallback, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import colors from './util/Colors';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    'opens-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'opens-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  return (
    <LinearGradient 
      colors={[colors.primary700, colors.accent500]} 
      style={styles.rootScreen}
      onLayout={onLayoutRootView}
    >
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgrounImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgrounImage: {
    opacity: 0.15
  }
});
