import { useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GuessComponent from "../(tabs)/guessComponent";

export default function HomeScreen() {
  const [computerNumber, setComputerNumber] = useState(
    () => Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState<{ guess: number; result: string }[]>(
    []
  );
  const [attemptCount, setAttemptCount] = useState(0);
  const [hasSubmittedGuess, setHasSubmittedGuess] = useState(false);
  const [componentIsVisible, setComponentIsVisible] = useState(false);

  const handleGuess = () => {
    setHasSubmittedGuess(true);
    const newAttempt = {
      guess: Number(guess),
      result:
        Number(guess) === computerNumber
          ? "Correct!"
          : Number(guess) > computerNumber
            ? "Too high!"
            : "Too low!",
    };
    setAttempts((prevAttempts) => [...prevAttempts, newAttempt]);
    setAttemptCount(attemptCount + 1);
    setComponentIsVisible(true);
  };

  const handleClose = () => {
    setComponentIsVisible(false);
  };

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
          <Pressable style={styles.homeButton} onPress={handleGuess}>
            <Text style={styles.buttonText}>Guess</Text>
          </Pressable>
        </View>
        {hasSubmittedGuess && (
          <GuessComponent
            isCorrect={Number(guess) === computerNumber}
            isHigher={Number(guess) > computerNumber}
            isVisible={componentIsVisible}
            onClose={handleClose}
            correctNumber={computerNumber}
            attempts={attempts.length}
          />
        )}
        <View style={styles.attemptsContainer}>
          <ScrollView>
            {attempts
              .slice()
              .reverse()
              .map((attempt, index) => (
                <Text style={styles.attemptText} key={index}>
                  Attempt {attempts.length - index}: {attempt.guess} -{" "}
                  {attempt.result}
                </Text>
              ))}
          </ScrollView>
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
  attemptsContainer: {
    width: "100%",
    alignItems: "center",
    height: 200,
  },
  attemptText: {
    color: "white",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});
