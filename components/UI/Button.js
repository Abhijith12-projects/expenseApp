import { StyleSheet } from "react-native";
import { Text, Pressable, View } from "react-native";
import { Colors } from "../../constants/styles";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.buttonStyle, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "falt" && style.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: { color: "white", textAlign: "center" },
  flatText: {
    color: Colors.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.colors.primary100,
    borderRadius: 4,
  },
});
