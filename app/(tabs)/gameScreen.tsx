import { useState } from "react";
import { Text, Pressable, StyleSheet, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GuessComponent from "../(tabs)/guessComponent";

export default function HomeScreen() {
  const computerNumber = Math.floor(Math.random() * 100) + 1;
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [showGuessComponent, setShowGuessComponent] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Text style={styles.title}>A Number Has Been Generated!</Text>
        <TextInput
          style={styles.numberLine}
          placeholder="_____"
          placeholderTextColor={"white"}
          keyboardType="numeric"
          onChangeText={(text) => setGuess(text)}
        ></TextInput>
        <Text style={styles.subtitle}>Guess from 1 to 100!</Text>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.homeButton}>
            <Text
              style={styles.buttonText}
              onPress={() => setShowGuessComponent(true)}
            >
              Guess
            </Text>
          </Pressable>
        </View>
        {showGuessComponent && (
          <GuessComponent
            isCorrect={Number(guess) === computerNumber}
            isHigher={Number(guess) > computerNumber}
          />
        )}
        <View>
          <Text>Attempts: {attempts}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2D4B49",
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 30,
    textAlign: "center",
    color: "#E5C98B",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    color: "white",
    paddingBottom: 30,
  },
  numberLine: {
    textAlign: "center",
    fontSize: 50,
    color: "white",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeButton: {
    width: "70%",
    height: "20%",
    margin: 10,
    backgroundColor: "#E5C98B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
  },
});
