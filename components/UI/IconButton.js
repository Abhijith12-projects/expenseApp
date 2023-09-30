import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const IconButton = ({ name, size, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={(pressed) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 8,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});