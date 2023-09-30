import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpense = () => {
  const expenseCtx = useContext(ExpensesContext);
  const recentExpense = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7daysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 days"
      expenses={recentExpense}
      fallBack="No Expenses Registered for the past 7 days"
    />
  );
};

export default RecentExpense;
