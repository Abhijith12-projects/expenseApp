import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { Pressable, View } from "react-native";
import { Colors } from "../../constants/styles";
import { dateFormatter } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ id, description, date, amount }) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate("ManegeExpense", { expenseId: id });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={(pressed) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textColor, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textColor}>{dateFormatter(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{parseInt(amount).toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: { opacity: 0.75 },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
  },
  textColor: {
    color: Colors.colors.primary50,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: Colors.colors.primary500,
    fontWeight: "bold",
  },
});
