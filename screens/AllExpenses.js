import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expensesPeriod="Total"
      expenses={expenseCtx.expenses}
      fallBack="No Expenses found"
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
