import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const GuessComponent = () => {
  const computerNumber = Math.floor(Math.random() * 100) + 1;
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);
    if (userGuess === computerNumber) {
      // User guessed correctly
      setAttempts(attempts + 1);
      setGuess("");
    } else if (userGuess < computerNumber) {
      // User guess is too low
      setGuess("");
      setAttempts(attempts + 1);
    } else {
      // User guess is too high
      setGuess("");
      setAttempts(attempts + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Guess the number:</Text>
      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={(text) => setGuess(text)}
        keyboardType="numeric"
      />
      <Text>Attempts: {attempts}</Text>
      <Text>Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});

export default GuessComponent;
