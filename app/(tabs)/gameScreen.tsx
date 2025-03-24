import { Text, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  {
    /** Home screen for the app */
  }
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Text style={styles.title}>Guess The Number</Text>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.homeButton}>
            <Text style={styles.buttonText}>Play Against Computer</Text>
            {/** Go to gameScreen.tsx */}
          </Pressable>
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
