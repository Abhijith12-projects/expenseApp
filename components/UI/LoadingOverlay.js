import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { Colors } from "../../constants/styles";

const LoadingOverlay = () => {
  return (
    <View styles={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.colors.primary700,
  },
});
