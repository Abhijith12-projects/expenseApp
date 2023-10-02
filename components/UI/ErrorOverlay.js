import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/styles";
import Button from "./Button";

const ErrorOverlay = ({ message, confirm }) => {
  return (
    <View styles={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={confirm}>Close</Button>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.colors.primary700,
  },
  text: {
    color: "black",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
