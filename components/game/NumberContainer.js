import { View, Text, StyleSheet } from "react-native"

import colors from '../../util/Colors';

export default function NumberContainer({children}) {
  return(
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    fontFamily: 'opens-sans-bold',
    color: colors.accent500,
    fontSize: 36
  }
})