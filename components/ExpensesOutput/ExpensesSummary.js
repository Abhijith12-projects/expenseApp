import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Colors } from "../../constants/styles";

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses.reduce((acc, cur) => {
    return acc + +cur.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>RS {expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    backgroundColor: Colors.colors.primary50,
    borderRadius: 6,
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: Colors.colors.primary500,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.colors.primary500,
  },
});
