import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpense = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();
  const expenseCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);
      try {
        const expenses = await fetchExpenses();
        expenseCtx.setExpenses(expenses);
      } catch (error) {
        setIsError("Could not Fetch expenses!");
      }
      setIsLoading(false);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setIsError(null);
  }

  if (isError && !isLoading) {
    return <ErrorOverlay message={isError} confirm={errorHandler} />;
  }
  if (isLoading) {
    return <LoadingOverlay />;
  }

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
