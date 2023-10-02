import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: ({ id }) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "addItems":
      return [{ ...action.payload }, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "updateItems":
      const currentIdx = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatedExpense = state[currentIdx];
      const newItem = { ...updatedExpense, ...action.payload.data };
      const finalExpense = [...state];
      finalExpense[currentIdx] = newItem;
      return finalExpense;
    case "deleteItems":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "addItems", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "deleteItems", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "updateItems", payload: { id: id, data: expenseData } });
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
