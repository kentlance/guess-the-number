import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface GuessComponentProps {
  isCorrect: boolean;
  isHigher: boolean;
}

const GuessComponent = ({ isCorrect, isHigher }: GuessComponentProps) => {
  if (isCorrect) {
    return (
      <View style={styles.container}>
        <Text>Correct!</Text>
      </View>
    );
  } else if (isHigher) {
    return (
      <View style={styles.container}>
        <Text>Too high!</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Too low!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GuessComponent;
