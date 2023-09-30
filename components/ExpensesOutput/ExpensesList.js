import { Text } from "react-native";
import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpense(itemData) {
  return <ExpenseItem {...itemData.item} />;
}
const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpense}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
