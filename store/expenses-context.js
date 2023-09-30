import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: "899",
    date: new Date("2023-8-27"),
  },
  {
    id: "e2",
    description: "A pair of pants",
    amount: "1099",
    date: new Date("2023-9-2"),
  },
  {
    id: "e3",
    description: "Biscuit",
    amount: "500",
    date: new Date("2023-9-3"),
  },
  // {
  //   id: "e4",
  //   description: "Biryani",
  //   amount: "699",
  //   date: new Date("2023-9-7"),
  // },
  // {
  //   id: "e5",
  //   description: "Mandi",
  //   amount: "697",
  //   date: new Date("2023-9-12"),
  // },
  // {
  //   id: "e12",
  //   description: "Biryani",
  //   amount: "699",
  //   date: new Date("2023-9-7"),
  // },
  // {
  //   id: "e6",
  //   description: "Mandi",
  //   amount: "697",
  //   date: new Date("2023-9-12"),
  // },
  // {
  //   id: "e7",
  //   description: "Biryani",
  //   amount: "699",
  //   date: new Date("2023-9-7"),
  // },
  // {
  //   id: "e9",
  //   description: "Mandi",
  //   amount: "697",
  //   date: new Date("2023-9-12"),
  // },
  {
    id: "e10",
    description: "Biryani",
    amount: "699",
    date: new Date("2023-9-24"),
  },
  {
    id: "e11",
    description: "Mandi",
    amount: "697",
    date: new Date("2023-9-25"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: ({ id }) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "addItems":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "updateItems":
      console.log("in switch case  updating", action.payload);
      const currentIdx = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      console.log(currentIdx, "index");
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
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    console.log("addExpense", expenseData);
    dispatch({ type: "addItems", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "deleteItems", payload: id });
  }
  function updateExpense(id, expenseData) {
    console.log(id, expenseData);
    dispatch({ type: "updateItems", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
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
