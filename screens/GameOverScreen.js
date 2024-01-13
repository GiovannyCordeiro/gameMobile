import { View, StyleSheet, Text } from "react-native"
import { Image } from "react-native";
import Title from "../components/ui/Title";

import colors from "../util/Colors"
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen() {
  return(
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <Text style={styles.sumarryText}>Your Phone needed 
        <Text style={styles.highLight}> X </Text>
        rounds to guess the numer
        <Text style={styles.highLight}> Y </Text>.
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image:{
    width: '100%',
    height: '100%'
  },
  sumarryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highLight: {
    fontFamily: 'open-sans-bold',
    color: colors.primary500
  }
});