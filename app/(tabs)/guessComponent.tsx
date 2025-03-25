import React from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";

interface GuessComponentProps {
  isCorrect: boolean;
  isHigher: boolean;
  isVisible: boolean;
  onClose: () => void;
  correctNumber: number;
  attempts: number;
}

const GuessComponent = ({
  isCorrect,
  isHigher,
  isVisible,
  onClose,
  correctNumber,
  attempts,
}: GuessComponentProps) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={modalContentStyle(isCorrect) as StyleProp<ViewStyle>}>
          {isCorrect ? (
            <>
              <Text>The number was...</Text>
              <Text style={styles.correctNumberText}>{correctNumber}</Text>
              <Text>
                It took you <Text style={styles.boldText}>{attempts}</Text>{" "}
                attempts to guess the number!
              </Text>
            </>
          ) : isHigher ? (
            <Text style={styles.wrongGuessText}>Too high!</Text>
          ) : (
            <Text style={styles.wrongGuessText}>Too low!</Text>
          )}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#E5C98B",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  wrongGuessText: {
    color: "white",
    fontSize: 30,
  },
  correctNumberText: {
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});

const modalContentStyle = (isCorrect: boolean) => ({
  backgroundColor: isCorrect ? "#03CEA4" : "#D62839",
  padding: 20,
  borderRadius: 10,
  width: 300,
  height: 200,
  justifyContent: "center",
  alignItems: "center",
});

export default GuessComponent;
