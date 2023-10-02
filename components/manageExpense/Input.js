import { TextInput, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

const Input = ({ label, textInputConfig, style }) => {
  let inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: Colors.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Colors.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: Colors.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
